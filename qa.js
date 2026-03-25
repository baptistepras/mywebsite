const qaData = [
  {
    question: "Who are you?",
    answer: "I'm Baptiste Pras, a Master's student in Artificial Intelligence at Université Paris-Saclay. I also follow the Magistère d'Informatique honors research program. I have two publications and my research interests lie in machine learning, computer vision, and NLP."
  },
  {
    question: "What are your publications?",
    answer: "I have two publications: 'Revisiting Class Imbalance Ratios in Imbalanced Learning', published at the Junior Conference on Data Science & Engineering (JDSE 2025), and 'Fine-Grained Mention-Level Analysis of Biomedical Entity Linking Models', published at Medical Informatics Europe (MIE 2026)."
  },
  {
    question: "What did you do during your research internship?",
    answer: "I worked at LISN (Laboratoire Interdisciplinaire des Sciences du Numérique) on Biomedical Entity Linking. I analyzed BEL models on the BELB benchmark, focusing on their generalization to rare or complex mentions. I developed quantitative and visual analyses of dataset characteristics such as mention length, ambiguity, and frequency, and studied their impact on prediction quality. This work led to a paper published at MIE 2026."
  },
  {
    question: "What did you do during your supervised research project on PICO entities?",
    answer: "I investigated Biomedical Entity Linking strategies to normalize PICO entities (Population, Intervention, Comparison, Outcome) to the MeSH knowledge base at LISN. I developed and evaluated a hybrid normalization pipeline, comparing a custom rule-based heuristic script with ArboEL, a state-of-the-art graph-based entity linking model."
  },
  {
    question: "What did you do during your TER?",
    answer: "I studied the impact of class imbalance on classification tasks using a spherical Teacher-Student perceptron at LISN. I conducted experiments in Python with Scikit-Learn, NumPy, and Matplotlib, testing different noise levels, loss functions, and training methods including gradient descent and Langevin dynamics. I demonstrated that the optimal imbalance ratio in training sets differs from 0.5 in class-imbalanced problems. This work was published at JDSE 2025."
  },
  {
    question: "What did you do at Outlier?",
    answer: "At Outlier (and at Alignerr), I worked remotely as a Generative AI Trainer. I designed and refined prompts to enhance the performance of generative AI models, reviewed and corrected AI-generated outputs to ensure accuracy and quality, and contributed to the continuous improvement of deep learning models through feedback and prompt optimization."
  },
  {
    question: "What did you do at Carrefour?",
    answer: "At Carrefour, I worked to stock shelves and assist clients in the store. I worked every summer since I was 18 (5 summers), usually working 2 months full-time at 36.75 hours per week."
  },
  {
    question: "What are your main skills?",
    answer: "I code primarily in Python (PyTorch, Scikit-Learn, NumPy, Matplotlib), and also in C/C++, Java, OCaml, and SQL. My AI expertise covers Deep Learning, Natural Language Processing, and Computer Vision. I also use tools such as LaTeX, Git, Linux, and Slurm for cluster computing."
  },
  {
    question: "What is your educational background?",
    answer: "I studied Mathematics and Computer Science in a dual bachelor's at Paris-Saclay (2022-2024), then entered the Magistère d'Informatique honors research program in my third year (graduated with honors, 2024-2025). I am now pursuing a Master's degree in Artificial Intelligence at Université Paris-Saclay, started in September 2025. I also spent a year in New York in 2019-2020 in an intensive English language program, reaching C2 proficiency."
  },
  {
    question: "What are your past experiences?",
    answer: "My research experiences include two supervised research projects and a research internship, all at LISN (Université Paris-Saclay), working on biomedical entity linking and class imbalance. I also worked remotely as a Generative AI Trainer at Outlier/Alignerr, and worked five summers at Carrefour as a student job."
  },
  {
    question: "What was your GPA?",
    answer: "My GPAs during my dual bachelor's in Mathematics and Computer Science were 14.67 and 14.47. During my third year in the Magistère d'Informatique program, my GPA was 15.06, and I graduated with honors."
  },
  {
    question: "What languages do you speak?",
    answer: "French is my native language. I am bilingual in English, with a TOEFL iBT score of 108/120 and a TOEIC score of 990/990. I also have conversational Russian."
  },
  {
    question: "Where did you learn to speak English?",
    answer: "I became fluent in English during a year abroad in New York when I was 16, where I followed an intensive English language program and reached C2 proficiency."
  },
  {
    question: "Do you have any projects to show us?",
    answer: "Yes, I have worked on many projects: structure detection in fusion plasma simulations (YOLOv8 pipeline), measuring market impact of financial news (Map-Reduce with Transformers), NBA MVP prediction (Scikit-Learn, >80% accuracy), traffic sign recognition (>95% accuracy), a Dual Sudoku AI agent, a Java-like interpreter in OCaml, and many more. My GitHub is here: https://github.com/baptistepras."
  },
  {
    question: "Tell me more about the plasma simulation project",
    answer: "I developed a multi-stage detection pipeline for structure detection in fusion plasma simulations (Tokamak). It features a YOLOv8 architecture optimized with a custom MLP post-filter for low-contrast frames, a pseudo-labeling strategy to expand a limited 30-image dataset, and a feature extractor targeting intensity statistics and Sobel gradients."
  },
  {
    question: "Tell me more about the financial news project",
    answer: "I engineered a framework to transform unstructured financial news into structured (date, ticker, impact summary) event representations. I implemented a hierarchical Map-Reduce summarization architecture with compact Transformers, ensuring numerical fidelity and entity grounding, and validated results through a finance-oriented LLM-as-a-judge audit."
  },
  {
    question: "Tell me more about the NBA MVP prediction project",
    answer: "I collected and cleaned player and team statistics from publicly available sources to build a structured dataset. I performed feature selection and engineering, experimenting with different attribute selection strategies, and trained several predictive models with Scikit-Learn, achieving over 80% accuracy in predicting the actual MVP outcome."
  },
  {
    question: "Tell me more about the AI for Dual Sudoku project",
    answer: "I designed an AI agent to play a competitive version of Sudoku by combining search algorithms and heuristic strategies. I implemented efficient state representation and evaluation functions to handle the game's combinatorial complexity. The AI won the final competition of the course, outperforming all other agents submitted by the class."
  },
  {
    question: "Tell me more about the Teacher-Student Perceptron",
    answer: "As part of my TER, I implemented a spherical Teacher-Student Perceptron in Python using NumPy, Scikit-Learn, and Matplotlib. It creates a controlled environment to experiment with class imbalance scenarios, covering Gaussian data generation, class assignment, training set resampling, and Perceptron model training under various conditions."
  },
  {
    question: "Tell me more about the traffic sign recognition project",
    answer: "I developed a machine learning model to recognize traffic signs from images. I implemented preprocessing steps including normalization, resizing, and feature extraction, then trained multiple supervised learning algorithms, reaching over 95% accuracy."
  },
  {
    question: "Tell me more about the Java-like interpreter",
    answer: "I built an interpreter in OCaml using Ocamllex and Menhir, supporting basic arithmetic, classes, methods, and Java-like type checking. You can try this language directly on my website."
  },
  {
    question: "What are your achievements?",
    answer: "I won an AI competition by designing the best-performing Dual Sudoku agent in my class. I am also a 3-time Prologin finalist, which is a national algorithmic programming contest in France."
  },
  {
    question: "What do you want to do in the future?",
    answer: "After completing my master's degree, I wish to pursue a PhD. I then want to do research, either in the industry or as a researcher-professor at a university."
  },
  {
    question: "What fields do you want to work in?",
    answer: "I am particularly interested in defense and energy, but I am also considering working in finance."
  },
  {
    question: "Tell me more about yourself",
    answer: "Besides my passion for Artificial Intelligence, I play basketball, enjoy hiking, and have participated in several algorithmic contests. I particularly enjoy solving algorithmic problems in graphs."
  },
  {
    question: "How can I contact you?",
    answer: "You can contact me at my institutional email address: baptiste.pras@universite-paris-saclay.fr. You can also find me on LinkedIn: https://www.linkedin.com/in/baptiste-pras/."
  },
  {
    question: "Do you have any references?",
    answer: "References from my previous experiences are available upon request. My supervisors at LISN include Nona Naderi and François Landes (Université Paris-Saclay)."
  },
];
