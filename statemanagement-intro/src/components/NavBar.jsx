import { useSelector } from "react-redux";
import CounterDisplay from "./CounterDisplay";
import styles from "./NavBar.module.css";

function NavBar({ setCurrentComponent }) {
  const counter = useSelector((state) => state.counter.value);

  return (
    <>
      <nav className={styles.nav}>
        <a href="#" onClick={() => setCurrentComponent("Home")}>
          Home
        </a>
        <a href="#" onClick={() => setCurrentComponent("Order")}>
          Order
        </a>
        <CounterDisplay counter={counter} />
      </nav>
    </>
  );
}

export default NavBar;
