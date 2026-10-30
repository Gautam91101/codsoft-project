
function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  const message = input.value.trim().toLowerCase();

  if (message === "") return;

  addMessage(input.value.trim(), "user");

  let reply;

  if (message.includes("hello") ||
      message.includes("hi")) {
    reply = "Hello! Nice to meet you. 😊";
  } 
  else if (message.includes("your name") ||
           message.includes("who are you")) {
    reply = "I am a simple Rule-Based Chatbot.";
  } 
  else if (message.includes("how are you")) {
    reply = "I am doing great! How can I help you?";
  } 
  else if (message.includes("help")) {
    reply = "You can ask me about my name, greetings, or time.";
  } 
  else if (message.includes("time")) {
    reply = "The current time is " +
      new Date().toLocaleTimeString();
  } 
  else if (message.includes("date")) {
    reply = "Today's date is " +
      new Date().toLocaleDateString();
  } 
  else if (message.includes("thank")) {
    reply = "You're welcome! 😊";
  } 
  else if (message.includes("bye")) {
    reply = "Goodbye! Have a great day. 👋";
  } 
  else {
    reply = "Sorry, I don't understand that yet. Try saying hello or help.";
  }

  addMessage(reply, "bot");
  input.value = "";
}

function addMessage(text, sender) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");

  messageElement.className = "message " + sender;
  messageElement.textContent = text;

  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById("user-input")
  .addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
