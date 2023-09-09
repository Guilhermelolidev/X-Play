import { useState } from 'react';
import {
   ArtistText,
   Button,
   ButtonsContainer,
   Container,
   ContainerClosed,
   ContainerOpen,
   ContainerTexts,
   DragIcon,
   InfoMusic,
   MusicText,
   PlayerImage,
} from './styles';
import player from '../../assets/player.png';
import stop from '../../assets/stop.png';
import nextmusic from '../../assets/nextmusic.svg';
import drag from '../../assets/drag.png';

export const Player = () => {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const onOpenPlayer = () => {
      setIsOpen(!isOpen);
   };

   return (
      <Container isopen={isOpen} onClick={onOpenPlayer}>
         {isOpen && (
            <ContainerOpen>
               <DragIcon src={drag} alt="" />
               <PlayerImage src={player} alt="" width="192px" height="192px" />

               <InfoMusic isopen={isOpen}>
                  <ArtistText className="artistText">
                     Faroeste caboclo
                  </ArtistText>
                  <MusicText className="musicText">
                     Legião urbana - Rock brasília
                  </MusicText>
               </InfoMusic>

               <div className="containerOpenButtons">
                  <Button className="nextmusicBtnLeft">
                     <img src={nextmusic} alt="" />
                  </Button>
                  <Button className="stopBtn">
                     <img src={stop} alt="" />
                  </Button>
                  <Button className="nextmusicBtn">
                     <img src={nextmusic} alt="" />
                  </Button>
               </div>

               <ContainerTexts>
                  <p>Não tinha medo o tal João de Santo Cristo</p>
                  <p>Era o que todos diziam quando ele se perdeu</p>
                  <p className="fontSize24">
                     Deixou pra trás todo o marasmo da <span>fazenda</span>
                  </p>
                  <p className="lastText">
                     Só pra sentir no seu sangue o ódio que{' '}
                     <span>Jesus lhe deu...</span>
                  </p>
               </ContainerTexts>
            </ContainerOpen>
         )}

         {!isOpen && (
            <ContainerClosed>
               <PlayerImage src={player} alt="" width="72px" height="72px" />

               <div className="containerInfo">
                  <DragIcon src={drag} alt="" />

                  <InfoMusic>
                     <ArtistText className="artistText">
                        Faroeste caboclo
                     </ArtistText>
                     <MusicText className="musicText">
                        Legião urbana - Rock brasília
                     </MusicText>
                  </InfoMusic>
               </div>

               <ButtonsContainer>
                  <Button className="stopBtn">
                     <img src={stop} alt="" />
                  </Button>
                  <Button className="nextmusicBtn">
                     <img src={nextmusic} alt="" />
                  </Button>
               </ButtonsContainer>
            </ContainerClosed>
         )}
      </Container>
   );
};
