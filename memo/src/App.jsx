import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./features/home/Home";
import Add from "./features/add/Add";
import Search from "./features/search/Search";
import Edit from "./features/edit/Edit";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/search" element={<Search />} />
          </Route>
          <Route path="/memo/:memoId" element={<Edit />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}
export default App;
