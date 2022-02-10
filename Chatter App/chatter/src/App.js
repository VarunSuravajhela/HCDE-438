import "./App.css";
import { useState } from "react";
import Message from "./Message";
import "./TextInput.css";
import TextInput from "./TextInput";
import NamePicker from './NamePicker';
import Camera from 'react-snap-pic';
import { useDB, db } from "./db";
// import { use100vh } from "react-div-100vh";

function App() {
  // const height = use100vh();

  const messages = useDB();
  const [showCamera, setShowCamera] = useState(false);
  let [username, setUsername] = useState("");
  function sendMessage(text) {
    if (!text.trim()) return;

    const newMessage = {
      text: text,
      time: Date.now(),
      user: username,
    };
    db.send(newMessage);
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
          <NamePicker setUsername={setUsername}/>
        </header>
      </div>
      <div className="messages">
      {messages.map((msg, i) => {
          // loop over every message in the "messages" array
          // and return a Message component
          // we are "spreading" all the items in "msg" into the props
          // "key" needs to be a unique value for each item
          return <Message {...msg} key={i} fromMe={msg.user === username} />;
        })}
      </div>
      <TextInput sendMessage={sendMessage} 
      showCamera={()=>setShowCamera(true)}/>
      {showCamera && <Camera takePicture={takePicture} />}

    </div>
  );
}

export default App;
