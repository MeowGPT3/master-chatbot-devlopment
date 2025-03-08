function generateBotResponse(userInput) {
    const responses = {
        "hi": "Hello! How can I help you?",
        "who are you": "I am MeowGPT, your friendly chatbot!",
        "bye": "Goodbye! Have a great day!",
        "who is the owner of meowgpt": "Hardik Srivastava [AKA] MeowSamOP also on YouTube: <a href='https://www.youtube.com/@MeowSamOP' target='_blank'>https://www.youtube.com/@MeowSamOP</a>",
        "who made meowgpt": "Hardik Srivastava [AKA] MeowSamOP also on YouTube: <a href='https://www.youtube.com/@MeowSamOP' target='_blank'>https://www.youtube.com/@MeowSamOP</a>",
        "who created meowgpt": "Hardik Srivastava [AKA] MeowSamOP also on YouTube: <a href='https://www.youtube.com/@MeowSamOP' target='_blank'>https://www.youtube.com/@MeowSamOP</a>"
    };

    // Normalize user input (convert to lowercase and remove extra spaces)
    userInput = userInput.toLowerCase().trim();

    return responses[userInput] || "I'm not sure about that. Can you ask something else?";
}
