import React from "react";
import PropTypes from "prop-types";
// import { useState } from "react";
import { AppClass } from "./AppClass";
// import { AppFunc } from "./AppFunc";
import { Chats } from "./Chats";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid } from "@material-ui/core";

export function App(props) {
  // const { chatId, setChatId } = useState(null);
  // const { chatName, setChatName } = useState("n u l l");
  // const { messages, setMessages } = useState([]);
  const messages = [];
  const title = props.title;
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: "dark",
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={3}>
          <Chats />
        </Grid>
        <Grid item xs={9}>
          <AppClass title={title} messages={messages} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

App.propTypes = {
  user: PropTypes.string.isRequired,
  title: PropTypes.string,
};
