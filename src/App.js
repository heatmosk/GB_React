import { Component, useState, useEffect } from "react";
import appStyles from "./app.module.css";
import { Message } from "./Message";

export function AppFunc(props) {
  const author = props.author || "User";
  const title = props.title || "Let`s chat!";
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const delay = props.delay || 1000;
  const botname = "Bot";
  const handleSendMessage = (author, text) => {
    if (text.trim().length > 0) {
      setMessages((state) => [...state, { author: author, text: text }]);
    }
  };

  useEffect(() => {
    if (messages.length > 0 && messages.slice(-1).shift().author !== botname) {
      const bot = setInterval(() => {
        handleSendMessage(botname, "Hi! " + messages.length);
        clearInterval(bot);
      }, delay);
    }
  }, [messages]);

  return (
    <div className={appStyles.app}>
      <h1 className={appStyles.app_header}>{title}</h1>
      <h2>App as func</h2>
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
        <label for="fmessage">
          <b>{author}</b>:&nbsp;
          <input
            className={appStyles.app_input_message}
            type="text"
            id="fmessage"
            name="fmessage"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button
          className={appStyles.app_button_send}
          onClick={() => {
            handleSendMessage(author, message);
            setMessage("");
          }}
        >
          send
        </button>
        <button
          className={appStyles.app_button_clear}
          onClick={() => setMessages([])}
        >
          clear
        </button>
      </div>
    </div>
  );
}

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
