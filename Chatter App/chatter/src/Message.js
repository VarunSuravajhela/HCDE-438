export default function Message(props) {
    return (<div
        className="message-row"
        style={{ flexDirection: props.fromMe ? "row-reverse" : "row" }}>
          <div className="messageContainer">
            <div className="pointer" />
            <div className="message">{props.text}</div>
        </div>
    </div>); 
}