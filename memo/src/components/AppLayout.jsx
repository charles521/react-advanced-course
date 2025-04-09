import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import BottomNavBar from "./BottomNavBar";
function AppLayout() {
  return (
    <>
      <NavBar />
      <div style={{ padding: "70px 0 60px 0", textAlign: "center" }}>
        <Outlet />
      </div>
      <BottomNavBar />
    </>
  );
}

export default AppLayout;
