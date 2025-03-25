import { List } from "@mui/material";
import MemoListItem from "./MemoListItem";

export default function AlignItemsList() {
  // const menuList =
  const menuList = [
    {
      id: 1,
      title: "Brunch this weekend?",
      body: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
    },
    {
      id: 2,
      title: "Summer BBQ?",
      body: "Wish I could come, but I'm out of town this weekend. Maybe next week?",
    },
    {
      id: 3,
      title: "Oui oui",
      body: "Do you have Paris recommendations? Have you ever been?",
    },
  ];

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {menuList.map((memoItem) => (
        <MemoListItem key={memoItem.id} memoItem={memoItem} />
      ))}
    </List>
  );
}
