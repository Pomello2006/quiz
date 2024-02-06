let startButton = document.querySelector(".start-button")
let startWrapper = document.querySelector(".start-wrapper")
let quizWrapper = document.querySelector(".quiz-wrapper")
let answers = document.querySelectorAll(".answer-row button")
let quetion = document.querySelector(".question-heading")
let signs = ['-', '+']

for (let i = 0; i < answers.length; i += 1) {
    answers[i].addEventListener("click", NextQuetion(i))
}

function startGame() {
    startWrapper.classList.add("hide");
    quizWrapper.classList.remove("hide");
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function NextQuetion(i) {
    return function () {
        let number1 = getRandomInt(50);
        let number2 = getRandomInt(50);
        let sign1 = signs[getRandomInt(2)];
        answers[i].innerHTML = `${number1} ${sign1} ${number2}`;
    }
}

function culc(num1, num2, sign) {
    if (sign === "+") {
        return num1 + num2;
    } else {
        return num1 - num2;
    }
}

function randomQuestion() {
    let num1 = getRandomInt(50);
    let num2 = getRandomInt(50);
    let sign = signs[getRandomInt(2)];
    let culcut = culc(num1, num2, sign);
    let randAnsNum = getRandomInt(5);

    quetion.innerHTML = `${num1} ${sign} ${num2}`;
    for (let i = 0; i < answers.length; i += 1) {
        if (i === randAnsNum) {
            answers[i].innerHTML = culcut;
            answers[i].classList.remove("wrong")
            answers[i].classList.add("right")
        } else {
            answers[i].innerHTML = getRandomInt(100);
            answers[i].classList.remove("right")
            answers[i].classList.add("wrong")
        }
    }
}

for (let i = 0; i < answers.length; i += 1) {
    answers[i].addEventListener("click", randomQuestion);
}

function removeclass() {
    answers[i].classList.remove("right")
}

startButton.addEventListener("click", startGame);