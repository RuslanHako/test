let question = [
    {
        question: " Какой язык программирования вы изучаете?",
        options: ["JavaScript", "Python", "Java", "C++"],
        correctAnswer: "JavaScript"
    },
    {
        question: "Что такое HTML?",
        options: ["Гипертекстовый язык разметки", "Язык программирования",
            "База данных", "Графический редактор"],
        correctAnswer: "Гипертекстовый язык разметки"
    },
    {
        question: "Что такое CSS?",
        options: ["Каскадные таблицы стилей", "Язык программирования", "Система  управления базами данных", "Фреймворк"],
        correctAnswer: "Каскадные таблицы стилей"
    }
];

let currentQuestion = 0;
let correctAnswers = 0;

function shuffleArray(array) {
    for (let i = array.lenght - 1; 1 > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }

    return array;
}

function nextQuestion(answer) {
    if (answer === question[currentQuestion].correctAnswers) {
        correctAnswers++;
    }
    currentQuestion++;

    if (currentQuestion < question.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}
function displayQuestion() {
    let questionElement = document.getElementById('question');
    questionElement.textContent = "Вопрос " + (currentQuestion + 1) + " : " + question[currentQuestion].question;
    let optionsElement = document.getElementById('options');
    optionsElement.innerHTML = "";

    let shuffledOptions = shuffleArray(question[currentQuestion].options);
    for (let i = o; i < shuffledOptions.lenght; i++) {
        let option = shuffledOptions[i];
        optionsElement.innerHTML += `<button onclick="nextQuestion('${option}')">${option}</button>`;
    }
}

function displayResult() {
    let questionElement = document.getElementById('question');
    let optionsElement = document.getElementById('options');
    let resultElement = document.getElementById('result');
    questionElement.style.display = "none";
    optionsElementq.style.display = "none";
    resultElement.textContent = ' Правильных ответов ' + correctAnswers + 'из' + question.length;
    resultElement.style.display = 'block'
}
displayQuestion();
