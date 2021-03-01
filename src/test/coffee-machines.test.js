/* eslint-disable no-undef */
import supertest from 'supertest';
import app from '../main/server/server';
import { COFFEE_MACHINES_ROUTE } from '../main/config/routes.config';

const request = supertest(app);

describe('Coffee Machines: ', () => {
  it('It returns all coffee machines', async (done) => {
    const response = await request.get(COFFEE_MACHINES_ROUTE);
    expect(response.status).toBe(200);
    expect(response.body.items.length).toBe(9);
    done();
  });
});
describe('Filter Coffee Machines: ', () => {
  it('It returns all large machines', async (done) => {
    const response = await request.get(`${COFFEE_MACHINES_ROUTE}?product_type=COFFEE_MACHINE_LARGE`);
    expect(response.status).toBe(200);
    expect(response.body.items.length).toBe(3);
    done();
  });

  it('It returns espresso machines', async (done) => {
    const response = await request.get(`${COFFEE_MACHINES_ROUTE}?product_type=ESPRESSO_MACHINE`);
    expect(response.status).toBe(200);
    expect(response.body.items.length).toBe(3);
    done();
  });

  it('It returns water line compatible machines', async (done) => {
    const response = await request.get(`${COFFEE_MACHINES_ROUTE}?water_line_compatible=true`);
    expect(response.status).toBe(200);
    expect(response.body.items.length).toBe(4);
    done();
  });
});
