import "./App.css";
import { useState } from "react";
import Message from "./Message";
import "./TextInput.css";
import TextInput from "./TextInput";
import "./NamePicker";
import Camera from 'react-snap-pic';


function App() {
  const [messages, setMessages] = useState([]);
  const [showCamera, setShowCamera] = useState(false);
  function sendMessage(text) {
    setMessages([{text}, ...messages]);
  }
  function takePicture(img){
    console.log(img)
    setShowCamera(false)
}
  return (
    <div className="App">
      <div className="header-container">
        <header className="header">
          <div className="logo" />
          <span className="title">TALK TO ME :)</span>
        </header>
      </div>
      <div className="messages">
        {messages.map((msg) => {
          return <Message {...msg} />
        })}
      </div>
      <TextInput sendMessage={sendMessage} 
      showCamera={()=>setShowCamera(true)}/>
      {showCamera && <Camera takePicture={takePicture} />}
    </div>
  );
}

export default App;
