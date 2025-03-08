function generateBotResponse(userInput) {
    const responses = {
        "hi": "Hello! How can I help you?",
        "who are you": "I am MeowGPT, your friendly chatbot!",
        "bye": "Goodbye! Have a great day!",
    };

    // Convert user input to lowercase to avoid case-sensitive issues
    userInput = userInput.toLowerCase();

    // Check if the user input exists in responses, otherwise return default
    return responses[userInput] || "I'm not sure about that. Can you ask something else?";
}
