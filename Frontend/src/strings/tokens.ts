const apiBaseUrl: string = import.meta.env.VITE_PUBLIC_API_BASE_URL ?? 'http://localhost:3000';
const usersBasePath: string = '/api/users';

export const TOKENS = {
  object: 'object',
  message: 'message',
  error: 'error',
  string: 'string',
  auth: 'auth',
  empty: '',
  routes: {
    home: '/',
    login: '/login',
    signUp: '/signup',
    updateName: '/update',
    wildCard: '*',
  },
  api: {
    baseUrl: apiBaseUrl,
    timeout: 1000 * 60,
    users: {
      login: `${usersBasePath}/login`,
      signup: `${usersBasePath}/signup`,
      logout: `${usersBasePath}/logout`,
      me: `${usersBasePath}/me`,
      updateName: `${usersBasePath}/update`,
    },
  },
  actions: {
    auth: {
      signUp: 'auth/signup',
      login: 'auth/login',
      logout: 'auth/logout',
      verifyCurrentUser: 'auth/verify-current-user',
      updateName: 'auth/update-name',
    },
  },
  placeholders: {
    name: 'Name...',
    email: 'Email...',
    password: 'Password...',
  },
  validations: {
    name: {
      min: {
        value: 2,
        message: 'Name is required',
      },
      max: {
        value: 20,
        message: 'Name must be less than 20 characters',
      },
    },
    email: {
      message: 'Invalid email',
    },
    password: {
      min: {
        value: 6,
        message: 'Password must be at least 6 characters',
      },
      max: {
        value: 25,
        message: 'Password must be less than 25 characters',
      },
    },
  },
  errors: {
    basicError: 'An error occurred',
    unexpectedError: 'An unexpected error occurred',
  },
};
