import {Request, Response} from 'express';
import getImagesFilenames from '../utilities/getImgFileNames';

const imgWidthAndHeightValidator = (imageHeight: string, imageWidth: string): boolean => {
    return isFinite(Number(imageHeight)) && isFinite(Number(imageWidth));
};

const imgFileNameValidator = (filename: string): boolean => {
    const imagesFilenames: string[] = getImagesFilenames();
    return imagesFilenames.includes(filename);
};

const ImageValidator =  (req: Request, res: Response, next: () => void): void => {
    const filename = req.query.filename as string;
    const imageHeight = req.query.height as string;
    const imageWidth = req.query.width as string;
    if (!imgFileNameValidator(filename)) {
        res.render('error', { message: 'Error: Input File is Missing! please Enter A valid File Name' });
    } else {
        if (!imgWidthAndHeightValidator(imageHeight, imageWidth)) {
            res.render('error', { message: 'Error: please Enter a valid number for width and height' });
        } else {
            next();
        }
    }
};

export { ImageValidator };
