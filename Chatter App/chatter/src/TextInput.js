import "./TextInput.css";
import { useState } from "react";
import { FiSend, FiCamera } from 'react-icons/fi';

function TextInput(props) {
  const [text, sT] = useState(""); 
  /*text is the state and setText is the method to change it */

  function send() {
    props.sendMessage(text);
    sT("");
  }
  function onKeyPress(e) {
    if (e.key === "Enter") {
      send();
    }
  }

  return (
    <footer className="footer">
      <button onClick={props.showCamera}
        style={{left:10, right:'auto'}}>
        <FiCamera style={{height:15, width:15}} />
      </button>
      <input
        className="text-input"
        value={text}
        onChange={(e) => sT(e.target.value)}
        onKeyPress={onKeyPress}
      />
      <button className="send" onClick={send}>
        ↑
      </button>
    </footer>
  );
}

export default TextInput;