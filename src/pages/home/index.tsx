import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "stores";

function Home() {
  const navigate = useNavigate();
  const checkHasLogged = useStore((state) => state.checkHasLogged);
  useEffect(() => {
    // should redirect to app page if logged in before
    checkHasLogged()
      .then((hasLogged) => {
        navigate(hasLogged ? "/app/today" : "/auth/login");
      })
      .catch(() => {
        navigate("/auth/login");
      });
  }, []);

  return null;
}

export default Home;
