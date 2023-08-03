import { Routes, Route } from "react-router-dom";
import Login from "../Login";
import Home from "../Home";

function App() {
  return (
    <div className="flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

