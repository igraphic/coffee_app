import mongoose from '../../database/db.connect';

const { Schema } = mongoose;

const coffeePodSchema = new Schema({
  sku: {
    type: String,
    require: true,
    unique: true,
  },
  product_type: String,
  coffee_flavor: String,
  pack_size: Number,
});

// eslint-disable-next-line new-cap
const CoffeePodModel = new mongoose.model('Coffee_Pod', coffeePodSchema);

export const create = async (coffeePodData) => {
  const coffeePod = new CoffeePodModel(coffeePodData);
  await coffeePod.save();
};

export const list = async (query) => CoffeePodModel.find(query, (error, coffeePods) => {
  // eslint-disable-next-line no-console
  if (error) return console.error(error);
  return coffeePods;
});
