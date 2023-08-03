import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useId } from "../../utils/AccountContext";

function Home() {
  const id = useId();
  const navigate = useNavigate();

  useEffect(() => {
    if (id === "") navigate("/login");
  }, [id, navigate]);

  return <div></div>;
}

export default Home;
