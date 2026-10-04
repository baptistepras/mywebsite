// Semantic search for the chatbot: MiniLM runs in the browser, from files hosted on this site.
// Nothing is sent to a third party. If anything fails, the chatbot keeps its keyword search.
import { pipeline, env } from "./vendor/transformers/transformers.min.js";

const MODEL = "Xenova/all-MiniLM-L6-v2";
const MATCH_THRESHOLD = 0.55; // cosine similarity needed to answer directly
const ANSWER_PENALTY = 0.1; // answers are searched too, but count less than questions

// Local files only
env.allowRemoteModels = false;
env.allowLocalModels = true;
env.localModelPath = new URL("./models/", import.meta.url).href;
env.backends.onnx.wasm.wasmPaths = new URL("./vendor/onnxruntime/", import.meta.url).href;
env.backends.onnx.wasm.numThreads = 1;

let loading = null;
let extractor = null;
let entries = null; // one vector per question or alias, with the index of its entry

/** Embed a list of texts into normalized sentence vectors. */
async function embed(texts) {
  const output = await extractor(texts, { pooling: "mean", normalize: true });
  return output.tolist();
}

/** Dot product of two normalized vectors, which equals their cosine similarity. */
function cosine(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) sum += a[i] * b[i];
  return sum;
}

/** Skip the download on connections that ask to save data or are very slow. */
function connectionTooSlow() {
  const c = navigator.connection;
  return Boolean(c && (c.saveData || ["slow-2g", "2g"].includes(c.effectiveType)));
}

/** Load the model and embed every question and alias, once. */
function load() {
  if (!loading) {
    if (connectionTooSlow()) return Promise.reject(new Error("slow connection"));
    loading = (async () => {
      extractor = await pipeline("feature-extraction", MODEL, { quantized: true });
      const texts = [];
      const owners = [];
      qaData.forEach((item, index) => {
        [item.question, ...(item.aliases || [])].forEach(text => {
          texts.push(text);
          owners.push({ index, penalty: 0 });
        });
        texts.push(item.answer);
        owners.push({ index, penalty: ANSWER_PENALTY });
      });
      const vectors = await embed(texts);
      entries = vectors.map((vector, k) => ({ ...owners[k], vector }));
    })().catch(err => {
      console.warn("Semantic search unavailable, keyword search is used instead.", err);
      loading = null;
      throw err;
    });
  }
  return loading;
}

/** Return the best entry if it is close enough, and the three closest entries as suggestions. */
async function search(query, topK = 3) {
  const [q] = await embed([query]);
  const best = new Map();
  for (const e of entries) {
    const score = cosine(q, e.vector) - e.penalty;
    if (!best.has(e.index) || score > best.get(e.index)) best.set(e.index, score);
  }
  const ranked = [...best.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, topK)
    .map(([index, score]) => ({ item: qaData[index], score }));
  return {
    match: ranked.length && ranked[0].score >= MATCH_THRESHOLD ? ranked[0].item : null,
    suggestions: ranked.map(r => r.item),
    scores: ranked.map(r => Number(r.score.toFixed(3)))
  };
}

window.chatSemantic = { load, search, isReady: () => entries !== null };
