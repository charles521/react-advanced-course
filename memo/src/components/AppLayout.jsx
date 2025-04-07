import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import BottomNavBar from "./BottomNavBar";
import { Toaster } from "react-hot-toast";
function AppLayout() {
  return (
    <>
      <NavBar />
      <div style={{ padding: "70px 0 60px 0" }}>
        <Outlet />
      </div>
      <BottomNavBar />

      <Toaster />
    </>
  );
}

export default AppLayout;
