function checkExercise(exerciseNumber) {
    const code = document.getElementById(`exercise${exerciseNumber}`).value.trim();
    let resultElement = document.getElementById(`result${exerciseNumber}`);
    let correctAnswer = false;

    switch (exerciseNumber) {
        case 1:
            // Check for variable assignment and print statement
            correctAnswer = /^name\s*=\s*["'][a-zA-Z\s]+["']\s*\n\s*print\s*\(\s*name\s*\)$/m.test(code);
            break;
        case 2:
            // Check for a valid for loop printing numbers from 1 to 5
            correctAnswer = /^for\s+[a-zA-Z_]\w*\s+in\s+range\s*\(\s*1\s*,\s*6\s*\):\s*\n\s+print\s*\(.*\)$/m.test(code);
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
