import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser, { urlencoded } from 'body-parser';

import routes from './routes/calculator';

const app: Express = express();
app.use(bodyParser.json());
app.use(bodyParser,urlencoded({
    extended: false
}));
app.use(cors());

const port = 1211;

app.use('/', (req: Request, res: Response, next) => {
    next();
})

app.use('/api/calc/', routes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})