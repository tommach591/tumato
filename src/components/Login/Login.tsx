import { useEffect, useState } from "react";
import { useLogin } from "../../utils/AccountContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = useLogin();

  useEffect(() => {
    // Check cache if already logged in.
  }, []);

  const handleLogin = (event: React.SyntheticEvent) => {
    event.preventDefault();
    loginUser(username, password);
    navigate("/");
    console.log(`Log in ${username} ${password}`);
  };

  const handleSignup = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(`Register ${username} ${password}`);
  };

  return (
    <div className="flex w-screen h-screen justify-center">
      <div className="flex flex-col item-center w-80 h-52 my-12 border border-solid border-black rounded shadow-md">
        <h1 className="w-full text-center mt-4 mb-2 text-xl font-semibold">
          Login
        </h1>
        <div className="flex flex-col items-center w-full">
          <label className="w-10/12 m-1 text-right">
            Username:
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.currentTarget.value)}
              className="border border-solid border-black rounded ml-1"
            />
          </label>
          <label className="w-10/12 m-1 text-right">
            Password:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
              className="border border-solid border-black rounded ml-1"
            />
          </label>
          <div className="flex justify-center w-full mt-4">
            <button
              onClick={(event) => handleLogin(event)}
              className="border border-solid border-black rounded m-2 pl-2 pr-2"
            >
              Log In
            </button>
            <button
              onClick={(event) => handleSignup(event)}
              className="border border-solid border-black rounded m-2 pl-2 pr-2"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
