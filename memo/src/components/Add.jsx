import { useState } from "react";
import { Button, TextField } from "@mui/material";
function Add() {
  const [value, setValue] = useState("");
  const [content, setContent] = useState("");
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
      <Button variant="contained">Add</Button>
    </form>
  );
}

export default Add;
