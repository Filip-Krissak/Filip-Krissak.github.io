document.addEventListener("DOMContentLoaded", () => {
    const quizContainer = document.getElementById("quiz-container");
    const submitBtn = document.getElementById("submit-btn");
    const resultContainer = document.getElementById("result-container");

    // Render the quiz
    function renderQuiz() {
        quizData.forEach((item, index) => {
            const questionDiv = document.createElement("div");
            questionDiv.classList.add("question");
            questionDiv.innerHTML = `<p>${index + 1}. ${item.question}</p>`;

            const optionsDiv = document.createElement("div");
            optionsDiv.classList.add("options");

            item.options.forEach((option, i) => {
                optionsDiv.innerHTML += `
                    <label>
                        <input type="checkbox" name="question-${index}" value="${i}">
                        ${option}
                    </label><br>
                `;
            });

            questionDiv.appendChild(optionsDiv);
            quizContainer.appendChild(questionDiv);
        });
    }

    // Calculate and display the results
    function calculateResults() {
        let score = 0;

        quizData.forEach((item, index) => {
            const selectedOptions = Array.from(
                document.querySelectorAll(`input[name="question-${index}"]:checked`)
            ).map((input) => parseInt(input.value));

            const isCorrect =
                selectedOptions.length === item.correct.length &&
                selectedOptions.every((opt) => item.correct.includes(opt));

            if (isCorrect) {
                score++;
            }
        });

        resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
    }

    renderQuiz();

    submitBtn.addEventListener("click", calculateResults);
});
