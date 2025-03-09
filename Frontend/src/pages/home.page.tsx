import { useNavigate } from 'react-router-dom';
import Container from '../components/container';
import Typography from '../components/typography';
import Logout from '../features/logout';
import { useAppSelector } from '../store/store';
import { strings } from '../strings/strings';
import { TOKENS } from '../strings/tokens';
import Button from '../components/button';

const HomePage = () => {
  const email = useAppSelector(state => state.auth.email);
  const name = useAppSelector(state => state.auth.name);
  const navigate = useNavigate();
  return (
    <Container>
      <Typography className="text-center mb-5" size="text-4xl">
        {strings.home.title}
      </Typography>
      <Typography className="text-center mb-3" size="text-sm">
        {email}
      </Typography>
      <Typography className="text-center mb-4" size="text-sm">
        {name}
      </Typography>
      <Container className="flex flex-col gap-5">
        <Button onClick={() => navigate(TOKENS.routes.updateName)}>
          {strings.button.updateName}
        </Button>
        <Logout />
      </Container>
    </Container>
  );
};

export default HomePage;
