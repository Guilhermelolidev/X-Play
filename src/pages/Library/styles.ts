import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   .title {
      color: var(--white);
      font-size: 21px;
      font-weight: var(--light);
   }

   .containerTypeBar {
      margin-top: 29px;
   }
`;

export const MusicBoxContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-gap: 8px;
   margin-top: 20px;
`;
