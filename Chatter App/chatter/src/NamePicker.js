import { useState } from "react";
import { AiFillEdit } from 'react-icons/ai';

function NamePicker(props) {
    const [editName, setEditName] = useState(false);
    const [name, setName] = useState("");

    function setUsername() {
      props.setUsername(name);
      setEditName(false);
    }
    if (editName) {
      return (
        <div className="name-picker">
          <input className="input"
          onChange={(e) => setName(e.target.value)}
          value={name}
          />
          <button className="name-picker-button" onClick={setUsername}>
            OK!
          </button>
        </div>
      );
    }

    return (
      <div className="name-picker">
        <span className="name-picker-span">{name || "Change your username"}</span>
        <AiFillEdit size="25" onClick={() => setEditName(true)}/>
      </div>
    );

}
export default NamePicker;
