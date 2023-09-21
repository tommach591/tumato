import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useId } from "../../utils/AccountContext";

function Home() {
  const id = useId();
  const navigate = useNavigate();

  const [points, setPoints] = useState(1337);
  const [bank, setBank] = useState(100);

  const claimBank = useCallback(() => {
    setPoints(points + bank);
    setBank(0);
  }, [points, bank]);

  useEffect(() => {
    if (id === "") navigate("/login");
  }, [id, navigate]);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-80 h-34 m-8 p-2 flex flex-col items-center border border-solid border-black rounded">
        <div className="flex relative w-full items-center m-1">
          <img
            className="w-8 absolute"
            src="https://api.iconify.design/twemoji:coin.svg"
            alt=""
          />
          <h1 className="w-full pl-9 bg-gray-800 rounded-3xl text-white">
            {points.toLocaleString()}
          </h1>
        </div>
        <div className="flex w-full items-center m-1">
          <img
            className="w-8 absolute"
            src="https://api.iconify.design/twemoji:bank.svg"
            alt=""
          />
          <h1 className="w-full pl-9 bg-gray-800 rounded-3xl text-white">
            {bank.toLocaleString()}
          </h1>
        </div>
        <button
          className="border border-solid border-black rounded m-2 pl-2 pr-2"
          onClick={claimBank}
        >
          Claim
        </button>
      </div>
    </div>
  );
}

export default Home;
