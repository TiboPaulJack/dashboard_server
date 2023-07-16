import { config } from 'dotenv';
config();
// @ts-ignore
import express from 'express';
import router from './app/routers/router';
// @ts-ignore
import cors from 'cors';

const port = process.env.PORT || 3000;

const app = express();

app.use(cors(
    {
        origin: "*",
    }
));

app.use(express.json());

app.use(router);

app.listen(port, () => {
console.log(`Server ready: http://localhost:${port}`);
});
