import { useState, useRef, useEffect } from "react";

import CartDialog from "./features/CartDialog";
import NavBar from "./ui/NavBar";
import ShopList from "./features/ShopList";

import { Toast } from "primereact/toast";
import { useDispatch } from "react-redux";
import { useLocalStorage } from "react-use";

import { load } from "./features/store/cartListSlice";

export default function App() {
  const dispatch = useDispatch();
  const [cartList] = useLocalStorage("cartList", []);
  const [visible, setVisible] = useState(false);
  const toast = useRef(null);

  useEffect(() => {
    dispatch(load(cartList));
  }, [cartList, dispatch]);

  return (
    <>
      <NavBar setVisible={setVisible} />
      <CartDialog visible={visible} setVisible={setVisible} />
      <ShopList toast={toast} />

      <Toast ref={toast} />
    </>
  );
}
