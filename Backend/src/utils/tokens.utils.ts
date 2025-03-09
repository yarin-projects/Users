export const TOKENS = {
  mysql: 'mysql',
  mongodb: 'mongodb',
  IUserRepository: 'IUserRepository',
  IUserService: 'IUserService',
  User: 'User',
  users: 'users',
  UserController: 'UserController',
  bcryptRounds: 10,
  jwtExpiry: '1h',
  serverPort: 3000,
  corsOrigin: 'http://localhost:5173',
  token: 'Token',
  routes: {
    default: '/',
    usersBasePath: '/api/users',
    signUp: '/signup',
    login: '/login',
    logout: '/logout',
    findById: 'id/:id',
    me: '/me',
    update: '/update',
  },
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
    logoutSuccess: 'Logout successful',
    userUpdated: 'User updated successfully',
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
    invalidData: 'Invalid data',
    invalidEmail: 'Invalid email',
    noTokenProvided: 'Access Denied: No token provided',
  },
};
