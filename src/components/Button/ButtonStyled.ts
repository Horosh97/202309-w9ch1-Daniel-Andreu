import styled from "styled-components";

const ButtonStyled = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mainColor};
  font-weight: bold;
  font-size: 1.3rem;
`;

export default ButtonStyled;
