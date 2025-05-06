import { useState } from "react";
import NavBar from "./components/NavBar";
import ShopList from "./components/ShopList";
import CardDialog from "./components/CardDialog";
export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <NavBar setVisible={setVisible} />
      <CardDialog visible={visible} setVisible={setVisible} />
      <ShopList />
    </>
  );
}
