const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Seriously",
    "think about it",
    "If you say no, I will be really sad...",
    "what if i meow for you ",
    "Fuck",
    "pleasee",
    "Goodnight!",
    "please....",
    "actually fuck you",
    "please lemme eyp", 
    "I want it",
    "I'm telling you I want it",
    "I said it want it."
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    if (messageIndex < messages.length - 1) {
        noButton.textContent = messages[messageIndex];
        messageIndex++;
        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize * 1.5}px`;
    } else {
        noButton.textContent = "Fuck you";
        noButton.disabled = true; // Make the No button unclickable
        noButton.style.opacity = "1"; // Optional: Reduce opacity to indicate it's disabled
        noButton.style.cursor = "not-allowed"; // Optional: Change cursor style
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
