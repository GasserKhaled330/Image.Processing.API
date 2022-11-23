import {Request, Response} from 'express';
import getImagesFilenames from '../utilities/getImgFileNames';

const imgWidthAndHeightValidtor = (imageHeight: string, imageWidth: string): boolean => {
    let isvalid: boolean;
    if (isFinite(Number(imageHeight)) && isFinite(Number(imageWidth))) {
        isvalid = true;
    } else {
        isvalid = false;
    }
    return isvalid;
};

const imgFileNameValidtor = (filename: string): boolean => {
    let isvalid: boolean;
    const imagesFilenames: string[] = getImagesFilenames();
    if (imagesFilenames.includes(filename)) {
        isvalid = true;
    } else {
        isvalid = false;
    }
    return isvalid;
};

const ImageValidtor =  (req: Request, res: Response, next: () => void): void => {
    const filename = req.query.filename as string;
    const imageHeight = req.query.height as string;
    const imageWidth = req.query.width as string;
    if (!imgFileNameValidtor(filename)) {
        res.render('error', { message: 'Error: Input File is Missing! please Enter A valid File Name' });
    } else {
        if (!imgWidthAndHeightValidtor(imageHeight, imageWidth)) {
            res.render('error', { message: 'Error: please Enter a valid number for width and height' });
        } else {
            next();
        }
    }
};

export { ImageValidtor };
