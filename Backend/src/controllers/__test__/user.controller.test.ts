import request from 'supertest';
import { app } from '../../app';

describe('Tests For User Controller', () => {
  describe('Sign-Up', () => {
    it('Should return status code 201 if signed up successfully', async () => {
      const respnse = await request(app).post('/api/users/signup').send({
        email: 'test@test.com',
        password: '123123',
        name: 'test',
      });
      expect(respnse.status).toBe(201);
      expect(respnse.body.token).toBeDefined();
    });
    it("Should return status code 400 if name isn't probided", async () => {
      const respnse = await request(app).post('/api/users/signup').send({
        email: 'test@test.com',
        password: '123123',
      });
      expect(respnse.status).toBe(400);
    });
  });
  describe('Login', () => {
    it('Should return status code 200 if logged in successfully', async () => {
      await request(app).post('/api/users/signup').send({
        email: 'test@test.com',
        password: '123123',
        name: 'test',
      });
      const respnse = await request(app).post('/api/users/login').send({
        email: 'test@test.com',
        password: '123123',
      });
      expect(respnse.status).toBe(200);
      expect(respnse.body.token).toBeDefined();
    });
    it("Should return status code 400 if user doesn't exist", async () => {
      const respnse = await request(app).post('/api/users/login').send({
        email: 'test@test.com',
        password: '123123',
      });
      expect(respnse.status).toBe(400);
    });
  });
});
