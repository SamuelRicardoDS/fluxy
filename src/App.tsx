import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FirstScreen } from "./pages/FirstScreen";
import { Login } from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstScreen />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
