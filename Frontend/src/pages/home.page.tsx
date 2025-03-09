import Container from '../components/container';
import Typography from '../components/typography';
import Logout from '../features/logout';
import { useAppSelector } from '../store/store';
import { strings } from '../strings/strings';

const HomePage = () => {
  const email = useAppSelector(state => state.auth.email);
  return (
    <Container>
      <Typography className="text-center" size="text-xl">
        {strings.home.title}
      </Typography>
      <Typography className="text-center mb-4" size="text-sm">
        {email}
      </Typography>
      <Logout />
    </Container>
  );
};

export default HomePage;
