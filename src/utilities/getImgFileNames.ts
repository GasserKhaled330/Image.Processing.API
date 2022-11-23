import fs from 'fs';
import path from 'path';

const getImagesFilenames = (): string[] => fs
    .readdirSync(path.resolve('./public/images/'))
    .map((filename: string) => filename.split('.')[0]);

export default getImagesFilenames;
