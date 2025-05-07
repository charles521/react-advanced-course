import { Dialog } from "primereact/dialog";
import AppOrderList from "./AppOrderList";

function CartDialog({ visible, setVisible }) {
  return (
    <Dialog
      header="Header"
      visible={visible}
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
      style={{ width: "50vw" }}
      breakpoints={{ "960px": "75vw", "641px": "100vw" }}
    >
      <p className="m-0">
        <AppOrderList />
      </p>
    </Dialog>
  );
}

export default CartDialog;
