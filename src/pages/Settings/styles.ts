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
`;

export const CardSettings = styled.div`
  background-color: var(--bg-blue-dark);
  border-radius: 6px;
  height: 233px;
  margin-top: 100px;
  padding: 16px 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
