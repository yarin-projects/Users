import Button from '../components/button';
import Container from '../components/container';
import Typography from '../components/typography';
import { logout } from '../store/slices/auth.slice';
import { useAppDispatch, useAppSelector } from '../store/store';
import { strings } from '../strings/strings';

const Logout = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(state => state.auth.error);
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <Button type="button" onClick={handleLogout}>
        {strings.button.logout}
      </Button>
      {error && (
        <Typography className="text-red-500" size="text-sm">
          {error}
        </Typography>
      )}
    </>
  );
};

export default Logout;
