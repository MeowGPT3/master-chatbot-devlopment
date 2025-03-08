function sendMessage() {
    const userInputField = document.getElementById("userInput");
    const userMessage = userInputField.value.trim();

    if (!userMessage) return;

    // Add user's message to the chatbox
    addMessage("You", userMessage);
    userInputField.value = ""; // Clear input field

    setTimeout(() => {
        const botReply = generateBotResponse(userMessage);
        addMessage("MeowGPT", botReply);
    }, 1000);
}
