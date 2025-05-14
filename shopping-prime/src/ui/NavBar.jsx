import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useTheme } from "../hooks/useTheme";
import { useMenuItems } from "../hooks/useMenuItems";

export default function NavBar({ setVisible, searchValue, setSearchValue }) {
  const { currentTheme, toggleTheme } = useTheme();
  const { items } = useMenuItems({ setVisible });

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    ></img>
  );
  const end = (
    <div className="flex align-items-center gap-2">
      <InputText
        placeholder="Search"
        type="text"
        className="w-8rem sm:w-auto"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button
        icon={`pi ${currentTheme === "light" ? "pi-sun" : "pi-moon"}`}
        style={{ marginLeft: "0.5rem" }}
        onClick={toggleTheme}
      />
    </div>
  );

  return (
    <div className="card">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}
