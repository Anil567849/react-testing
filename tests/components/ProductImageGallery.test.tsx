import { render, screen } from '@testing-library/react';
import ProductImageGallery from '../../src/components/ProductImageGallery';


describe("group", () => {
    it("should return null if image doesn't exist", () => {
        const {container} = render(<ProductImageGallery imageUrls={[]} />);
        expect(container).toBeEmptyDOMElement();
    })
    it("should render list of images", () => {
        const imageUrls = ['url1', 'url2'];
        render(<ProductImageGallery imageUrls={imageUrls} />);

        const images = screen.getAllByRole('img');
        
        expect(images).toHaveLength(2);
        imageUrls.forEach((url, index) => {
            expect(images[index]).toHaveAttribute('src', url);
        })
    })
})