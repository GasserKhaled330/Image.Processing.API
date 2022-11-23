import express, {Request,Response} from 'express';
import images from './api/images';
import getImagesFilenames from '../utilities/getImgFileNames';

const routes = express.Router();

routes.get('/', (req: Request, res: Response): void => {
  const imagesFilenames: string[] = getImagesFilenames(); 
  res.render('index', { fileNames: imagesFilenames, title: 'image processing api' });
});

routes.use('/images', images);

export default routes;
