import { Button, Icon } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { optionsNavigation } from '../../utils/constants';

interface OptionsInterfaceProps {}

export const AppBar = (props: OptionsInterfaceProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onNavigate = (src: string) => {
    navigate(`/${src}`);
  };

  return (
    <>
      {optionsNavigation.map((option) => (
        <Button onClick={() => onNavigate(option.alt)} key={option.alt}>
          <Icon
            src={
              option.alt === pathname.slice(1) ? option.srcIsActive : option.src
            }
            alt={option.alt}
          />
        </Button>
      ))}
    </>
  );
};
