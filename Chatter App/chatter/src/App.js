import "./App.css";
import { useState } from "react";
import Message from "./Message";
import "./TextInput.css";
import TextInput from "./TextInput";

function App() {
  const [messages, setMessages] = useState([]);
  function sendMessage(text) {
    setMessages([{text}, ...messages]);
  }


  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        <span className="title">TALK TO ME :)</span>
      </header>
      <div className="messages">
        {messages.map((msg) => {
          return <Message {...msg} />
        })}
      </div>
      <TextInput sendMessage={sendMessage}></TextInput>
    </div>
  );
}

export default App;
