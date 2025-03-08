function addMessage(sender, message) {
    const chatbox = document.getElementById("chatbox");
    if (!chatbox) return console.error("Chatbox not found!");

    const messageElement = document.createElement("p");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}
