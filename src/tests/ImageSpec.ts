import Image from '../utilities/Image';

describe('Testing image processing', () => {
    let imageObj1: Image;
    let imageObj2: Image;
    beforeAll(() => {
        imageObj1 = new Image(200, 200, 'alaska');
        imageObj2 = new Image(300, 300, 'santamonica');
    });
    it('Throws a missing input error if the wrong filename is provided',  async (): Promise<void> => {
        const result = imageObj1.resizeImage();
        await expectAsync(result).toBeRejected();
    });

    it('Expect Transform to not throw error or error: Input File is missing', async (): Promise<void> => {
        const result = imageObj2.resizeImage();
        await expectAsync(result).toBeResolved();
    });
});
