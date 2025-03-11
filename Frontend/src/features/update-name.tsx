import { useForm } from 'react-hook-form';
import Button from '../components/shared/button';
import Form from '../components/shared/form';
import Input from '../components/shared/input';
import Typography from '../components/shared/typography';
import { useAppDispatch, useAppSelector } from '../store/store';
import { UpdateNameFormData, updateNameSchema } from '../schemas/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { updateUserName } from '../store/slices/auth.slice';
import { TOKENS } from '../strings/tokens';
import { strings } from '../strings/strings';
import { useNavigate } from 'react-router-dom';

const UpdateNameForm = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(state => state.auth.error);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateNameFormData>({
    resolver: zodResolver(updateNameSchema),
  });

  const onSubmit = (data: UpdateNameFormData) => {
    dispatch(updateUserName(data));
    navigate(TOKENS.routes.home);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder={TOKENS.placeholders.name}
        {...register('name')}
        error={errors.name?.message}
      />
      {error && (
        <Typography className="text-red-500" size="text-sm">
          {error}
        </Typography>
      )}
      <Button type="submit">{strings.button.update}</Button>
    </Form>
  );
};

export default UpdateNameForm;
