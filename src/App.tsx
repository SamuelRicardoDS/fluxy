import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FirstScreen } from "./pages/FirstScreen";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
