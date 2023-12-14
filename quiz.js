const quizData = {
    "Large Amounts of Data": {
        1: {
            question: "What is the primary goal of handling large amounts of data?",
            options: ["To extract meaningful insights", "To calculate the mean", "To create scatter plots", "To find the mode"],
            answer: "To extract meaningful insights"
        },
        2: {
            question: "What is 'Big Data'?",
            options: ["A popular social media platform", "Extremely large datasets", "A programming language", "A type of computer virus"],
            answer: "Extremely large datasets"
        },
        3: {
            question: "What is data preprocessing in the context of large datasets?",
            options: ["Cooking raw data", "Cleaning and transforming data", "Sorting data alphabetically", "Encrypting data"],
            answer: "Cleaning and transforming data"
        },
        // Add more questions for this category
    },
    "Single Variable Data": {
        4: {
            question: "What is a common measure of central tendency for a single variable dataset?",
            options: ["Mean", "Median", "Mode", "Standard Deviation"],
            answer: "Mean"
        },
        5: {
            question: "What does the median represent in a dataset?",
            options: ["The most frequent value", "The middle value", "The average value", "The maximum value"],
            answer: "The middle value"
        },
        6: {
            question: "How is the standard deviation calculated?",
            options: ["Dividing the range by the mean", "Taking the square root of the variance", "Multiplying the mean by the median", "Adding the minimum and maximum values"],
            answer: "Taking the square root of the variance"
        },
        // Add more questions for this category
    },
    "Scatter Plots and Mathematical Modeling": {
        7: {
            question: "What is the purpose of a scatter plot?",
            options: ["To visualize the relationship between two variables", "To calculate the median", "To find outliers", "To draw a histogram"],
            answer: "To visualize the relationship between two variables"
        },
        8: {
            question: "What is correlation in the context of scatter plots?",
            options: ["A statistical measure of association", "A type of mathematical model", "A type of data point", "A graphing tool"],
            answer: "A statistical measure of association"
        },
        9: {
            question: "What is linear regression used for in mathematical modeling?",
            options: ["Creating pie charts", "Predicting future values", "Sorting data", "Creating bar graphs"],
            answer: "Predicting future values"
        },
        // Add more questions for this category
    }
    // Add more categories as needed
};

function loadQuestions() {
    const questionsElement = document.getElementById("questions");
    questionsElement.innerHTML = "";

    for (const category in quizData) {
        const categoryElement = document.createElement("h2");
        categoryElement.textContent = category;
        questionsElement.appendChild(categoryElement);

        for (const [number, data] of Object.entries(quizData[category])) {
            const questionElement = document.createElement("li");
            questionElement.classList.add("quiz-question"); // Add this line
            questionElement.innerHTML = `<strong>${data.question}</strong><br>`;

            for (const option of data.options) {
                questionElement.innerHTML += `<input type="radio" name="q${number}" value="${option}"> ${option}<br>`;
            }

            questionsElement.appendChild(questionElement);
        }
    }
}

function startQuiz() {
    loadQuestions();
}

function submitQuiz() {
    let totalScore = 0;

    for (const category in quizData) {
        for (const [number, data] of Object.entries(quizData[category])) {
            const userAnswer = document.querySelector(`input[name="q${number}"]:checked`);
            const correctAnswer = data.answer.trim().toLowerCase();
            const questionElement = document.querySelector(`li[data-question="${data.question}"]`);

            if (userAnswer) {
                if (userAnswer.value.trim().toLowerCase() === correctAnswer) {
                    totalScore += 10;
                } else {
                    // Highlight the correct answer
                    const correctOptionIndex = data.options.findIndex(option => option.toLowerCase() === correctAnswer);
                    const correctOptionInput = questionElement.querySelector(`input[value="${data.options[correctOptionIndex]}"]`);
                    correctOptionInput.parentElement.style.color = "green";
                }
            }
        }
    }

    const scoreElement = document.getElementById("score");
    if (!scoreElement) {
        const newScoreElement = document.createElement("p");
        newScoreElement.id = "score";
        document.body.appendChild(newScoreElement);
    }

    scoreElement.textContent = `Your Score: ${totalScore}/100`;

    return false; // Prevents the default form submission behavior
}

startQuiz();
