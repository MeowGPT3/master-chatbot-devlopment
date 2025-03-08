async function generateBotResponse(userInput) {
    const API_URL = "https://replit.com/@meowgpt8/MeowGPT-TinyLLaMA"; // Replace with your actual Replit API URL

    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput })
    });

    const data = await response.json();
    return data.response || "I'm not sure about that. Can you ask something else?";
}
