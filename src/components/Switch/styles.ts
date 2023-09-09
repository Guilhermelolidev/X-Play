import styled from 'styled-components';

export const SwitchStyled = styled.label<{ isDisabled: boolean }>`
  display: inline-block;
  position: relative;
  width: 46px;
  height: 24px;
  background-color: ${(props) =>
    props.isDisabled ? 'var(--bg-disabled)' : 'var(--bg-white-two)'};
  border-radius: 12px;
  cursor: pointer;
`;

export const Input = styled.input`
  display: none;
`;

export const Slider = styled.span<{ isDisabled: boolean }>`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 3px;
  left: 4px;
  border-radius: 9px;
  background-color: ${(props) =>
    props.isDisabled ? 'var(--bg-shade)' : 'var(--bcx-green)'};
  transform: ${(props) =>
    props.isDisabled ? 'translateX(20px)' : 'translateX(0)'};
  transition: transform 0.2s;
`;
