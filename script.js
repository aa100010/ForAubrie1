const mainButton = document.getElementById("eventSwitch");
const textChange = document.getElementById("changeText");
const inputEl = document.getElementById("input");
const mySelect = document.getElementById("select");
const loveWords = ["adore", "cherish", "treasure", "appreciate", "care for", "admire", "respect", "have affection for", "am devoted to", "craze over", "am charmed by", "am joyful because of", "am elated because of", "am estatic because of", "am obsessed with", "care deeply for" ];
let phrase;
let lastString;
let randomNumber;
let continueThis;
let asked = false;
mainButton.addEventListener("click", changeWord);

function changeWord() {
    if (asked) {
        if (mySelect.selectedOptions[0].value === "Yes") {
        congratsEli();
        } else {
            thisSucks();
        }
    }

    if (!asked) {
        askQuestion();
    }
}

function askQuestion() {
    inputEl.style.display = "inline";
    mainButton.textContent = "Submit";
    textChange.textContent = "Do you wanna date Eli?";
    asked = true;
}

function congratsEli() {
    inputEl.style.display = "none";
    mainButton.style.display = "none";
    textChange.textContent = "Yay! Make sure to tell me you've said yes on discord!";
}

function thisSucks() {
    inputEl.style.display = "none";
    mainButton.style.display = "none";
    textChange.textContent = "I hope you selecting No was a misclick. Reload the page to try again.";
}