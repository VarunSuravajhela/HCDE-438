export default function Message(props) {
    return <div className="messageContainer">
            <div class="pointer" />
            <div className="message">{props.text}</div>
        </div>
}