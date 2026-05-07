const screens = document.querySelectorAll(".screen");

const question = document.getElementById("question");
const result = document.getElementById("result");
const scoreText = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");
const choiceButtons = document.querySelectorAll(".choice-btn");

const quizCount = document.getElementById("quiz-count");
const quizMode = document.getElementById("quiz-mode");
const startBtn = document.getElementById("start-btn");
const progress = document.getElementById("progress");

const wrongMenuBtn = document.getElementById("wrong-menu-btn");
const wordbookMenuBtn = document.getElementById("wordbook-menu-btn");
const backButtons = document.querySelectorAll(".back-btn");

const wrongList = document.getElementById("wrong-list");
const reviewWrongBtn = document.getElementById("review-wrong-btn");
const clearWrongBtn = document.getElementById("clear-wrong-btn");

const searchInput = document.getElementById("search-input");
const wordList = document.getElementById("word-list");

let currentWord;
let currentPool = words;

let score = 0;
let total = 0;
let questionNumber = 0;
let sessionLimit = 10;

let usedWords = [];
let wrongWords = JSON.parse(localStorage.getItem("wrongWords")) || [];

renderWrongList();
renderWordList(words);

function showScreen(screenId) {
  screens.forEach((screen) => {
    screen.classList.remove("active");
  });

  document.getElementById(screenId).classList.add("active");
}

function startQuiz(pool = words) {
  currentPool = pool;

  score = 0;
  total = 0;
  questionNumber = 0;
  usedWords = [];

  sessionLimit =
    quizCount.value === "all"
      ? currentPool.length
      : Number(quizCount.value);

  updateScore();
  showScreen("quiz-screen");
  loadQuestion();
}

function loadQuestion() {
  if (questionNumber >= sessionLimit) {
    endQuiz();
    return;
  }

  if (usedWords.length === currentPool.length) {
    usedWords = [];
  }

  do {
    currentWord = currentPool[Math.floor(Math.random() * currentPool.length)];
  } while (usedWords.includes(currentWord));

  usedWords.push(currentWord);
  questionNumber++;

  const mode = quizMode.value;

  const questionText =
    mode === "engToKor"
      ? `${currentWord.english} 뜻은?`
      : `"${currentWord.meaning}"에 해당하는 영어는?`;

  const correctAnswer =
    mode === "engToKor"
      ? currentWord.meaning
      : currentWord.english;

  question.textContent = questionText;
  progress.textContent = `QUESTION ${questionNumber} / ${sessionLimit}`;

  let options = [correctAnswer];

  while (options.length < 5) {
    const randomWord = words[Math.floor(Math.random() * words.length)];

    const wrongAnswer =
      mode === "engToKor"
        ? randomWord.meaning
        : randomWord.english;

    if (!options.includes(wrongAnswer)) {
      options.push(wrongAnswer);
    }
  }

  options.sort(() => Math.random() - 0.5);

  choiceButtons.forEach((btn, index) => {
    btn.textContent = options[index];
    btn.disabled = false;
    btn.style.backgroundColor = "#f3e47a";
  });

  result.textContent = "결과";
  result.className = "result-box";
}

choiceButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const mode = quizMode.value;

    const correctAnswer =
      mode === "engToKor"
        ? currentWord.meaning
        : currentWord.english;

    total++;

    if (btn.textContent === correctAnswer) {
      result.textContent = "✅ 정답입니다!";
      result.className = "result-box correct";
      btn.style.backgroundColor = "#baf7c7";
      score++;
    } else {
      result.textContent = `❌ 오답입니다! 정답 : ${correctAnswer}`;
      result.className = "result-box wrong";
      btn.style.backgroundColor = "#ffc0c7";

      addWrongWord(currentWord);

      choiceButtons.forEach((button) => {
        if (button.textContent === correctAnswer) {
          button.style.backgroundColor = "#baf7c7";
        }
      });
    }

    updateScore();

    choiceButtons.forEach((button) => {
      button.disabled = true;
    });
  });
});

function updateScore() {
  scoreText.textContent = `🎯 점수 : ${score} / ${total}`;
}

function addWrongWord(word) {
  const exists = wrongWords.some((wrong) => wrong.english === word.english);

  if (!exists) {
    wrongWords.push(word);
    localStorage.setItem("wrongWords", JSON.stringify(wrongWords));
    renderWrongList();
  }
}

function renderWrongList() {
  wrongList.innerHTML = "";

  if (wrongWords.length === 0) {
    wrongList.innerHTML = "<li>아직 오답이 없습니다.</li>";
    return;
  }

  wrongWords.forEach((word) => {
    const li = document.createElement("li");
    li.textContent = `${word.english} - ${word.meaning}`;
    wrongList.appendChild(li);
  });
}

function renderWordList(list) {
  wordList.innerHTML = "";

  list.forEach((word) => {
    const div = document.createElement("div");
    div.className = "word-item";

    div.innerHTML = `
      <strong>${word.english}</strong>
      <span>${word.meaning}</span>
    `;

    wordList.appendChild(div);
  });
}

function endQuiz() {
  question.textContent = "퀴즈가 종료되었습니다!";
  progress.textContent = "FINISH";
  result.textContent = `최종 점수 : ${score} / ${total}`;
  result.className = "result-box correct";

  choiceButtons.forEach((btn) => {
    btn.textContent = "";
    btn.disabled = true;
    btn.style.backgroundColor = "#ddd";
  });
}

startBtn.addEventListener("click", () => {
  startQuiz(words);
});

nextBtn.addEventListener("click", loadQuestion);

wrongMenuBtn.addEventListener("click", () => {
  renderWrongList();
  showScreen("wrong-screen");
});

wordbookMenuBtn.addEventListener("click", () => {
  renderWordList(words);
  showScreen("wordbook-screen");
});

backButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    showScreen("home-screen");
  });
});

reviewWrongBtn.addEventListener("click", () => {
  if (wrongWords.length < 5) {
    alert("오답이 5개 이상 있어야 오답 다시 풀기가 가능합니다.");
    return;
  }

  startQuiz(wrongWords);
});

clearWrongBtn.addEventListener("click", () => {
  wrongWords = [];
  localStorage.removeItem("wrongWords");
  renderWrongList();
});

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();

  const filteredWords = words.filter((word) => {
    return (
      word.english.toLowerCase().includes(keyword) ||
      word.meaning.includes(keyword)
    );
  });

  renderWordList(filteredWords);
});
