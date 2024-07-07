let currentStep = 1;
let currentExercise = '';
const exercises = {
    diaphragmatic: 5,
    478: 4,
    box: 5,
    mindful: 5,
    counting: 3,
    progressive: 5,
    54321: 6,
    mindfulness: 6,
    objects: 3,
    visualization: 5,
    bodyscan: 4,
    movement: 4
};

function showSteps(exercise) {
    currentExercise = exercise;
    currentStep = 1;
    document.querySelector('.exercise-buttons').style.display = 'none';
    document.getElementById('steps-container').classList.remove('hidden');
    showStep(currentStep);
}

function showStep(step) {
    const stepElement = document.getElementById(`${currentExercise}-step-${step}`);
    stepElement.classList.add('visible');
    stepElement.classList.remove('hidden');
    typeEffect(stepElement);

    if (step < exercises[currentExercise]) {
        document.getElementById('next-button').classList.remove('hidden');
    } else {
        document.getElementById('next-button').classList.add('hidden');
    }
}

function nextStep() {
    const currentStepElement = document.getElementById(`${currentExercise}-step-${currentStep}`);
    currentStepElement.classList.remove('visible');
    currentStepElement.classList.add('hidden');
    currentStep++;
    if (currentStep <= exercises[currentExercise]) {
        showStep(currentStep);
    }
}

function typeEffect(element) {
    const text = element.textContent;
    element.textContent = '';
    element.classList.add('typing');
    let i = 0;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 50); // Adjust typing speed here
        } else {
            element.classList.remove('typing');
            element.style.whiteSpace = 'normal'; // Apply this style to allow wrapping after typing
        }
    }

    type();
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#steps-container').classList.add('hidden');
});