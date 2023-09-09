import styled from 'styled-components';

export const Container = styled.div`
   background: var(--bg-gray-light);
   border-radius: 18px;
`;

export const Button = styled.button<{ $backgroundcolor?: string }>`
   border: none;
   background: ${(props) => props.$backgroundcolor};
   border-radius: 18px;
   font-size: 14px;
   font-weight: var(--light);
   color: var(--white);
   padding: 10px 11px;
`;
