import { useState } from 'react';
import { optionsType } from '../../utils/constants';
import { Button, Container } from './styles';

export const TypeBar = () => {
  const [isActive, setIsActive] = useState<string>('Músicas');

  const onSelect = (text: string) => {
    setIsActive(text);
  };

  return (
    <Container>
      {optionsType.map((option) => (
        <Button
          onClick={() => onSelect(option.text)}
          backgroundcolor={
            option.text === isActive ? 'var(--bg-gray)' : 'transparent'
          }
          key={option.text}
        >
          {option.text}
        </Button>
      ))}
    </Container>
  );
};
