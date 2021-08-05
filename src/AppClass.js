import { Component } from "react";
import { Message } from "./Message";
import appStyles from "./app.module.css";

export class AppClass extends Component {
  constructor(props) {
    super(props);
    const { author, title, delay } = props;
    this.state = {
      author: author || "User",
      title: title || "Let`s chat!",
      message: "",
      messages: [],
      delay: delay || 1000,
      botname: "Bot",
    };
  }

  handleSendMessage(author, text) {
    const { messages } = this.state;
    if (text.trim().length > 0) {
      messages.push({
        author: author,
        text: text,
      });
      this.setState({
        messages: messages,
      });
    }
  }

  handleBot() {
    const { delay, messages, botname } = this.state;
    const bot = setInterval(() => {
      this.handleSendMessage(botname, "Hi! " + messages.length);
      clearInterval(bot);
    }, delay);
  }

  handleChangeMessage(e) {
    this.setState({ message: e.target.value });
  }

  render() {
    const { author, title, messages } = this.state;
    return (
      <div className={appStyles.app}>
        <h1 className={appStyles.app_header}>{title}</h1>
        <h2>App as class</h2>
        {messages.length > 0 && (
          <ul className={appStyles.app_messages}>
            {messages.map((message) => (
              <li>
                <Message author={message.author} text={message.text} />
              </li>
            ))}
          </ul>
        )}
        <div>
          <label for="cmessage">
            <b>{author}</b>:&nbsp;
            <input
              className={appStyles.app_input_message}
              type="text"
              id="cmessage"
              name="cmessage"
              value={this.state.message}
              onChange={(e) => this.handleChangeMessage(e)}
            />
          </label>
          <button
            className={appStyles.app_button_send}
            onClick={() => {
              this.handleSendMessage(this.state.author, this.state.message);
              this.handleBot();
              this.setState({ message: "" });
            }}
          >
            send
          </button>
          <button
            className={appStyles.app_button_clear}
            onClick={() => this.setState({ messages: [] })}
          >
            clear
          </button>
        </div>
      </div>
    );
  }
}
