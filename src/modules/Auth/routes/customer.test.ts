import app from '../../../app';
import request from 'supertest';

describe('customer auth endpoints', () => {
    describe('customer register', () => {
        test.only('successfully register', () => {
            const response = request(app).post('/api/v1/auth/register').send({
                email: "golden@gmail.com",
                phone: 2347016181313,
                password: "password",
                firstname: "golden",
                lastname: "maceteli",
                gender: "MALE"
            }).expect(400);

        })
    });

    describe('customer login', () => {
        test.only('successfully login', () => {
            const response = request(app).post('/api/v1/auth/login').send({
                email: "golden@gmail.com",
                password: "password",
            }).expect(201);
        })
    })
})