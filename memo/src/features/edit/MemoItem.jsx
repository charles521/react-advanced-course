import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, TextField, Fab } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useLocalStorage } from "react-use";
import toast from "react-hot-toast";

function MemoItem() {
  const { memoId } = useParams();
  const navigate = useNavigate();
  const [memoList, setMemoList] = useLocalStorage("memoList");
  const currentMemo = memoList.find(
    (memo) => Number(memo.id) === Number(memoId)
  );

  const [value, setValue] = useState(currentMemo.title);
  const [content, setContent] = useState(currentMemo.content);

  function updateMemo() {
    const newMemoList = memoList.map((memo) => {
      if (Number(memo.id) === Number(memoId)) {
        return { ...memo, title: value, content: content };
      }
      return memo;
    });
    setMemoList(newMemoList);
    setValue("");
    setContent("");
    toast.success("Successfully Updated!");
    navigate("/");
  }

  return (
    <form style={{ textAlign: "center", paddingTop: "30px" }}>
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

      <Fab
        color="primary"
        style={{ position: "fixed", bottom: "80px", right: "40px" }}
        onClick={() => navigate("/")}
      >
        <HomeIcon fontSize="small" />
      </Fab>
    </form>
  );
}

export default MemoItem;
