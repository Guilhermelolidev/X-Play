import styled from 'styled-components';

export const Card = styled.div`
  background-color: var(--bg-blue-dark);
  border-radius: 6px;
  opacity: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 196px;
  height: 48px;

  img {
    width: 48px;
    height: 100%;
  }

  p {
    font-size: 11px;
    color: var(--white);
    font-weight: var(--regular);
    margin-left: 8px;
  }

  transition: filter 0.2s;

  &:hover {
    background-color: var(--bg-blue);
    filter: brightness(0.9);
  }
`;
