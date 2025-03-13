import request from 'supertest';
import { app } from '../../app';
import { TOKENS } from '../../utils/tokens.utils';

describe(TOKENS.tests.suites.userController.title, () => {
  describe(TOKENS.tests.suites.userController.signUp.title, () => {
    it(TOKENS.tests.suites.userController.signUp.cases.validSignUp, async () => {
      const respnse = await request(app)
        .post(TOKENS.tests.routes.signUp)
        .send(TOKENS.tests.data.signUpUser);
      expect(respnse.status).toBe(TOKENS.httpStatus.CREATED);
      expect(respnse.body.token).toBeDefined();
    });
    it(TOKENS.tests.suites.userController.signUp.cases.invalidName, async () => {
      const respnse = await request(app)
        .post(TOKENS.tests.routes.signUp)
        .send(TOKENS.tests.data.loginUser);
      expect(respnse.status).toBe(TOKENS.httpStatus.BAD_REQUEST);
    });
  });
  describe(TOKENS.tests.suites.userController.login.title, () => {
    it(TOKENS.tests.suites.userController.login.cases.validLogin, async () => {
      await request(app).post(TOKENS.tests.routes.signUp).send(TOKENS.tests.data.signUpUser);
      const respnse = await request(app)
        .post(TOKENS.tests.routes.login)
        .send(TOKENS.tests.data.loginUser);
      expect(respnse.status).toBe(TOKENS.httpStatus.OK);
      expect(respnse.body.token).toBeDefined();
    });
    it(TOKENS.tests.suites.userController.login.cases.invalidUser, async () => {
      const respnse = await request(app)
        .post(TOKENS.tests.routes.login)
        .send(TOKENS.tests.data.loginUser);
      expect(respnse.status).toBe(TOKENS.httpStatus.BAD_REQUEST);
    });
  });
});
