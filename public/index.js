let timeZones = [];

let currentTimezoneQuestion;

let rightAnswerCounter = 0;

let possiblePoints = 20;

let totalPoints = 0;

const results = [];

document.getElementById('submit-answer').addEventListener('click', () => {
    const answer = document.getElementById('timezone-answer').value;
    checkAnswer(answer);
});

document.getElementById('skip-question').addEventListener('click', () => {
    subtractPoints(2);
    nextQuestion();
});

const fetchData = async(url, settings) => {
    const response = await fetch(url, settings);
    return await response.json(); 
};


const getTimeZones = async () => {
    const settings = {
        method: 'GET'
    };
    timeZones = await fetchData('https://worldtimeapi.org/api/timezone', settings);
    
    nextQuestion();
};


const checkAnswer = async answer => {
    const timezone = await getTimeZone();
    const correctAnswer = timezone.datetime.substring(11, 16);
    if (answer === correctAnswer) {
        rightAnswerCounter++;
        addPoints(possiblePoints);
        nextQuestion();
    }  
    else possiblePoints = possiblePoints - 4;
    
    if (possiblePoints <= 0) {
        subtractPoints(5);
        nextQuestion();
    }
    addResult(answer, correctAnswer, currentTimezoneQuestion);
};


const nextQuestion = () => {
    currentTimezoneQuestion = timeZones[Math.floor(Math.random() * timeZones.length)];
    document.getElementById('timezone-question').innerText = currentTimezoneQuestion;
    possiblePoints = 20;
};


const getTimeZone = async () => await fetchData(`https://worldtimeapi.org/api/timezone/${currentTimezoneQuestion}`);


const addPoints = pointsToAdd => {
    totalPoints += pointsToAdd;
    updateScore();
}

const subtractPoints = pointsToSubtract => {
    totalPoints -= pointsToSubtract;
    updateScore();
}

const addResult = (answer, correctAnswer, currentTimezoneQuestion) => {
    results.push({
        timezone: currentTimezoneQuestion,
        answer: answer,
        correctAnswer: correctAnswer,
        timeStamp: Date()
    });
    console.log(results);
}


const updateScore = () => document.getElementById('total-points').innerText = totalPoints;

    
getTimeZones();


