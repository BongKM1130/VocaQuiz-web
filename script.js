const question = document.getElementById("question");
const result = document.getElementById("result");
const scoreText = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");
const choiceButtons = document.querySelectorAll(".choice-btn");

let currentWord;

let score = 0;
let total = 0;

let usedWords = [];

// words.js 확인
if (typeof words === "undefined") {
    alert("words.js가 제대로 연결되지 않았습니다.");
} else if (words.length < 5) {
    alert("단어가 5개 이상 필요합니다.");
} else {
    loadQuestion();
}

function loadQuestion() {

    if (usedWords.length === words.length) {
        usedWords = [];
    }

    do {
        currentWord = words[Math.floor(Math.random() * words.length)];
    } while (usedWords.includes(currentWord));

    usedWords.push(currentWord);

    question.textContent = currentWord.english + " 뜻은?";

    let options = [currentWord.meaning];

    while (options.length < 5) {
        let randomWord = words[Math.floor(Math.random() * words.length)];

        if (!options.includes(randomWord.meaning)) {
            options.push(randomWord.meaning);
        }
    }

    options.sort(() => Math.random() - 0.5);

    choiceButtons.forEach((btn, index) => {
        btn.textContent = options[index];
        btn.disabled = false;
        btn.style.backgroundColor = "#f0e678";
    });

    result.textContent = "결과";
    result.style.color = "black";
}

choiceButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        total++;

        if (btn.textContent === currentWord.meaning) {
            result.textContent = "✅ 정답입니다!";
            result.style.color = "green";
            btn.style.backgroundColor = "#aaffaa";
            score++;
        } else {
            result.textContent = "❌ 오답입니다! 정답 : " + currentWord.meaning;
            result.style.color = "red";
            btn.style.backgroundColor = "#ffb0b0";

            choiceButtons.forEach(button => {
                if (button.textContent === currentWord.meaning) {
                    button.style.backgroundColor = "#aaffaa";
                }
            });
        }

        scoreText.textContent = "🎯 점수 : " + score + " / " + total;

        choiceButtons.forEach(button => {
            button.disabled = true;
        });
    });
});

nextBtn.addEventListener("click", loadQuestion);
