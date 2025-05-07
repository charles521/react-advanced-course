import { useLocalStorage } from "react-use";
import { useDispatch } from "react-redux";
import { append } from "../features/store/cartListSlice";
import { show } from "../utils/toastHelper";

export const useCart = (toast) => {
  const dispatch = useDispatch();
  const [cartList, setCartList] = useLocalStorage("cart-list", []);

  const addCart = (product) => {
    if (cartList.find((item) => Number(item.id) === Number(product.id))) {
      show(toast, "The product is already in the cart", "error", 3000);
      return;
    }

    const newCartList = [...cartList, product];
    dispatch(append(product));
    setCartList(newCartList);
    show(toast, "Successfully added");
  };

  return { cartList, addCart };
};
