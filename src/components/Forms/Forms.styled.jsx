import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

export const FormStyled = styled(Form)`
  width: 600px;
  height: ${({ name, theme }) => theme.height[name]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 10px;
  box-shadow: 5px 5px 10px black;

  & label {
    font-weight: bold;
    position: relative;
    width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
  }
`;

export const FieldStyled = styled(Field)`
  width: 80%;
  height: 30px;
  padding: 1px 5px;
  font-size: 100%;
  font-weight: inherit;
  border-radius: 5px;
`;

export const ErrorMsgStyled = styled(ErrorMessage)`
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  width: 100%;
  text-align: center;
  padding: 2px 10px;
  color: #9a0c0c;
  background-color: #ffffff8b;
  font-size: 12px;
  border-radius: 5px;
`;

export const BtnForm = styled.button`
  width: 90%;
  height: 40px;
  font-size: inherit;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 3px 3px 10px #000000be;
  outline: none;
  transition: all 200ms;
  &:hover {
    background-color: #02f7f7;
    scale: 1.03;
  }
  &:active {
    scale: 1.01;
  }
`;
