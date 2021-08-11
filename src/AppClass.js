import { Component } from "react";
import {
  Button,
  Container,
  Paper,
  List,
  ListItem,
  TextField,
  Typography,
  Box,
} from "@material-ui/core";
import { Message } from "./Message";
//  appStyles from "./app.module.css";

export class AppClass extends Component {
  constructor(props) {
    super(props);
    const { author, title, delay } = props;
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSend = this.handleSend.bind(this);

    this.state = {
      author: author || "User",
      title: title || "Let`s chat!",
      message: "",
      messages: [],
      delay: delay || 1000,
      botname: "Bot",
    };
  }

  // componentDidMount() {
  //   this.nameInput.focus();
  // }

  handleSendMessage(author, text) {
    const { messages } = this.state;
    if (text.trim().length > 0) {
      messages.push({ id: messages.length, author, text }); 
      this.setState({ messages });
    }
  }

  handleBot() {
    const { delay, messages, botname } = this.state;
    if (messages.length > 0) {
      setTimeout(
        () => this.handleSendMessage(botname, "Hi! " + messages.length),
        delay
      );
    }
  }

  handleChangeMessage(e) {
    this.setState({ message: e.target.value });
  }

  handleSend() {
    this.handleSendMessage(this.state.author, this.state.message);
    this.handleBot();
    this.setState({ message: "" });
  }

  handleClear() {
    this.setState({ messages: [] });
  }

  render() {
    const { title, messages } = this.state;
    return (
      <Container>
        <Typography variant="h3" component="h3" gutterBottom>
          {title}
        </Typography>
        <div>
          <TextField
            label="Enter message"
            value={this.state.message}
            onChange={this.handleChangeMessage}
            inputRef={(input) => {
              if (input != null) {
                input.focus();
              }
            }}
          />
          <Button variant="contained" color="primary" onClick={this.handleSend}>
            Send
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleClear}
          >
            Clear
          </Button>
        </div>

        <Paper style={{ maxHeight: "85vh", overflow: "auto" }}>
          {messages.length > 0 && (
            <List>
              {messages.map((message) => (
                <ListItem key={message.id} style={{ maxWidth: "100%" }}>
                  <Box width="100%">
                    <Message author={message.author} text={message.text} />
                  </Box>
                </ListItem>
              ))}
            </List>
          )}
        </Paper>
      </Container>
    );
  }
}
