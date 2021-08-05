import messageStyle from "./message.module.css";
export function Message(props) {
  const { author, text } = props;
  return (
    <div className={messageStyle.message}>
      <b>{author}</b>: <i>{text}</i>
    </div>
  );
}
