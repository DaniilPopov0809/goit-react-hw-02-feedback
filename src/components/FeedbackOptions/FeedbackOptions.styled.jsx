import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;

  margin-bottom: 20px;

  list-style: none;
`;

export const ButtonItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const Button = styled.button`
  padding: 3px 5px;

  border: none;
  border-radius: 5px;

  background-color: ${props => props.theme.colors.bgcBtn};
  color: ${props => props.theme.colors.textColor};
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);

  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &:active {
    background-color: ${props => props.theme.colors.bgcBtnActive};
  }
  &:hover {
    scale: 1.1;
  }
  &:focus {
    outline: 1px solid ${props => props.theme.colors.textColor};
  }
`;
