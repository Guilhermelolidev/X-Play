import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   .containerTypeBar {
      margin-top: 23px;
   }

   .containerMusicBox {
      margin-top: 33px;
      display: flex;
      flex-direction: column;
      max-height: 600px;
      overflow: hidden;

      .cardMusicBox {
         & + div {
            margin-top: 5px;
         }
      }
   }
`;
