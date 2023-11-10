import styled from "styled-components";

const ButtonStyled = styled.button`
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;
  background-color: transparent;
  border: 4px solid ${({ theme }) => theme.colors.secondaryColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
  color: ${({ theme }) => theme.colors.secondaryColor};

  &:hover {
    box-shadow:
      0 0 10px 0 ${({ theme }) => theme.colors.secondaryColor} inset,
      0 0 20px 2px ${({ theme }) => theme.colors.secondaryColor};
  }
`;

export default ButtonStyled;
