import app from './server/server';
import { PORT } from './config/server.config';

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });
