import Container from '../components/shared/container';
import Typography from '../components/shared/typography';
import { strings } from '../strings/strings';
import UserInfo from '../components/home/user-info';
import UserActions from '../components/home/user-actions';

const HomePage = () => {
  return (
    <Container>
      <Typography className="text-center mb-5" size="text-4xl">
        {strings.home.title}
      </Typography>
      <UserInfo />
      <UserActions />
    </Container>
  );
};

export default HomePage;
