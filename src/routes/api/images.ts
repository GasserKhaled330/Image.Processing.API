import express, {Request, Response} from 'express';
import path from 'path';
import Image from '../../utilities/Image';
import { ImageValidtor } from '../../middleware/imgDataValidator';
import fs from 'fs';

const images = express.Router();

images.get('/', ImageValidtor, async (req: Request, res: Response): Promise<void> => {
    try {
        const filename = req.query.filename as string;
        const imageHeight = parseInt(req.query.height as string);
        const imageWidth = parseInt(req.query.width as string);
        const ImgPath = path.resolve(`./public/processed-images/${filename}${imageWidth}x${imageHeight}.jpeg`);
        if (!fs.existsSync(ImgPath)) {
            const ImageObj = new Image(imageWidth, imageHeight, filename);
            await ImageObj.resizeImage();
            res.sendFile(ImgPath);
        }
        res.sendFile(ImgPath);
    } catch (e) {
        console.log('failed!');
    }
});

export default images;
