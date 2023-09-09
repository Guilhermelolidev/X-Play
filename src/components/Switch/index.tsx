import { Input, Slider, SwitchStyled } from './styles';

interface SwitchProps {
  isDisabled: boolean;
  toggleSwitch: () => void;
}

export const Switch = ({ isDisabled, toggleSwitch }: SwitchProps) => {
  return (
    <SwitchStyled isDisabled={isDisabled}>
      <Input type="checkbox" checked={isDisabled} onChange={toggleSwitch} />
      <Slider isDisabled={isDisabled} />
    </SwitchStyled>
  );
};
