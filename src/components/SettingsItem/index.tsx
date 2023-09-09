import { Switch } from '../Switch';
import { Item } from './styles';

interface SettingsProps {
  text: string;
  isDisabled: boolean;
  toggleSwitch: () => void;
}

export const SettingsItem = ({
  text,
  isDisabled,
  toggleSwitch,
}: SettingsProps) => {
  return (
    <Item>
      <p className="textItem">{text}</p>
      <Switch isDisabled={isDisabled} toggleSwitch={toggleSwitch} />
    </Item>
  );
};
