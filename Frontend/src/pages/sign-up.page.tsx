import { useNavigate } from 'react-router-dom';
import Container from '../components/shared/container';
import Typography from '../components/shared/typography';
import SignUpForm from '../features/sign-up';
import Button from '../components/shared/button';
import { strings } from '../strings/strings';
import { TOKENS } from '../strings/tokens';

const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Typography className="text-center mb-2" size="text-4xl">
        {strings.signUp.title}
      </Typography>
      <SignUpForm />
      <Typography className="mt-3 mb-2" size="text-sm">
        {strings.signUp.alreadyHaveAccount}
      </Typography>
      <Button onClick={() => navigate(TOKENS.routes.login)}>{strings.button.login}</Button>
    </Container>
  );
};

export default SignUpPage;
