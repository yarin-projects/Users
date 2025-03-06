import { useNavigate } from 'react-router-dom';
import Container from '../components/container';
import Typography from '../components/typography';
import Login from '../features/login';
import Button from '../components/button';

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Typography className="text-center mb-2" size="text-xl">
        Login Page
      </Typography>
      <Login />
      <Typography className="mt-3" size="text-sm">
        Don&apos;t have an account?
      </Typography>
      <Button onClick={() => navigate('/signup')}>Sign-Up</Button>
    </Container>
  );
};

export default LoginPage;
