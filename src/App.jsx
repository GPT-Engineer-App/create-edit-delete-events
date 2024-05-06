import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from './pages/Login.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Index />} />
        <Route exact path="/events" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
