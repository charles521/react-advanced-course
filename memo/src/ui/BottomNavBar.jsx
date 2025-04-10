import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

export default function BottomNavBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [value, setValue] = useState("/");

  useEffect(() => {
    if (pathname === "/") {
      setValue("/");
      return;
    }
    setValue(pathname.slice(1));
  }, [pathname]);

  const handleChange = (_event, newValue) => {
    navigate(newValue);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction label="Add" value="add" icon={<AddIcon />} />
        <BottomNavigationAction
          label="Search"
          value="search"
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
