import sharp from 'sharp';
import path from 'path';

//import { promises as fsPromises } from 'fs';

class Image {
    private readonly _width: number;
    private readonly _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }

// @ts-ignore
    resizeImage(fileName: string): Promise<sharp.OutputInfo> {

        const inputPath: string = path.resolve(`public/images/${fileName}${'.jpg' || '.png'}`);
        try {
            return sharp(inputPath)
                .resize({
                    width: this._width,
                    height: this._height
                })
                .toFormat("jpeg", {mozjpeg: true})
                .toFile(`public/processed-images/${fileName}${this._width}x${this._height}.jpeg`);
        } catch (error) {
            // @ts-ignore
            console.log(error.message);
        }
    }
}

export default Image;
