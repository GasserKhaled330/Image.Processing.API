import express , {Request, Response} from 'express';
import path from 'path';
import Image from '../../utilities/Image';
import fs from 'fs';

const images = express.Router();

images.get('/', async (req: Request, res: Response) => {
  try {
    const filename = req.query.filename as string;
    const imageHeight = parseInt(req.query.height as string);
    const imageWidth = parseInt(req.query.width as string);
    const ImgPath = path.resolve(
      `./public/processed-images/${filename}${imageWidth}x${imageHeight}.jpeg`);
    
    if (!fs.existsSync(ImgPath)) {
      const ImageObj = new Image(imageWidth, imageHeight, filename);
      await ImageObj.resizeImage();
      res.sendFile(ImgPath);
    } 
    res.sendFile(ImgPath);
  } catch (e) {
    res.render('error', { message: 'Input File is Missing!' });
    throw new Error('Input File is Missing!');
  }
});

export default images;
