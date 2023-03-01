document.getElementById('submit-answer').addEventListener('click', () => {
    const answer = document.getElementById('timezone-answer').value;
    checkAnswer(answer);
});

document.getElementById('skip-question').addEventListener('click', () => {
    hintContainer.innerText = "";
    subtractPoints(2);
    nextQuestion();
});

getTimeZones();


