import { list } from '../model/coffee-machines.model';
import { COFFEE_MACHINES_ROUTE } from '../../config/routes.config';

export default (app) => {
  app.get(COFFEE_MACHINES_ROUTE, async (request, response) => {
    const { query } = request;
    const coffeeMachines = await list(query);
    response.json({ items: coffeeMachines });
  });
};
