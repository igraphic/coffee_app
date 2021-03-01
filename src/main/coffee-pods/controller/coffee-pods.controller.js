import { list } from '../model/coffee-pods.model';
import { COFFEE_PODS_ROUTE } from '../../config/routes.config';

export default (app) => {
  app.get(COFFEE_PODS_ROUTE, async (request, response) => {
    const { query } = request;
    const coffeePods = await list(query);
    response.json({ items: coffeePods });
  });
};
