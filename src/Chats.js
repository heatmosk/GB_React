import { List, ListItem } from "@material-ui/core";
export function Chats() {
  const chats = [
    { id: 1, name: "common", messages: [] },
    { id: 2, name: "movies", messages: [] },
    { id: 3, name: "cartoons", messages: [] },
    { id: 4, name: "it", messages: [] },
  ];

  return (
    <List>
      {chats.map((chat) => (
        <ListItem key={chat.id} button divider>
          {chat.name}
        </ListItem>
      ))}
    </List>
  );
}
