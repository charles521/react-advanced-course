import NavBar from "./components/NavBar";
import MemoList from "./components/MemoList";
import BottomNavBar from "./components/BottomNavBar";

function App() {
  return (
    <>
      <NavBar />
      <div style={{ padding: "56px 0" }}>
        <MemoList />
      </div>
      <BottomNavBar />
    </>
  );
}
export default App;
