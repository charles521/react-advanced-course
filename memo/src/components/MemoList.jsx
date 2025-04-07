import { useState, useEffect } from "react";
import { List } from "@mui/material";
import { useLocalStorage } from "react-use";
import MemoListItem from "./MemoListItem";
import toast from "react-hot-toast";

export default function MemoList({ searchVal = "" }) {
  // const menuList = [
  //   {
  //     id: 1,
  //     title: "Brunch this weekend?",
  //     body: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
  //   },
  //   {
  //     id: 2,
  //     title: "Summer BBQ?",
  //     body: "Wish I could come, but I'm out of town this weekend. Maybe next week?",
  //   },
  //   {
  //     id: 3,
  //     title: "Oui oui",
  //     body: "Do you have Paris recommendations? Have you ever been?",
  //   },
  //   {
  //     id: 4,
  //     title: "Birthday gift",
  //     body: "Do you have any ideas about what we should get Heidi for her birthday?",
  //   },
  //   {
  //     id: 5,
  //     title: "Recipe to try",
  //     body: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos",
  //   },
  //   {
  //     id: 6,
  //     title: "Yes!",
  //   },
  //   {
  //     id: 7,
  //     title: "Birthday gift",
  //     body: "Do you have any ideas about what we should get Heidi for her birthday?",
  //   },
  //   {
  //     id: 8,
  //     title: "Recipe to try",
  //     body: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos",
  //   },
  //   {
  //     id: 9,
  //     title: "Yes!",
  //   },
  //   {
  //     id: 10,
  //     title: "Birthday gift",
  //     body: "Do you have any ideas about what we should get Heidi for her birthday?",
  //   },
  //   {
  //     id: 11,
  //     title: "Recipe to try",
  //     body: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos",
  //   },
  // ];

  const [menuList, setMemoList] = useLocalStorage("memoList", []);
  const [filteredMenuList, setFilteredMenuList] = useState(menuList);

  function delMemo(id) {
    setMemoList(menuList.filter((memoItem) => memoItem.id !== id));

    toast.success("Successfully Deleted!");
  }

  useEffect(() => {
    if (searchVal === "") {
      setFilteredMenuList(menuList);
    } else {
      setFilteredMenuList(
        menuList.filter((memoItem) =>
          memoItem.title.toLowerCase().includes(searchVal.toLowerCase())
        )
      );
    }
  }, [searchVal]);

  useEffect(() => {
    setFilteredMenuList(menuList);
  }, [menuList]);

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {filteredMenuList.map((memoItem) => (
        <MemoListItem key={memoItem.id} memoItem={memoItem} delMemo={delMemo} />
      ))}
    </List>
  );
}
