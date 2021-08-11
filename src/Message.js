import { Typography } from "@material-ui/core";
export function Message(props) {
  const { author, text } = props;
  return (
    <>
      <Typography gutterBottom variant="h5" component="p">
        {author}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {text}
      </Typography>
    </>
  );
}
