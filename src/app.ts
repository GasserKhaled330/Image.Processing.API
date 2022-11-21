import express, {Request,Response} from 'express';
import indexRouter from './routes/index';
import path from 'path';

const app = express();
const port = 3000;

app.use('/api', indexRouter);
app.use(express.static(path.join(__dirname, '../public')));

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.get('/', (req: Request, res: Response): void => {
  res.status(200).redirect('/api');
});

app.listen(port, (): void => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
export default app;
