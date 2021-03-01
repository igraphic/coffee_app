import express from 'express';
import controllers from '../config/controllers.config';
import '../database/db.connect';

const app = express();

controllers.map((controller) => controller(app));

export default app;
