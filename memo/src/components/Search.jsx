import { useState } from "react";
import { TextField } from "@mui/material";
import MemoList from "./MemoList";

function Search() {
  const [searchVal, setSearchVal] = useState("");
  return (
    <>
      <TextField
        label="Search Memo"
        type="search"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <MemoList searchVal={searchVal} />
    </>
  );
}

export default Search;
