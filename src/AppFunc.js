import { useState, useEffect } from "react";
import {
  Button,
  Container,
  List,
  ListItem,
  TextField,
  Paper,
  Typography,
} from "@material-ui/core";
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
      setMessages((state) => [...state, { author, text }]);
    }
  };

  useEffect(() => {
    let bot = 0;
    if (messages.length > 0 && messages.slice(-1).shift().author !== botname) {
      bot = setTimeout(
        () => handleSendMessage(botname, "Hi! " + messages.length),
        delay
      );
    }
    return () => clearTimeout(bot);
  }, [messages]);

  return (
    <Container maxWidth="sm">
      <div>
        <TextField
          label="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          inputRef={(input) => {
            if (input != null) {
              input.focus();
            }
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            handleSendMessage(author, message);
            setMessage("");
          }}
        >
          send
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setMessages([])}
        >
          clear
        </Button>
      </div>

      <Paper style={{ maxHeight: "85vh", overflow: "auto" }}>
        {messages.length > 0 && (
          <List>
            {messages.map((message) => (
              <ListItem style={{ maxWidth: "100%" }}>
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
