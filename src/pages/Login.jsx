import { useState } from 'react';
import { Container, Input, Button, VStack, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'user' && password === 'pass') {
      navigate('/events');
    } else {
      toast({
        title: 'Invalid Credentials',
        description: 'Please check your username and password',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt="100px">
        <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button colorScheme="blue" onClick={handleLogin}>Login</Button>
      </VStack>
    </Container>
  );
};

export default Login;