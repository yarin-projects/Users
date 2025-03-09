import { useNavigate } from 'react-router-dom';
import Container from '../components/container';
import Typography from '../components/typography';
import Button from '../components/button';
import { strings } from '../strings/strings';
import { TOKENS } from '../strings/tokens';
import { useAppSelector } from '../store/store';
import UpdateNameForm from '../features/update-name';

const UpdateNamePage = () => {
  const navigate = useNavigate();
  const name = useAppSelector(state => state.auth.name);
  return (
    <Container>
      <Typography className="text-center mb-5" size="text-4xl">
        {strings.update.title}
      </Typography>
      <Typography className=" mb-2" size="text-sm">
        {strings.update.currentName}
        {name}
      </Typography>
      <Container className="flex flex-col gap-3">
        <UpdateNameForm />
        <Button onClick={() => navigate(TOKENS.routes.home)}>{strings.button.home}</Button>
      </Container>
    </Container>
  );
};

export default UpdateNamePage;
