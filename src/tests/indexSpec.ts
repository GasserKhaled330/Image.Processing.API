import app from '../app';
import supertest from 'supertest';

const request = supertest(app);

describe('Test endpoint responses', () => {
    it('gets the api endpoint', async (): Promise<void> => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
    });
});
