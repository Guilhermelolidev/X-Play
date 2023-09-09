import { optionsType } from '../../utils/constants';
import { Button, Container } from './styles';

interface TypeBarProps {
   typeActive: string;
   onSelect: (value: string) => void;
}

export const TypeBar = ({ typeActive, onSelect }: TypeBarProps) => {
   return (
      <Container className="containerTypeBar">
         {optionsType.map((option) => (
            <Button
               onClick={() => onSelect(option.text)}
               $backgroundcolor={
                  option.text === typeActive ? 'var(--bg-gray)' : 'transparent'
               }
               key={option.text}
            >
               {option.text}
            </Button>
         ))}
      </Container>
   );
};
