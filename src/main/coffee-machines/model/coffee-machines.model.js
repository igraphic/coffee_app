/* eslint-disable new-cap */
import mongoose from '../../database/db.connect';

const { Schema } = mongoose;

const coffeeMachineSchema = new Schema({
  sku: {
    type: String,
    require: true,
    unique: true,
  },
  product_type: String,
  model_type: String,
  water_line_compatible: Boolean,
});

const CoffeeMachineModel = new mongoose.model(
  'Coffee_Machine',
  coffeeMachineSchema,
);

export const create = async (coffeeMachineData) => {
  const coffeeMachine = new CoffeeMachineModel(coffeeMachineData);
  coffeeMachine.save();
};

export const list = async (query) => CoffeeMachineModel.find(query, (error, coffeeMachines) => {
  // eslint-disable-next-line no-console
  if (error) return console.error(error);
  return coffeeMachines;
});
