// Basic setup for the Calculator App

function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

// Math Challenges for Kids
const challenges = {
    easy: [
        { question: '5 + 3', answer: 8, hint: 'Think of 5 apples and 3 more apples.' },
        { question: '10 - 4', answer: 6, hint: 'If you have 10 candies and give away 4, how many are left?' },
        { question: '7 * 2', answer: 14, hint: '7 groups of 2.' },
        { question: '9 / 3', answer: 3, hint: 'Divide 9 into 3 equal parts.' }
    ],
    medium: [
        { question: '12 + 7', answer: 19, hint: '12 plus 7.' },
        { question: '15 - 9', answer: 6, hint: '15 minus 9.' },
        { question: '8 * 3', answer: 24, hint: '8 groups of 3.' },
        { question: '18 / 2', answer: 9, hint: 'Divide 18 into 2 equal parts.' }
    ],
    hard: [
        { question: '25 + 17', answer: 42, hint: '25 plus 17.' },
        { question: '30 - 19', answer: 11, hint: '30 minus 19.' },
        { question: '12 * 4', answer: 48, hint: '12 groups of 4.' },
        { question: '36 / 6', answer: 6, hint: 'Divide 36 into 6 equal parts.' }
    ]
};

const encouragingMessages = [
    'Great job!',
    'Well done!',
    'Keep it up!',
    'You are awesome!'
];

const mathFacts = [
    'Zero is the only number that cannot be represented by Roman numerals.',
    'A “jiffy” is an actual unit of time for 1/100th of a second.',
    'The number 5 is pronounced as "Ha" in Thai language. 555 is also used by some as slang for "HaHaHa".',
    'There are 86,400 seconds in a day.',
    'A circle has 360 degrees.'
];

let currentChallenge = null;
let score = 0;
let timeLeft = 30;
let timerInterval = null;
let highScores = [];
let achievements = [];
let dailyChallenge = { question: 'What is 10 + 10?', answer: 20 };

function loadChallenge() {
    const difficulty = document.getElementById('difficulty').value;
    const randomIndex = Math.floor(Math.random() * challenges[difficulty].length);
    currentChallenge = challenges[difficulty][randomIndex];
    document.getElementById('challenge').innerText = currentChallenge.question;
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById('challenge-answer').value);
    const message = document.getElementById('message');
    const correctSound = document.getElementById('correct-sound');
    const incorrectSound = document.getElementById('incorrect-sound');
    if (userAnswer === currentChallenge.answer) {
        message.innerText = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
        message.style.color = 'green';
        correctSound.play();
        score++;
        updateProgressBar();
        checkAchievements();
    } else {
        message.innerText = 'Try again!';
        message.style.color = 'red';
        incorrectSound.play();
    }
    document.getElementById('score').innerText = 'Score: ' + score;
    loadChallenge();
}

function showHint() {
    const message = document.getElementById('message');
    message.innerText = currentChallenge.hint;
    message.style.color = 'blue';
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = 'Time left: ' + timeLeft + 's';
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('message').innerText = 'Time\'s up! Your final score is ' + score;
            document.getElementById('message').style.color = 'blue';
            updateLeaderboard();
        }
    }, 1000);
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress');
    const progress = (score / 10) * 100; // Assuming 10 challenges per session
    progressBar.style.width = progress + '%';
}

function updateLeaderboard() {
    highScores.push(score);
    highScores.sort((a, b) => b - a);
    const highScoresDisplay = document.getElementById('high-scores');
    highScoresDisplay.innerHTML = '<strong>High Scores:</strong><br>' + highScores.slice(0, 5).join('<br>');
}

function displayRandomMathFact() {
    const fact = mathFacts[Math.floor(Math.random() * mathFacts.length)];
    document.getElementById('fact').innerText = fact;
}

function checkAchievements() {
    if (score === 5 && !achievements.includes('First 5')) {
        achievements.push('First 5');
        document.getElementById('achievement-list').innerHTML += '<div>First 5: Scored 5 points!</div>';
    }
    if (score === 10 && !achievements.includes('Perfect 10')) {
        achievements.push('Perfect 10');
        document.getElementById('achievement-list').innerHTML += '<div>Perfect 10: Scored 10 points!</div>';
    }
}

function loadDailyChallenge() {
    document.getElementById('daily-challenge-question').innerText = dailyChallenge.question;
}

function checkDailyChallenge() {
    const userAnswer = parseFloat(document.getElementById('daily-challenge-answer').value);
    const message = document.getElementById('daily-challenge-message');
    if (userAnswer === dailyChallenge.answer) {
        message.innerText = 'Correct! Great job!';
        message.style.color = 'green';
    } else {
        message.innerText = 'Try again!';
        message.style.color = 'red';
    }
}

// Load the first challenge, start the timer, display a random math fact, and load the daily challenge when the page loads
window.onload = () => {
    loadChallenge();
    startTimer();
    displayRandomMathFact();
    loadDailyChallenge();
};