import { errors } from './tokens/errors.tokens';
import { events } from './tokens/events.tokens';
import { httpStatus } from './tokens/http-status-codes.tokens';
import { injections } from './tokens/injections.tokens';
import { messages } from './tokens/messages.tokens';
import { routes } from './tokens/routes.tokens';
import { tests } from './tokens/tests.tokens';

export const TOKENS = {
  mysql: 'mysql',
  mongodb: 'mongodb',
  userModelName: 'User',
  userTableName: 'users',
  bcryptRounds: 10,
  jwtExpiry: '1h',
  serverPort: 3000,
  corsAllowedUrls: ['http://localhost:5000'],
  token: 'Token',
  injections,
  routes,
  httpStatus,
  events,
  tests,
  messages,
  errors,
};
