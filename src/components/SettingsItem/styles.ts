import styled from 'styled-components';

export const Card = styled.div`
  background-color: var(--bg-blue-dark);
  border-radius: 6px;
  height: 233px;
  margin-top: 100px;
  padding: 16px 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 373px;
  height: 24px;

  .textItem {
    color: var(--white);
    font-size: 14px;
    font-weight: var(--regular);
  }
`;
