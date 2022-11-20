import Image from '../utilities/Image';

describe('Testing image processing', () => {
    let imageObj: Image;
    beforeEach(() => {
        imageObj = new Image(200,200);
    })
    it('Throws a missing input error if the wrong filename is provided',  async () => {
        const result = imageObj.resizeImage('alaska');
        await expectAsync(result).toBeRejected();
    });

    it('Expect Transform to not throw error or error: Input File is missing', async () => {
        const result = imageObj.resizeImage('santamonica');
        await expectAsync(result).toBeResolved();
    });
});