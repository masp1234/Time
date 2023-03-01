let rightAnswerCounter = 0;
let possiblePoints = 20;
let totalPoints = 0;
const totalPointsElement = document.getElementById('total-points');
const hintContainer = document.getElementById('hint-container');

const checkAnswer = async answer => {
    if (answer.length > 0) {
        const timezone = await getTimeZone();
        const correctAnswer = timezone.datetime.substring(11, 16);
        let isCorrect = false;
        if (answer === correctAnswer) {
            hintContainer.innerText = "";
            isCorrect = true;
            rightAnswerCounter++;
            addPoints(possiblePoints);
            nextQuestion();
        }  
        else {
            possiblePoints = possiblePoints - 4;
            displayHint(answer, correctAnswer);
        }
    
        if (possiblePoints <= 0) {
            subtractPoints(5);
            displayCorrectAnswer(correctAnswer);
        }
    }
};

const displayCorrectAnswer = correctAnswer => {
    hintContainer.innerText = `The correct answer was: ${correctAnswer}`;
    nextQuestion();
    
}

const displayHint = (answer, correctAnswer) => {
    const answerNumber = Number(answer.substring(0, 2) + answer.substring(3));
    const correctAnswerNumber = Number(correctAnswer.substring(0, 2) + correctAnswer.substring(3));
    if (answerNumber > correctAnswerNumber) hintContainer.innerText = `Hint: it's earlier than ${answer}`;

    else hintContainer.innerText = `Hint: it's later than ${answer}`;
    
    
}

const nextQuestion = () => {
    setTimeout(() => {
        hintContainer.innerText = "";
    }, 2500);
    
    currentQuestionTimezone = timeZones[Math.floor(Math.random() * timeZones.length)];
    document.getElementById('timezone-question').innerText = currentQuestionTimezone;
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
}

const updateScore = () => document.getElementById('total-points').innerText = totalPoints;