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
        resultsContainer.innerText += 
            `
            <p>Timezone: ${result.timezone}</p>
            <p>Your answer: ${result.answer}</p>
            <p>Correct answer: ${result.correctAnswer}</p>
            <p>Correct: ${result.isCorrect}</p>
            <p>Time: ${result.timeStamp}</p>

            `
    })
}
