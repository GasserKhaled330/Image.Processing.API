import express from 'express';
import images from './api/images';
import fs from 'fs';
import path from 'path';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response) => {
  const imagesFilenames: string[] = fs
    .readdirSync(path.resolve('public/images/'))
    .map((filename) => filename.split('.')[0]);
  res.render('index', { fileNames: imagesFilenames, title: 'image processing api' });
});

routes.use('/images', images);

export default routes;
