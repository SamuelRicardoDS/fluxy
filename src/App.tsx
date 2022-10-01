import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RequireAuth } from "./contexts/auth/RequireAuth";
import { FirstScreen } from "./pages/FirstScreen";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/home" element={<RequireAuth><Home/></RequireAuth>}/>
      </Routes>
    </Router>
  );
}

export default App;
