// interactive counter
let count = 0;
const counterDisplay = document.getElementById('counter');

function incrementCounter() {
    count++;
    counterDisplay.textContent = count;
}

document.getElementById('incrementButton').addEventListener('click', incrementCounter);

// confession wall functionality
const confessionForm = document.getElementById('confessionForm');
const confessionWall = document.getElementById('confessionWall');

confessionForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const confessionInput = document.getElementById('confessionInput');
    const confessionText = confessionInput.value;
    const confessionEntry = document.createElement('div');
    confessionEntry.textContent = confessionText;
    confessionWall.appendChild(confessionEntry);
    confessionInput.value = '';
});