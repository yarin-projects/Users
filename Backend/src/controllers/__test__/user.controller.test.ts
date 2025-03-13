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
    });
  });
});
