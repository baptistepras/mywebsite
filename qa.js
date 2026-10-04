const qaData = [
  {
    question: "Who are you?",
    aliases: ["Introduce yourself", "What is your name?", "Can you present yourself?"],
    answer: "I'm Baptiste Pras, a second-year Master's student in Artificial Intelligence at Université Paris-Saclay, in the PhD track. I work on computer vision, NLP, and imbalanced learning, I have three publications, and I have a funded PhD position at Université Paris-Saclay lined up after the master."
  },
  {
    question: "What are your research interests?",
    aliases: ["What do you work on?", "What is your field of research?", "What topics do you study?"],
    answer: "My research covers three areas: computer vision (object counting, detection, video prediction), NLP (biomedical entity linking, information retrieval, summarization), and imbalanced learning."
  },
  {
    question: "What are your publications?",
    aliases: ["Have you published any papers?", "Which conferences have you presented at?", "List your papers"],
    answer: "I have three publications: 'Point-Based Counting of Cereals and Legumes in Intercropped Fields' (poster, Junior Conference on Data Science and Engineering, JDSE 2026), 'Fine-Grained Mention-Level Analysis of Biomedical Entity Linking Models' with Nona Naderi (full paper, Medical Informatics Europe, MIE 2026), and 'Revisiting Optimal Class Ratios in Imbalanced Learning' (full paper, JDSE 2025). They are all listed with links in the Publications section."
  },
  {
    question: "What will your PhD be about?",
    aliases: ["Do you have a PhD position?", "What is your thesis topic?", "Where will you do your PhD?", "Tell me about your work on drones", "Do you work on radar or infrared signals?"],
    answer: "After the master, I will start a PhD at Université Paris-Saclay on robust and explainable multimodal detection of small aerial targets, such as drones and birds, from radar and infrared signals."
  },
  {
    question: "Are you looking for an internship?",
    aliases: ["When are you available?", "Are you available for an internship in 2027?", "Are you looking for a job?", "Can we hire you?", "Are you available next spring?"],
    answer: "Yes, I am looking for a 6-month end-of-studies research internship starting in early 2027, in computer vision, NLP or signal processing."
  },
  {
    question: "What did you do during your internship on plant counting?",
    aliases: ["What did you do at Inria?", "Tell me about your 2026 internship"],
    answer: "From May to August 2026, at Inria, I designed an automated per-species counting pipeline for wheat and pea in intercropped plots, from UAV and smartphone imagery. I benchmarked few-shot and crowd-counting models, then worked with a fine-tuned point-query transformer (PET), reaching 4.69% MAPE on wheat and 7.83% MAPE on pea. The work was presented as a poster at JDSE 2026."
  },
  {
    question: "What did you do during your internship on biomedical entity linking?",
    aliases: ["Tell me about your 2025 internship", "What is biomedical entity linking?"],
    answer: "From May to August 2025, at LISN, I analyzed biomedical entity linking models on the BELB benchmark, focusing on how well they generalize to rare or complex mentions. I measured performance across mention characteristics such as length, ambiguity, and frequency, identified consistent weaknesses of recent models, and proposed improvements. The work was published at MIE 2026."
  },
  {
    question: "What did you do during your supervised research project on PICO entities?",
    answer: "From January to March 2026, at LISN, I investigated biomedical entity linking strategies to normalize PICO entities (Population, Intervention, Comparison, Outcome) to the MeSH knowledge base. I developed and evaluated a hybrid normalization pipeline, comparing a custom rule-based script with ArboEL, a state-of-the-art graph-based entity linking model."
  },
  {
    question: "What did you do during your supervised research project on class imbalance?",
    answer: "From January to May 2025, at LISN, I studied the impact of class imbalance on classification with a spherical teacher-student perceptron. I tested different noise levels, loss functions, and training methods (gradient descent and Langevin dynamics), and showed that the optimal imbalance ratio in the training set differs from 0.5. The work was published at JDSE 2025."
  },
  {
    question: "What did you do at Outlier?",
    aliases: ["What did you do at Alignerr?", "What is a Generative AI Trainer?"],
    answer: "From January 2025 to May 2026, I worked remotely as a Generative AI Trainer for Outlier and Alignerr. I evaluated and refined LLM reasoning on complex coding and mathematical tasks, designed adversarial prompts, and assessed multi-step outputs to reduce hallucinations and improve factual grounding for RLHF pipelines."
  },
  {
    question: "What did you do at Carrefour?",
    answer: "At Carrefour, I worked to stock shelves and assist clients in the store. I worked every summer since I was 18 (5 summers), usually working 2 months full-time at 36.75 hours per week."
  },
  {
    question: "What are your past experiences?",
    aliases: ["What is your work experience?", "Where have you worked?", "Tell me about your internships"],
    answer: "I did two research internships (biomedical entity linking at LISN in 2025, plant counting in the TAU team at Inria in 2026) and two supervised research projects at LISN (class imbalance in 2025, PICO entity normalization in 2026). I also worked remotely as a Generative AI Trainer for Outlier and Alignerr, and five summers at Carrefour as a student job."
  },
  {
    question: "What is your educational background?",
    aliases: ["Where do you study?", "Which university do you go to?", "What are your degrees?"],
    answer: "I studied mathematics and computer science in a double bachelor's degree at Université Paris-Saclay (2022 to 2024), then followed the Magistère d'Informatique honors research program (2024 to 2025, graduated with honors). Since September 2025, I have been pursuing a Master's degree in Artificial Intelligence at Université Paris-Saclay, in the PhD track. I also spent a year in New York (2019 to 2020) in an intensive English language program."
  },
  {
    question: "What was your GPA?",
    aliases: ["What are your grades?", "Were you a good student?"],
    answer: "My GPAs during my dual bachelor's in Mathematics and Computer Science were 14.67 and 14.47. During my third year in the Magistère d'Informatique program, my GPA was 15.06, and I graduated with honors. During my first year of the Master's in Artificial Intelligence, my GPA was 15.68."
  },
  {
    question: "What are your main skills?",
    aliases: ["What programming languages do you know?", "Do you know PyTorch?", "What tools do you use?"],
    answer: "I code mainly in Python (PyTorch, Scikit-Learn, NumPy, Hugging Face, OpenCV), and also know C/C++, Java, OCaml, Bash, and SQL. My AI skills cover deep learning, computer vision, NLP, signal processing, and machine learning. I also use Git, Linux, LaTeX, and Slurm for cluster computing."
  },
  {
    question: "What languages do you speak?",
    aliases: ["Do you speak English?", "Do you speak French?"],
    answer: "French is my native language. I am bilingual in English, with a TOEFL iBT score of 108/120 and a TOEIC score of 990/990. I also have conversational Russian."
  },
  {
    question: "Where did you learn to speak English?",
    answer: "I became fluent in English during a year abroad in New York when I was 16, where I followed an intensive English language program and reached C2 proficiency."
  },
  {
    question: "Do you have any projects to show us?",
    aliases: ["What are your projects?", "What is your best project?", "Show me your work"],
    answer: "Yes. My main projects are Peekaboo (predictive coding networks that keep track of hidden objects), structure detection in fusion plasma simulations, per-species plant counting, CycleGAN in pure NumPy, scientific citation retrieval, measuring the market impact of financial news, a spherical teacher-student perceptron, and fairness in medical image classification. You can also try my Kawa interpreter, my CV Generator, and LinguaGuess on this website. Everything is on my GitHub: https://github.com/baptistepras."
  },
  {
    question: "Tell me more about the Peekaboo project",
    aliases: ["What is PredNet?", "Tell me about predictive coding", "What is your current project?"],
    answer: "Peekaboo is my ongoing project on predictive coding. A digit moves behind an occluder and reappears, as expected or in a surprising way, and I measure what a PredNet model (reimplemented in PyTorch) predicts while the object is hidden, what its internal state still encodes about it, and how its prediction errors react to surprises. The pilot PredNet already predicts the next frame with an error 95% below the blank frame baseline."
  },
  {
    question: "Tell me more about the plasma simulation project",
    aliases: ["Tell me about the YOLOv8 project", "Tell me about the Codabench challenge"],
    answer: "I built a detection pipeline for blob structures in fusion plasma simulations, with very few labeled frames. A YOLOv8 detector is trained on the labeled frames, then retrained with pseudo-labels selected by an MLP on hand-crafted features (intensity statistics, Sobel gradients). At inference, geometric filters and a patch CNN trained on the detector's own errors remove false positives. It reached 81% AP50 and ranked 4th out of 94 on a Codabench challenge."
  },
  {
    question: "Tell me more about the plant counting project",
    aliases: ["How do you count wheat and pea plants?", "Tell me about the JDSE 2026 poster"],
    answer: "I adapted PET, a point-query crowd-counting transformer, to count wheat and pea plants separately in intercropped fields from smartphone photos. Counting wheat leaf tips instead of whole plants, resizing whole images, and filtering points near the edges gave 4.7% MAPE on wheat and 7.8% MAPE on pea. It was presented as a poster at JDSE 2026."
  },
  {
    question: "Tell me more about the CycleGAN project",
    answer: "I rewrote CycleGAN from scratch in pure NumPy, without PyTorch or any automatic differentiation. I hand-coded the forward and backward passes of the ResNet generators and PatchGAN discriminators, the losses, and the Adam optimizer, and reproduced the cycle consistency effect on horse2zebra and apple2orange, with a test cycle L1 error of about 0.20."
  },
  {
    question: "Tell me more about the information retrieval project",
    aliases: ["Tell me about citation retrieval", "Tell me about learning to rank"],
    answer: "In a team of three, we built a citation retrieval pipeline on 20,000 scientific papers. Starting from TF-IDF and MiniLM baselines (MAP 0.45), we added BM25, four dense encoders, and citation contexts mined from the full text, then combined 16 signals with an XGBoost learning to rank model to reach a MAP of 0.67."
  },
  {
    question: "Tell me more about the financial news project",
    aliases: ["Tell me about the summarization project", "Tell me about the market impact project"],
    answer: "In a team of four, we built a frugal pipeline that turns financial news into (date, ticker, impact) events. I developed the hierarchical map-reduce summarizer (fine-tuned Flan-T5-large) and its LLM-as-a-judge audit of numeric fidelity and issuer grounding. A baseline predicting next-day abnormal returns from the summaries found no usable signal, a negative result we analyzed in the report."
  },
  {
    question: "Tell me more about the Teacher-Student Perceptron",
    aliases: ["Tell me about class imbalance", "Tell me about your JDSE 2025 paper"],
    answer: "It is the code of my JDSE 2025 paper: a spherical teacher-student perceptron implemented from scratch in NumPy, to study how class imbalance in the training data affects classification. It compares loss functions, noise levels, and training methods (gradient descent and Langevin dynamics), and shows that the optimal class ratio in the training set differs from 0.5."
  },
  {
    question: "Tell me more about the fairness project",
    aliases: ["Tell me about bias in AI", "Tell me about the chest X-ray project"],
    answer: "I measured and reduced the bias of a chest X-ray classifier across age and sex groups, using the true and false positive rates of each group. I compared pre-processing methods (sample reweighting, Kamiran and Calders) with post-processing methods (reject option classification, equalized odds). On the reweighted model, post-processing narrowed the gap in true positive rates between groups from 0.19 to 0.10."
  },
  {
    question: "Tell me more about the NBA MVP prediction project",
    answer: "We collected and cleaned player and team statistics from public sources, engineered and selected features, and compared several Scikit-Learn models to predict the NBA Most Valuable Player, with over 80% accuracy in finding the actual MVP."
  },
  {
    question: "Tell me more about the traffic sign recognition project",
    answer: "I built a traffic sign classifier from photos: preprocessing (cropping, resizing, normalization), hand-crafted image features, and several supervised classifiers, reaching over 95% accuracy."
  },
  {
    question: "Tell me more about the AI for Dual Sudoku project",
    answer: "With a teammate, I designed AI agents in Java for Dual Sudoku, a two-player variant of Sudoku: random automata, minimax, alpha-beta pruning, and a tournament agent combining heuristic search and game state evaluation. Our agent won the tournament against the agents of the other teams."
  },
  {
    question: "Tell me more about the Java-like interpreter",
    aliases: ["What is Kawa?", "Have you built a compiler?"],
    answer: "Kawa is an interpreter for a small object-oriented language inspired by Java, written in OCaml with OCamllex and Menhir. It covers lexing, parsing, static type checking, and interpretation, with classes, inheritance, and methods. You can try it directly on this website, in the Try It Yourself section."
  },
  {
    question: "What is the CV Generator?",
    answer: "The CV Generator is a web app I built to create a LaTeX CV in the browser and export it as LaTeX, PDF, or an Overleaf project. You can use it for free at https://baptistepras.github.io/cv-generator/."
  },
  {
    question: "What is LinguaGuess?",
    answer: "LinguaGuess is a browser game I built: you read a short passage and guess its language among Slavic, Romance, and Nordic languages, with a public leaderboard. You can play at https://linguaguess.pages.dev/."
  },
  {
    question: "What are your achievements?",
    aliases: ["What is Prologin?", "Have you won any competitions?"],
    answer: "I am a three-time finalist of Prologin, the French national programming contest (38th out of 106, then 18th out of 95, then 23rd out of 112), and a finalist of the Gradient contest. My Dual Sudoku agent also won a tournament against the agents of the other teams, and my plasma detection pipeline ranked 4th out of 94 on a Codabench challenge."
  },
  {
    question: "What do you want to do in the future?",
    aliases: ["What are your career goals?", "Do you want to stay in research?"],
    answer: "After completing my master's degree, I will start a PhD at Université Paris-Saclay. I then want to do research, either in the industry or as a researcher-professor at a university."
  },
  {
    question: "What fields do you want to work in?",
    answer: "I am particularly interested in defense, cybersecurity, physics and energy."
  },
  {
    question: "Tell me more about yourself",
    aliases: ["What are your hobbies?", "What do you do in your free time?"],
    answer: "Besides my passion for Artificial Intelligence, I play basketball, enjoy hiking, and have participated in several algorithmic contests."
  },
  {
    question: "Where can I see your code?",
    aliases: ["What is your GitHub?", "Can I see your code?"],
    answer: "All my projects are on my GitHub: https://github.com/baptistepras. Each repository has a README explaining the project and how to run it."
  },
  {
    question: "Can I see your CV?",
    answer: "Yes, you can download my CV from the link at the top of this page, in the Home section."
  },
  {
    question: "How can I contact you?",
    aliases: ["What is your email?", "How can I reach you?"],
    answer: "You can contact me at my institutional email address: baptiste.pras@universite-paris-saclay.fr. You can also find me on LinkedIn: https://www.linkedin.com/in/baptiste-pras/."
  },
  {
    question: "Do you have any references?",
    aliases: ["Can you provide a reference?", "Do you have recommendations?", "Who were your supervisors?", "Who is Nona Naderi?", "Who is François Landes?"],
    answer: "References from my previous experiences are available upon request. My supervisors at LISN and Inria include Nona Naderi and François Landes (Université Paris-Saclay)."
  },
];
