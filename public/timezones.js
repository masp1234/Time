let timeZones = [];
let currentQuestionTimezone;

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

const getTimeZone = async () => await fetchData(`https://worldtimeapi.org/api/timezone/${currentQuestionTimezone}`);