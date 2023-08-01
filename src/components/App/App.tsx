import { Routes, Route } from "react-router-dom";
import Login from "../Login";

function App() {
  return (
    <div className="flex">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

