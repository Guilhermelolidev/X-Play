import styled from 'styled-components';

export const Card = styled.div<{ width: string }>`
   background-color: var(--bg-blue-dark);
   border-radius: 6px;
   opacity: 1;
   display: flex;
   align-items: center;
   cursor: pointer;
   width: ${(props) => props.width};
   height: 48px;
   padding-right: 10px;
   position: relative;

   img {
      width: 48px;
      height: 100%;
   }

   transition: filter 0.2s;

   &:hover {
      background-color: var(--bg-blue);
      filter: brightness(0.9);
   }

   .containerInfo {
      margin-left: 8px;

      .text {
         font-size: 11px;
         color: var(--white);
         font-weight: var(--regular);
      }

      .tipo {
         font-size: 11px;
         font-weight: var(--light);
         color: var(--white);
         margin-top: 3px;
      }
   }

   .chevron {
      color: #ffffff;
      position: absolute;
      right: 10px;
   }
`;
