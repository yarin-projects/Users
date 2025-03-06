import Container from '../components/container';
import Typography from '../components/typography';
import { useAppSelector } from '../store/store';

const HomePage = () => {
  const email = useAppSelector(state => state.auth.email);
  return (
    <Container>
      <Typography className="text-center" size="text-xl">
        Home Page
      </Typography>
      <Typography className="text-center" size="text-sm">
        {email}
      </Typography>
    </Container>
  );
};

export default HomePage;
