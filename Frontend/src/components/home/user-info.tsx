import { useAppSelector } from '../../store/store';
import Typography from '../shared/typography';

const UserInfo = () => {
  const { name, email } = useAppSelector(state => state.auth);
  return (
    <>
      <Typography className="text-center mb-3" size="text-sm">
        {email}
      </Typography>
      <Typography className="text-center mb-4" size="text-sm">
        {name}
      </Typography>
    </>
  );
};

export default UserInfo;
