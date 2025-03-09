import { useNavigate } from 'react-router-dom';
import Container from '../components/container';
import Typography from '../components/typography';
import LoginForm from '../features/login';
import Button from '../components/button';
import { strings } from '../strings/strings';
import { TOKENS } from '../strings/tokens';

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Typography className="text-center mb-2" size="text-4xl">
        {strings.login.title}
      </Typography>
      <LoginForm />
      <Typography className="mt-3 mb-2" size="text-sm">
        {strings.login.dontHaveAccount}
      </Typography>
      <Button onClick={() => navigate(TOKENS.routes.signUp)}>{strings.button.signUp}</Button>
    </Container>
  );
};

export default LoginPage;
