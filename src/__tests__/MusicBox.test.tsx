import { render, screen } from '@testing-library/react';
import { MusicBox } from '../components/MusicBox';

const exampleMusic = {
   image: 'path/to/music.jpg',
   text: 'Example Music',
   tipo: 'Rock',
};

test('renders MusicBox component with provided props', () => {
   render(
      <MusicBox
         music={exampleMusic}
         hasType={true}
         hasChevron={true}
         width="200px"
      />
   );

   const imageElement = screen.getByAltText(exampleMusic.text);
   expect(imageElement).toBeTruthy();

   const textElement = screen.getByText(exampleMusic.text);
   expect(textElement).toBeTruthy();

   const tipoElement = screen.getByText(exampleMusic.tipo);
   expect(tipoElement).toBeTruthy();

   const chevronElement = screen.getByText('>');
   expect(chevronElement).toBeTruthy();

   const cardElement = screen.getByTestId('musicBoxTest');
   expect(cardElement.getAttribute('width')).toBe('200px');
});
