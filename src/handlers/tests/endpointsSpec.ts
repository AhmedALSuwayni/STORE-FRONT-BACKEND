import supertest from 'supertest';
import app from '../../server';
const request = supertest(app);
import * as dotenv from 'dotenv';
dotenv.config();
const {TEST_TOKEN} = process.env;

describe('Test Product Endpoints', (): void => {

    it('Create Product',async function ():Promise<void>{
        try {
            const res: supertest.Response = await request.post('/product').send({
                "name": "Fork",
                "price": 11,
                "category": "wood"
            }).set('Authorization','Bearer '+TEST_TOKEN);
            expect(res.status).toBe(200);
        } catch (error){
            Promise.reject(new Error("Can Not Create Product"))
        }
    });

    it('Show One Product', async function ():Promise<void> {
        const res: supertest.Respone = await request.get('/products/1')
        expect(res.status).toBe(200);
    });

    it('Show All Product', async function ():Promise<void> {
        const res: supertest.Respone = await request.get('/products/')
        expect(res.status).toBe(200);
    });
});

describe('Test User Endpoints', (): void => {

    it('Create User',async function ():Promise<void> {
        try {
            const res: supertest.Response = await request.post('/signup').send({
                "name": "Ayman",
                "username": "Test",
                "password": "123456"
            });
            expect(res.status).toBe(200);
        } catch (error){
            Promise.reject(new Error("Can Not Create User"))
        }
    });

    it('Sign In As User',async function ():Promise<void>{
        try {
            const res: supertest.Response = await request.post('/signin').send({
                "username": "endpointTest",
                "password": "123456"
            })
            expect(res.status).toBe(200);
        } catch (error){
            Promise.reject(new Error("Can Not SignIn"))
        }
    });

    it('Show One User', async function ():Promise<void> {
        const res: supertest.Respone = await request.get('/users/1').set('Authorization','Bearer '+TEST_TOKEN);
        expect(res.status).toBe(200);
    })

    it('Show All Users', async function ():Promise<void> {
        const res: supertest.Respone = await request.get('/users').set('Authorization','Bearer '+TEST_TOKEN);
        expect(res.status).toBe(200);
    });
});

describe('Test Order Endpoints', (): void => {

    it('Create Order',async function ():Promise<void>{
        try {
            const res: supertest.Response = await request.post('/order').send({
                "userId": 1
            }).set('Authorization','Bearer '+TEST_TOKEN);
            expect(res.status).toBe(200);
        } catch (error){
            Promise.reject(new Error("Can Not Create Order"))
        }
    });

    it('Add Product To an Order',async function ():Promise<void>{
        try {
            const res: supertest.Response = await request.post('/order/product/add').send({
                "orderId": "1",
                "productId": "5",
                "quantity": "2"
            }).set('Authorization','Bearer '+TEST_TOKEN);
            expect(res.status).toBe(200);
        } catch (error){
            Promise.reject(new Error("Can Not Create Order"))
        }
    });

    it('Show One Order', async function ():Promise<void> {
        const res: supertest.Respone = await request.get('/order/1').set('Authorization','Bearer '+TEST_TOKEN);
        expect(res.status).toBe(200);
    });

    it('Show All Orders', async function ():Promise<void> {
        const res: supertest.Respone = await request.get('/order/').set('Authorization','Bearer '+TEST_TOKEN);
        expect(res.status).toBe(200);
    });
});
