function configureApiKey() {
    const apiKey = document.getElementById('api-key').value;
    fetch('/configure', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ api_key: apiKey }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    });
}
function checkExercise(exerciseNumber) {
    const code = document.getElementById(`exercise${exerciseNumber}`).value;
    let resultElement = document.getElementById(`result${exerciseNumber}`);
    let correctAnswer;

    switch (exerciseNumber) {
        case 1:
            correctAnswer = /name\s*=\s*.+;\s*print\s*\(\s*name\s*\)/i.test(code);
            break;
        case 2:
            correctAnswer = /for\s*\(\s*.*\s+in\s+range\s*\(\s*1\s*,\s*6\s*\)\s*\):\s*print\s*\(.*\)/i.test(code);
            break;
        default:
            correctAnswer = false;
    }

    if (correctAnswer) {
        resultElement.textContent = "Correct! 🎉";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Try again! 🛑";
        resultElement.style.color = "red";
    }
}