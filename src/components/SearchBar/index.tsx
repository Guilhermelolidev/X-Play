import { ButtonClear, Container, Input } from './styles';
import searchbar from '../../assets/searchbar.svg';
import clear from '../../assets/clear.svg';

interface SearchBarProps {
   value: string;
   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
   onClear: () => void;
}

export const SearchBar = ({ value, onChange, onClear }: SearchBarProps) => {
   return (
      <Container>
         <div className="separator">
            <img src={searchbar} alt="" className="searchIcon" />
            <Input
               type="text"
               placeholder="Pesquisar"
               value={value}
               onChange={onChange}
            />
         </div>

         <ButtonClear onClick={onClear}>
            <img src={clear} alt="" />
         </ButtonClear>
      </Container>
   );
};
