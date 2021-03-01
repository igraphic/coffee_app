import * as coffeeMachinesRepo from '../coffee-machines/model/coffee-machines.model';
import * as coffeePodsRepo from '../coffee-pods/model/coffee-pods.model';
import COFFEE_MACHINES from './data/coffee-machines';
import COFFEE_PODS from './data/coffee-pods';

const loadDatabase = async (repository, items) => {
  const existingData = await repository.list();

  if (existingData.length === 0) {
    items.map((item) => repository.create(item));
  }
};

loadDatabase(coffeeMachinesRepo, COFFEE_MACHINES);
loadDatabase(coffeePodsRepo, COFFEE_PODS);
setTimeout(() => process.exit(), 5000);
