import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../store/store';
import { LoginFormData, loginSchema } from '../schemas/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { login } from '../store/slices/auth.slice';
import Form from '../components/shared/form';
import Input from '../components/shared/input';
import { TOKENS } from '../strings/tokens';
import Typography from '../components/shared/typography';
import Button from '../components/shared/button';
import { strings } from '../strings/strings';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(state => state.auth.error);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (data: LoginFormData) => {
    dispatch(login(data));
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="email"
        placeholder={TOKENS.placeholders.email}
        {...register('email')}
        error={errors.email?.message}
      />
      <Input
        type="password"
        placeholder={TOKENS.placeholders.password}
        {...register('password')}
        error={errors.password?.message}
      />
      {error && (
        <Typography className="text-red-500" size="text-sm">
          {error}
        </Typography>
      )}
      <Button type="submit">{strings.button.login}</Button>
    </Form>
  );
};

export default LoginForm;
