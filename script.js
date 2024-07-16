let currentExercise = null;
let currentStep = 1;

function showSteps(exercise) {
    resetSteps();
    currentExercise = exercise;
    currentStep = 1;

    const stepsContainer = document.getElementById('steps-container');
    stepsContainer.classList.remove('hidden');

    const exerciseButtonsContainer = document.getElementById('exercise-buttons-container');
    exerciseButtonsContainer.classList.add('hidden');

    const firstStep = document.getElementById(`${exercise}-step-1`);
    if (firstStep) {
        firstStep.classList.add('visible', 'fade-in');
    }

    const nextButton = document.getElementById('next-button');
    nextButton.classList.remove('hidden');
}

function nextStep() {
    const currentStepElement = document.getElementById(`${currentExercise}-step-${currentStep}`);
    const nextStepElement = document.getElementById(`${currentExercise}-step-${currentStep + 1}`);

    if (currentStepElement) {
        currentStepElement.classList.remove('visible', 'fade-in');
    }

    if (nextStepElement) {
        nextStepElement.classList.add('visible', 'fade-in');
        currentStep++;
    } else {
        // If no more steps, show the Finish button and hide the Next button
        const nextButton = document.getElementById('next-button');
        nextButton.classList.add('hidden');

        const finishButton = document.getElementById('finish-button');
        finishButton.classList.remove('hidden');
    }
}

function resetSteps() {
    const visibleSteps = document.querySelectorAll('.step.visible');
    visibleSteps.forEach(step => {
        step.classList.remove('visible', 'fade-in');
    });

    const nextButton = document.getElementById('next-button');
    nextButton.classList.add('hidden');

    const finishButton = document.getElementById('finish-button');
    finishButton.classList.add('hidden');
}

function resetView() {
    resetSteps();

    const stepsContainer = document.getElementById('steps-container');
    stepsContainer.classList.add('hidden');

    const exerciseButtonsContainer = document.getElementById('exercise-buttons-container');
    exerciseButtonsContainer.classList.remove('hidden');
}