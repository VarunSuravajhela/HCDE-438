export default function Message(props) {
    return <div className="messageContainer">
            <div className="pointer" />
            <div className="message">{props.text}</div>
        </div>
}