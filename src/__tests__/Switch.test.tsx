/* eslint-disable testing-library/no-unnecessary-act */
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Switch } from '../components/Switch';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

test('renders Switch component without errors', () => {
   render(<Switch isDisabled={false} toggleSwitch={() => {}} />);
});

test('toggles switch state when clicked', async () => {
   let isDisabled = false;
   const toggleSwitch = () => {
      isDisabled = !isDisabled;
   };

   render(<Switch isDisabled={isDisabled} toggleSwitch={toggleSwitch} />);
   const inputElement = screen.getByTestId('check') as HTMLInputElement;
   expect(inputElement).toBeInTheDocument();
   expect(inputElement.checked).toBe(false); // Verifique o atributo checked

   fireEvent.click(inputElement);
   expect(inputElement).toBeInTheDocument();
   expect(inputElement.checked).toBe(true); // Verifique o atributo checked
   expect(isDisabled).toBe(true);
});
