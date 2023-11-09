import styled from "styled-components";

const NewMoviePageStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  .new-page {
    &__title {
      padding: 20px 0 0 0;
      color: ${({ theme }) => theme.colors.mainColor};
      font-size: 2.4rem;
      text-align: center;
    }
  }
`;
export default NewMoviePageStyled;
