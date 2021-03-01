import mongoose from 'mongoose';
import { DB_URI, DB_OPTIONS } from '../config/database.config';

mongoose.connect(DB_URI, DB_OPTIONS);

const database = mongoose.connection;
database.on('error', console.error.bind(console, 'connection error:'));

export default mongoose;
