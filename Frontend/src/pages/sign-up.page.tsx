import { useNavigate } from 'react-router-dom';
import Container from '../components/container';
import Typography from '../components/typography';
import SignUp from '../features/sign-up';
import Button from '../components/button';

const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Typography className="text-center mb-2" size="text-xl">
        Sign-Up Page
      </Typography>
      <SignUp />
      <Typography className="mt-3" size="text-sm">
        Already have an account?
      </Typography>
      <Button onClick={() => navigate('/login')}>Login</Button>
    </Container>
  );
};

export default SignUpPage;
