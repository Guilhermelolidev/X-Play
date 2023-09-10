import { render, screen } from '@testing-library/react';
import { Logo } from '../components/Logo';
import xplaylogo from '../assets/xplaylogo.svg';

test('renders Logo component without errors', () => {
   render(<Logo src={xplaylogo} />);
});

test('renders the logo image with the correct src', () => {
   render(<Logo src={xplaylogo} />);
   const imageLogo = screen.getByAltText('Logo');
   expect(imageLogo.getAttribute('src')).toBe(xplaylogo);
});

test('renders the logo with the correct CSS class', () => {
   render(<Logo src={xplaylogo} />);
   const logoElement = screen.getByRole('img', { name: 'Logo' });
   expect(logoElement).toBeTruthy();
});
