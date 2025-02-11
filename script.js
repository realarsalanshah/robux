const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️",
    "please....",
    "PLEASSEEEEEE...",
    "IMAGINE WHAT WE COULD BE TOGETHERRR", 
    "PLEEEEEEEAASSEEEEE",
    "I'M NOT STOPPINGGGGGGGG",
    "THATS IT-"
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
        noButton.textContent = "You can't say no anymore! >:D";
        noButton.disabled = true; // Make the No button unclickable
        noButton.style.opacity = "0.5"; // Optional: Reduce opacity to indicate it's disabled
        noButton.style.cursor = "not-allowed"; // Optional: Change cursor style
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
