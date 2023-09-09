import styled from 'styled-components';

export const Container = styled.div`
   width: 317px;
   height: 36px;
   background: #00000033;
   border-radius: 18px;
   opacity: 1;
   border: none;
   display: flex;
   align-items: center;
   justify-content: space-between;

   .searchIcon {
      margin-left: 13px;
   }

   .separator {
      display: flex;
   }
`;

export const Input = styled.input`
   margin-left: 10px;
   border: none;
   background: transparent;
   color: var(--white);

   &:focus {
      outline: none;
   }

   &::placeholder {
      color: var(--white);
      font-size: 14px;
      font-weight: var(--light);
   }
`;

export const ButtonClear = styled.button`
   background: transparent;
   border: none;
   display: flex;
   justify-content: center;
   margin-right: 12.5px;

   &:hover {
      opacity: 0.8;
   }
`;
