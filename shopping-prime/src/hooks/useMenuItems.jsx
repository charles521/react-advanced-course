import { useSelector } from "react-redux";
import { Badge } from "primereact/badge";
export const useMenuItems = ({ setVisible }) => {
  const cartListStore = useSelector((state) => state.cartList);

  const itemRenderer = (item) => (
    <a className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </a>
  );

  const items = [
    {
      label: "Cart",
      icon: "pi pi-shopping-cart",
      ...(cartListStore.length > 0 && {
        badge: cartListStore.length,
      }),
      template: itemRenderer,
      command: () => {
        setVisible(true);
      },
    },
  ];

  return { items };
};
