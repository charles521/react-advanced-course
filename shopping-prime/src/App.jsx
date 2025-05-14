import { useState, useRef, useEffect } from "react";
import { Toast } from "primereact/toast";
import { useDispatch } from "react-redux";
import { useLocalStorage } from "react-use";

import NavBar from "./ui/NavBar";
import ShopList from "./features/ShopList";
import CartDialog from "./features/CartDialog";

import { load } from "./features/store/cartListSlice";

export default function App() {
  const dispatch = useDispatch();
  const [cartList] = useLocalStorage("cartList", []);
  const [visible, setVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const toast = useRef(null);

  useEffect(() => {
    dispatch(load(cartList));
  }, [cartList, dispatch]);

  return (
    <>
      <NavBar
        setVisible={setVisible}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ShopList toast={toast} searchValue={searchValue} />
      <CartDialog visible={visible} setVisible={setVisible} />
      <Toast ref={toast} />
    </>
  );
}
