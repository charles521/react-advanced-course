import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TextField } from "@mui/material";
import MemoList from "./MemoList";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchVal, setSearchVal] = useState(searchParams.get("search") || "");

  const onSearchChange = (value) => {
    setSearchVal(value);
    setSearchParams({ search: value });
  };

  return (
    <>
      <TextField
        label="Search Memo"
        type="search"
        value={searchVal}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <MemoList searchVal={searchVal} />
    </>
  );
}

export default Search;
