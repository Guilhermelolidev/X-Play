import { render, screen } from '@testing-library/react';
import music8 from '../assets/music8.png';
import { CardImage } from '../components/CardImage';

test('renders CardImage component without errors', () => {
   render(<CardImage image={music8} />);
});

test('renders the correct image and text', () => {
   const image = music8;
   const text = 'Pink Floyd';
   render(<CardImage image={image} text={text} />);

   const imageElement = screen.getByAltText(text);
   const textElement = screen.getByText(text);

   expect(imageElement).toBeTruthy();
   expect(textElement).toBeTruthy();
});

test('image element has draggable attribute set to false', () => {
   const image = music8;
   const text = 'Pink Floyd';
   render(<CardImage image={image} text={text} />);
   const imageElement = screen.getByAltText(text);
   expect(imageElement.getAttribute('draggable')).toBe('false');
});
