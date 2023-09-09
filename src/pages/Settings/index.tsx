import { useState } from 'react';
import { SettingsItem } from '../../components/SettingsItem';
import { CardSettings, Container } from './styles';

export const SettingsPage = () => {
  const [opt1, setOpt1] = useState(false);
  const [opt2, setOpt2] = useState(false);
  const [opt3, setOpt3] = useState(false);
  const [opt4, setOpt4] = useState(false);
  const [opt5, setOpt5] = useState(false);
  const [opt6, setOpt6] = useState(false);

  return (
    <Container>
      <p className="title">Configurações</p>

      <CardSettings>
        <SettingsItem
          text="Auto play"
          isDisabled={opt1}
          toggleSwitch={() => setOpt1(!opt1)}
        />
        <SettingsItem
          text="Mix Audio Types"
          isDisabled={opt2}
          toggleSwitch={() => setOpt2(!opt2)}
        />
        <SettingsItem
          text="Enable Week Discovery"
          isDisabled={opt3}
          toggleSwitch={() => setOpt3(!opt3)}
        />
        <SettingsItem
          text="Enable Auto DJ"
          isDisabled={opt4}
          toggleSwitch={() => setOpt4(!opt4)}
        />
        <SettingsItem
          text="Enable 3D Audio"
          isDisabled={opt5}
          toggleSwitch={() => setOpt5(!opt5)}
        />
        <SettingsItem
          text="Enable Auto Sync"
          isDisabled={opt6}
          toggleSwitch={() => setOpt6(!opt6)}
        />
      </CardSettings>
    </Container>
  );
};
