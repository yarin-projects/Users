export const tests = {
  data: {
    signUpUser: {
      email: 'test@test.com',
      password: '123123',
      name: 'test',
    },
    loginUser: {
      email: 'test@test.com',
      password: '123123',
    },
  },
  routes: {
    signUp: '/api/users/signup',
    login: '/api/users/login',
  },
  suites: {
    userController: {
      title: 'Tests For User Controller',
      signUp: {
        title: 'Sign-Up',
        cases: {
          validSignUp: 'Should return status code 201 if signed up successfully',
          invalidName: "Should return status code 400 if name isn't provided",
        },
      },
      login: {
        title: 'Login',
        cases: {
          validLogin: 'Should return status code 200 if logged in successfully',
          invalidUser: "Should return status code 400 if user doesn't exist",
        },
      },
    },
  },
};
