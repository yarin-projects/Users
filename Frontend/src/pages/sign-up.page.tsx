import { useNavigate } from 'react-router-dom';
import Container from '../components/container';
import Typography from '../components/typography';
import SignUp from '../features/sign-up';
import Button from '../components/button';
import { strings } from '../strings/strings';
import { TOKENS } from '../config/tokens.config';

const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Typography className="text-center mb-2" size="text-xl">
        {strings.signUp.title}
      </Typography>
      <SignUp />
      <Typography className="mt-3" size="text-sm">
        {strings.signUp.alreadyHaveAccount}
      </Typography>
      <Button onClick={() => navigate(TOKENS.routes.login)}>{strings.button.login}</Button>
    </Container>
  );
};

export default SignUpPage;
