import { useNavigate } from 'react-router-dom';
import Container from '../shared/container';
import Button from '../shared/button';
import { TOKENS } from '../../strings/tokens';
import { strings } from '../../strings/strings';
import Logout from '../../features/logout';

const UserActions = () => {
  const navigate = useNavigate();
  return (
    <Container className="flex flex-col gap-5">
      <Button onClick={() => navigate(TOKENS.routes.updateName)}>
        {strings.button.updateName}
      </Button>
      <Logout />
    </Container>
  );
};

export default UserActions;
