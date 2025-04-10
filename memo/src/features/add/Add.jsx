import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useLocalStorage } from "react-use";
import toast from "react-hot-toast";
function Add() {
  const [value, setValue] = useState("");
  const [content, setContent] = useState("");
  const [_memoList, setMemoList] = useLocalStorage("memoList");

  function addMemo() {
    if (value === "") {
      toast.error("Please enter a title");
      return;
    }
    if (content === "") {
      toast.error("Please enter a content");
      return;
    }
    setMemoList((memoList) => [
      ...memoList,
      { id: Date.now(), title: value, content: content },
    ]);

    toast.success("Successfully Added!");
  }

  return (
    <form style={{ textAlign: "center" }}>
      <TextField
        label="title"
        variant="outlined"
        style={{ width: "210px", marginBottom: "10px" }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <TextField
        label="content"
        multiline
        rows={4}
        style={{ width: "210px", marginBottom: "10px" }}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <Button variant="contained" onClick={() => addMemo()}>
        Add
      </Button>
    </form>
  );
}

export default Add;
