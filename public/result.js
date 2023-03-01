const results = [];
const resultsContainer = document.getElementById('results-container');

const addResult = (answer, correctAnswer, currentTimezoneQuestion, isCorrect) => {
    results.push({
        timezone: currentTimezoneQuestion,
        answer: answer,
        correctAnswer: correctAnswer,
        isCorrect: isCorrect,
        timeStamp: Date()
    });
    console.log(results);
}

const renderResults = () => {
    resultsContainer.innerText = "";
    results.forEach(result => {
        resultsContainer.appendChild(createResultElement(result));
    }
    )};

    const createResultElement = result => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('text');

        const timezone = document.createElement('p');
        timezone.innerText = result.timezone;
        resultElement.appendChild(timezone);

        const answer = document.createElement('p');
        answer.innerText = `Your answer: ${result.answer}`
        resultElement.appendChild(answer);

        const correctAnswer = document.createElement('p');
        correctAnswer.innerText = `Correct answer: ${result.correctAnswer} `
        resultElement.appendChild(correctAnswer);

        const isCorrect = document.createElement('p');
        isCorrect.innerText = `Correct: ${result.isCorrect}`
        resultElement.appendChild(isCorrect);

        const timeStamp = document.createElement('p');
        timeStamp.innerText = `Time of answer: ${result.timeStamp}`;
        resultElement.appendChild(timeStamp);

        return resultElement;
    };
