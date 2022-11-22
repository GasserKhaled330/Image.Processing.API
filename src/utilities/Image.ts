import sharp from 'sharp';
import path from 'path';

class Image {
    private readonly _width: number;
    private readonly _height: number;
    private readonly _imageName: string;

    constructor(width: number, height: number, _imageName: string) {
        this._width = width;
        this._height = height;
        this._imageName = _imageName;
    }

    resizeImage(): Promise<sharp.OutputInfo> {
        const inputPath: string = path.resolve(`public/images/${this._imageName}${'.jpg' || '.png'}`);
        try {
            return sharp(inputPath)
                .resize({
                    width: this._width, height: this._height
                })
                .toFormat('jpeg', {mozjpeg: true})
                .toFile(`public/processed-images/${this._imageName}${this._width}x${this._height}.jpeg`);
        } catch (e) {
            throw new Error('Failed in resizing Image');
        }
    }
}

export default Image;
