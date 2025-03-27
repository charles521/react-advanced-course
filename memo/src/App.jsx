import NavBar from "./components/NavBar";
import BottomNavBar from "./components/BottomNavBar";
import MemoList from "./components/MemoList";
import Add from "./components/Add";

function App() {
  return (
    <>
      <NavBar />
      <div style={{ padding: "70px 0 60px 0" }}>
        {/* <MemoList /> */}
        <Add />
      </div>
      <BottomNavBar />
    </>
  );
}
export default App;
