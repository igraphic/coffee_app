const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || '27017';
const DB_NAME = process.env.DB_NAME || 'coffee_app';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || 'GP43qvGeSM';

export const DB_URI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
export const DB_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  auth: {
    authSource: 'admin',
  },
  user: DB_USER,
  pass: DB_PASSWORD,
};
