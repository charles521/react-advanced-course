import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useLocalStorage } from "react-use";
import toast from "react-hot-toast";

function MemoItem() {
  const { memoId } = useParams();
  const [memoList, setMemoList] = useLocalStorage("memoList");
  const currentMemo = memoList.find(
    (memo) => Number(memo.id) === Number(memoId)
  );

  const [value, setValue] = useState(currentMemo.title);
  const [content, setContent] = useState(currentMemo.content);

  function updateMemo() {
    toast.success("Successfully Updated!");
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
      <Button variant="contained" onClick={() => updateMemo()}>
        Update
      </Button>
    </form>
  );
}

export default MemoItem;
