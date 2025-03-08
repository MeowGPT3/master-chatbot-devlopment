document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Loaded!"); // Debugging step

    // Ensure the button exists and works
    const sendButton = document.querySelector("button");
    if (!sendButton) {
        console.error("Button not found!");
        return;
    }
    sendButton.addEventListener("click", sendMessage);
});

// Function to add messages to the chatbox
function addMessage(sender, message) {
    const chatbox = document.getElementById("chatbox");
    if (!chatbox) {
        console.error("Chatbox not found!");
        return;
    }

    const messageElement = document.createElement("p");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Function to handle message sending
function sendMessage() {
    const userInput = document.getElementById("userInput");
    if (!userInput) {
        console.error("Input box not found!");
        return;
    }

    const message = userInput.value.trim();
    if (!message) return;

    addMessage("You", message);
    userInput.value = "";

    setTimeout(() => {
        const botReply = generateBotResponse(message);
        addMessage("MeowGPT", botReply);
    }, 1000);
}

// Chatbot AI Responses
function generateBotResponse(userInput) {
    const responses = {
        "hi": "Hello! How can I help you?",
        "who are you": "I am MeowGPT, your friendly chatbot!",
        "bye": "Goodbye! Have a great day!",
    };

    return responses[userInput.toLowerCase()] || "I'm not sure about that. Can you ask something else?";
}
