import { useForm } from 'react-hook-form';
import Button from '../components/button';
import Form from '../components/form';
import Input from '../components/input';
import Typography from '../components/typography';
import { useAppDispatch, useAppSelector } from '../store/store';
import { SignUpFormData, signUpSchema } from '../schemas/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUp } from '../store/slices/auth.slice';
import { TOKENS } from '../config/tokens.config';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(state => state.auth.error);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    dispatch(signUp(data));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder={TOKENS.placeholders.name}
        {...register('name')}
        error={errors.name?.message}
      />
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
      <Button type="submit">{TOKENS.submit}</Button>
    </Form>
  );
};

export default SignUp;
