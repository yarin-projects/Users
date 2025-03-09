import { AxiosError } from 'axios';
import { TOKENS } from '../strings/tokens';

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof AxiosError) {
    const data = error.response?.data;
    if (
      data &&
      typeof data === TOKENS.object &&
      TOKENS.message in data &&
      typeof data.message === TOKENS.string
    ) {
      return data.message;
    }
    return TOKENS.errors.basicError;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return TOKENS.errors.unexpectedError;
};
