document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".chat-container", { opacity: 0, y: -50, duration: 1, ease: "power2.out" });
});

const chatbox = document.getElementById("chatbox");

function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (!userInput) return;

    addMessage("You", userInput);
    document.getElementById("userInput").value = "";

    setTimeout(() => {
        const botReply = generateBotResponse(userInput);
        addMessage("MeowGPT", botReply);
    }, 1000);
}

function addMessage(sender, message) {
    const messageElement = document.createElement("p");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    messageElement.classList.add("fade-in");
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;

    gsap.from(messageElement, { opacity: 0, x: 30, duration: 0.5 });
}

function generateBotResponse(userInput) {
    const responses = {
        "hi": "Hello! How can I help you?",
        "who are you": "I am MeowGPT, your friendly chatbot!",
        "bye": "Goodbye! Have a great day!",
        "default": "I'm not sure about that. Can you ask something else?"
    };

    return responses[userInput.toLowerCase()] || responses["default"];
}
