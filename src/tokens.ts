export const TOKENS = {
  mysql: 'mysql',
  mongodb: 'mongodb',
  IUserRepository: 'IUserRepository',
  IUserService: 'IUserService',
  User: 'User',
  users: 'users',
  UserController: 'UserController',
  defaultRoute: '/',
  usersRoute: '/api/users',
  signUpRoute: '/signup',
  loginRoute: '/login',
  bcryptRounds: 10,
  jwtExpiry: '1h',
  serverPort: 3000,
  httpStatus: {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    INTERNAL_SERVER_ERROR: 500,
  },
  messages: {
    serverRunning: 'Server is running on port',
    mongoDbConnectionSuccess: 'MongoDb database connected successfully',
    mySqlConncetionSuccess: 'MySql database connected successfully',
    userCreated: 'User created successfully',
    loginSuccess: 'Login successful',
    getRoute: 'GET / Route',
    helloWorld: 'Hello World',
    userFound: 'User found',
  },
  errors: {
    jwtKeyMissing: 'JWT_KEY must be defined',
    dbTypeUndefined: 'DB_TYPE must be defined',
    mySqlVariablesUndefined: 'MySql variables must be defined',
    dbUrlUndefined: 'DB_URL must be defined',
    dbTypeInvalid: 'Invalid DB_TYPE',
    mongoDbConnectionFailed: 'Error connecting to the MongoDb database: ',
    mySqlConnectionFailed: 'Error connecting to the MySql database: ',
    internalServerError: 'Internal server error',
    userExists: 'User already exists',
    userNotFound: 'User not found',
    userCouldNotBeCreated: 'User could not be created',
    invalidPassword: 'Invalid password',
    invalidId: 'Invalid id',
  },
};
