import { ListItem, ListItemText, Divider } from "@mui/material";
function MemoListItem({ memoItem }) {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={memoItem.title}
          secondary={<>{memoItem.content}</>}
        />
      </ListItem>
      <Divider component="li" />
    </>
  );
}

export default MemoListItem;
