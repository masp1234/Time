let timeZones = [];

let currentTimeZoneQuestion;

let rightAnswerCounter = 0;

document.getElementById('submit-answer').addEventListener('click', () => {
    const answer = document.getElementById('timezone-answer').value;
    checkAnswer(answer);
});

document.getElementById('skip-question').addEventListener('click', () => {
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
    
    if (answer === timezone.datetime.substring(11, 16)) {
        updateRightAnswerCounter();
    };
    nextQuestion();
};


const nextQuestion = () => {
    currentTimeZoneQuestion = timeZones[Math.floor(Math.random() * timeZones.length)];
    document.getElementById('timezone-question').innerText = currentTimeZoneQuestion;
};


const getTimeZone = async () => {
    return await fetchData(`https://worldtimeapi.org/api/timezone/${currentTimeZoneQuestion}`);
};


const updateRightAnswerCounter = () => {
    document.getElementById('right-answer-counter').innerText = ++rightAnswerCounter;
};
    

getTimeZones();


