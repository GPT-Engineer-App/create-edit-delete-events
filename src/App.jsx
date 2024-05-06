import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Index from "./pages/Index.jsx";
import Login from './pages/Login.jsx';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      navigate('/login');
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/events" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;