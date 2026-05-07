const question = document.getElementById("question");

    while (options.length < 5) {

        let randomWord =
            words[Math.floor(Math.random() * words.length)];


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



choiceButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        total++;


        if (btn.textContent === currentWord.meaning) {

            result.textContent = "✅ 정답입니다!";

            result.style.color = "green";

            btn.style.backgroundColor = "#aaffaa";

            score++;

        } else {

            result.textContent =
                `❌ 오답입니다! 정답 : ${currentWord.meaning}`;

            result.style.color = "red";

            btn.style.backgroundColor = "#ffb0b0";


            choiceButtons.forEach(button => {

                if (button.textContent === currentWord.meaning) {

                    button.style.backgroundColor = "#aaffaa";
                }
            });
        }


        scoreText.textContent =
            `🎯 점수 : ${score} / ${total}`;


        choiceButtons.forEach(button => {

            button.disabled = true;
        });
    });
});


nextBtn.addEventListener("click", loadQuestion);


loadQuestion();
