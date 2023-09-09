import { Logo } from '../Logo';
import { Body, Content, AppBarContainer, ScreenStyled } from './styles';
import { AppBar } from '../AppBar';
import { Outlet } from 'react-router-dom';
import xplaylogo from '../../assets/xplaylogo.svg';
import { Player } from '../Player';

interface ScreenInterface {}

export const Screen = (props: ScreenInterface) => {
   return (
      <ScreenStyled>
         <Body>
            <Logo src={xplaylogo} />
            <Content>
               <Outlet />
            </Content>
         </Body>

         <Player />

         <AppBarContainer>
            <AppBar />
         </AppBarContainer>
      </ScreenStyled>
   );
};
