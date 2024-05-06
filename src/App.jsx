import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from './pages/Login.jsx';
import { Box, Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Index />} />
        <Route exact path="/events" element={<Index />} />
      </Routes>
    </Router>
  );
}

const NavigationBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Logic for logging out
    navigate('/login');
  };
  return (
    <Box bg="blue.500" p={4} color="white">
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="lg" fontWeight="bold">MyApp</Text>
        <Button onClick={handleLogout}>Logout</Button>
      </Flex>
    </Box>
  );
};

export default App;
