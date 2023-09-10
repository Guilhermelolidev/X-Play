import { Input, Slider, SwitchStyled } from './styles';

interface SwitchProps {
   isDisabled: boolean;
   toggleSwitch: () => void;
}

export const Switch = ({ isDisabled, toggleSwitch }: SwitchProps) => {
   return (
      <SwitchStyled $isdisabled={isDisabled}>
         <Input
            type="checkbox"
            checked={isDisabled}
            onChange={toggleSwitch}
            data-testid="check"
         />
         <Slider $isdisabled={isDisabled} />
      </SwitchStyled>
   );
};
