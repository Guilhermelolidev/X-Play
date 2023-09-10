import styled from 'styled-components';

export const Container = styled.div<{ $isopen: boolean }>`
   width: 98%;
   height: ${(props) => (!props.$isopen ? '99px' : '770px')};
   background: transparent
      linear-gradient(
         180deg,
         var(--bg-pink) 0%,
         var(--bg-purple) 51%,
         var(--bg-purple-dark) 100%
      );
   box-shadow: 0px 0px 15px var(--bg-shadow-dark);
   border-radius: 6px 6px 0px 0px;
   opacity: 0.9;
   position: absolute;
   bottom: 92px;
   left: 5px;
   cursor: pointer;
   transition: 0.2s;
`;

export const ContainerClosed = styled.div`
   display: flex;
   align-items: center;
   padding: 9px;
   height: 100%;
`;

export const InfoMusic = styled.div<{ $isopen?: boolean }>`
   display: flex;
   flex-direction: column;
   margin-left: ${(props) => !props.$isopen && '16px'};
   align-items: ${(props) => (props.$isopen ? 'center' : 'flex-start')};
   margin-top: ${(props) => props.$isopen && '22px'};

   .musicText {
      margin-top: 4px;
   }
`;

export const ArtistText = styled.p`
   color: var(--white);
   font-size: 21px;
   font-weight: var(--medium);
`;

export const MusicText = styled.p`
   color: var(--white);
   font-size: 14px;
   font-weight: var(--regular);
`;

export const ButtonsContainer = styled.div`
   display: flex;
   position: absolute;
   right: 17px;
   opacity: 1;

   .nextmusicBtn {
      margin-left: 8px;
      transform: scaleX(-1);
   }
`;

export const Button = styled.button`
   background: transparent;
   border: none;
`;

export const DragIcon = styled.img`
   position: absolute;
   top: 5px;
   left: 200px;
   width: 18px;
   height: 15px;
`;

export const ContainerTexts = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 92px;

   align-items: center;
   padding: 0 9px;

   p + p {
      margin-top: 13px;
   }

   p {
      color: var(--white);
      font-weight: var(--medium);
      font-size: 16x;

      display: flex;
      flex-direction: column;
      align-items: center;
   }

   .fontSize24 {
      font-size: 24px;
   }

   .lastText {
      width: 296px;
   }
`;

export const ContainerOpen = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 44px;

   .containerOpenButtons {
      display: flex;
      align-items: center;
      margin-top: 25px;

      .nextmusicBtn {
         transform: scaleX(-1);
         margin-left: 8px;
      }

      .nextmusicBtnLeft {
         transform: scaleX(1);
         margin-right: 8px;
      }
   }
`;

export const Loader = styled.div`
   width: 298px;
   height: 10px;
   background: var(--bg-disabled);
   border-radius: 5px;
   margin-top: 26px;

   div {
      width: 100px;
      height: 10px;
      border-radius: 5px;
      background: var(--white);
   }
`;

export const PlayerImage = styled.img<{
   width: string;
   height: string;
   $isopen?: boolean;
}>`
   box-shadow: 0px 0px 20px var(--bg-shadow);
   border: 1px solid var(--shadow-light);
   border-radius: 8px;
   width: ${(props) => props.width};
   height: ${(props) => props.height};
   margin-left: ${(props) => props.$isopen && '16px'};
`;
