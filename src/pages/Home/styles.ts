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

   .secondTitle {
      margin-top: 27px;
      color: var(--white);
      font-size: 21px;
      font-weight: var(--light);
   }

   .containerTypeBar {
      margin-top: 29px;
   }
`;
