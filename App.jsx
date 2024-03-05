import { useNavigate } from "react-router-dom";
import "./App.css";
function App() {
  const navigate = useNavigate();
  return (
    <div className="root">
      <h1>HI</h1>
      <button type="button" onClick={() => navigate("/upload")}>
        Upload
      </button>
    </div>
  );
}

export default App;
