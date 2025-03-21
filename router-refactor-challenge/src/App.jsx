import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useGeolocation } from "./hooks/useGeolocation";
import Container from "./ui/Container";
import Loading from "./ui/Loading";
import Forecast from "./features/forecast/Forecast";
import Home from "./features/home/Home";
function App() {
  const { getCurrentLocation, isLoading, position } = useGeolocation();

  const [isHome, setIsHome] = useState(true);

  function toggle() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    if (pathname === "/") {
      navigate("/forecast");
      return;
    }
    navigate("/");
  }

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home position={position} />} />
          <Route path="forecast" element={<Forecast position={position} />} />
        </Routes>
      )}
    </BrowserRouter>
    // <Container>
    //   {isLoading ? (
    //     <Loading />
    //   ) : isHome ? (
    //     <Home setIsHome={setIsHome} position={position} />
    //   ) : (
    //     <Forecast setIsHome={setIsHome} position={position} />
    //   )}
    // </Container>
  );
}

export default App;
