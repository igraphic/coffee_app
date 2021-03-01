/* eslint-disable no-undef */
import supertest from 'supertest';
import app from '../main/server/server';
import { COFFEE_PODS_ROUTE } from '../main/config/routes.config';

const request = supertest(app);

describe('Coffee Pods: ', () => {
  it('It returns all coffee pods', async (done) => {
    const response = await request.get(COFFEE_PODS_ROUTE);
    expect(response.status).toBe(200);
    expect(response.body.items.length).toBe(26);
    done();
  });
});
describe('Filter Coffee Pods: ', () => {
  it('It returns all large pods', async (done) => {
    const response = await request.get(`${COFFEE_PODS_ROUTE}?product_type=COFFEE_POD_LARGE`);
    expect(response.status).toBe(200);
    expect(response.body.items.length).toBe(10);
    done();
  });

  it('It returns all espresso vanilla pods', async (done) => {
    const response = await request.get(`${COFFEE_PODS_ROUTE}?product_type=ESPRESSO_POD&coffee_flavor=COFFEE_FLAVOR_VANILLA`);
    expect(response.status).toBe(200);
    expect(response.body.items.length).toBe(3);
    done();
  });
});
