import styled from 'styled-components';

export const ScreenStyled = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   background: transparent
      linear-gradient(180deg, var(--bg-shade) 0%, var(--bg-shade-004082) 100%)
      0% 0%;
   background: transparent linear-gradient(180deg, #006a71 0%, #004082 100%) 0%
      0%;
   opacity: 1;
   width: 430px;
   height: 100vh;
   position: relative;
`;

export const Body = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   .logo {
      margin-top: 10px;
   }
`;

export const Content = styled.div`
   display: flex;
   margin-top: 31px;
`;

export const AppBarContainer = styled.div`
   background-color: var(--bg-blue);
   height: 92px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   padding-left: 32px;
   padding-right: 32px;
`;
