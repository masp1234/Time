let rightAnswerCounter = 0;
let possiblePoints = 20;
let totalPoints = 0;
const totalPointsElement = document.getElementById('total-points');

const checkAnswer = async answer => {
    const timezone = await getTimeZone();
    const correctAnswer = timezone.datetime.substring(11, 16);
    let isCorrect = false;
    if (answer === correctAnswer) {
        isCorrect = true;
        rightAnswerCounter++;
        addPoints(possiblePoints);
        nextQuestion();
    }  
    else possiblePoints = possiblePoints - 4;
    
    if (possiblePoints <= 0) {
        subtractPoints(5);
        nextQuestion();
    }
    addResult(answer, correctAnswer, currentTimezoneQuestion, isCorrect);
};

const nextQuestion = () => {
    currentTimezoneQuestion = timeZones[Math.floor(Math.random() * timeZones.length)];
    document.getElementById('timezone-question').innerText = currentTimezoneQuestion;
    possiblePoints = 20;
};

const addPoints = pointsToAdd => {
    totalPoints += pointsToAdd;
    totalPointsElement.classList.add('points-added');
    
    setTimeout(() => {
        totalPointsElement.classList.remove('points-added');
    }, 1000);

    updateScore();
}

const subtractPoints = pointsToSubtract => {
    totalPoints -= pointsToSubtract;
    totalPointsElement.classList.add('points-subtracted');
    
    setTimeout(() => {
        totalPointsElement.classList.remove('points-subtracted');
    }, 1000);
    
    updateScore();
    renderResults();
}

const updateScore = () => document.getElementById('total-points').innerText = totalPoints;