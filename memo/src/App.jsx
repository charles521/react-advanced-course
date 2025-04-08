import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import MemoList from "./components/MemoList";
import Add from "./components/Add";
import Search from "./components/Search";
import MemoItem from "./components/MemoItem";

// https://ahooks.js.org/zh-CN/hooks/use-request/index

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<MemoList />} />
            <Route path="/add" element={<Add />} />
            <Route path="/search" element={<Search />} />
            <Route path="/memo/:memoId" element={<MemoItem />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
