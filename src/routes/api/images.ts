import express from 'express';
import path from 'path';
import Image from '../../utilities/Image';

const images = express.Router();

images.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const filename = req.query.filename as unknown as string;
    const height = parseInt(req.query.height as unknown as string);
    const width = parseInt(req.query.width as unknown as string);

    const ImageObj = new Image(width, height);
    const outputImgInfo = await ImageObj.resizeImage(filename);
    const outputImgPath: string = path.resolve(
        `./public/processed-images/${filename}${ImageObj.width}x${ImageObj.height}.${outputImgInfo.format}`);

    res.sendFile(outputImgPath);
  } catch (e) {
    // @ts-ignore
    res.render('error', { message: 'Input File is Missing!' });
  }
});

export default images;
