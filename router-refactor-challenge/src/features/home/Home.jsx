import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useCurrentWeather } from "../../hooks/useCurrentWeather";
import Day from "./Day";
import Loading from "../../ui/Loading";
import styles from "./Home.module.css";
function Home({ position }) {
  const navigate = useNavigate();
  const { temperature, weatherIcon, isLoading } = useCurrentWeather(position);

  return (
    <section className={styles.section}>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <Day temperature={temperature} icon={weatherIcon} />
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/forecast")}
          >
            Get Start
          </Button>
        </>
      )}
    </section>
  );
}
export default Home;
