
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #dbeafe, #c4b5fd);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chat-container {
  background: white;
  width: 420px;
  max-width: 95%;
  padding: 22px;
  border-radius: 18px;
  box-shadow: 0 8px 25px #0002;
}

h2, .subtitle {
  text-align: center;
}

h2 {
  color: #4338ca;
  margin-bottom: 5px;
}

.subtitle {
  color: #666;
  font-size: 13px;
}

#chat-box {
  height: 350px;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 12px;
  margin: 18px 0;
  background: #f8fafc;
}

.message {
  padding: 10px 13px;
  margin: 10px 0;
  border-radius: 12px;
  max-width: 85%;
  overflow-wrap: anywhere;
}

.bot {
  background: #e0e7ff;
  color: #312e81;
}

.user {
  background: #4f46e5;
  color: white;
  margin-left: auto;
}

.input-area {
  display: flex;
  gap: 8px;
}

input {
  flex: 1;
  min-width: 0;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 9px;
}

button {
  border: none;
  background: #4f46e5;
  color: white;
  padding: 12px 16px;
  border-radius: 9px;
  cursor: pointer;
}

button:hover {
  background: #3730a3;
}
