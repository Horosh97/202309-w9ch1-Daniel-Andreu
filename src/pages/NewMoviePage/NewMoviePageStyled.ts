import styled from "styled-components";

const NewMoviePageStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  margin-left: 16px;
  margin-right: 16px;

  .new-page {
    &__title {
      padding: 20px 0 0 0;
      margin-bottom: 20px;
      color: ${({ theme }) => theme.colors.mainColor};
      font-size: 1.8rem;
      text-align: center;
      text-transform: uppercase;
      text-shadow:
        0px 0px 5px #fff,
        0px 0px 7px #fff;
    }

    &__button {
      margin-top: 16px;
      margin-bottom: 16px;
      padding: 16px;
    }

    &__main {
      width: 100%;
    }
  }
`;
export default NewMoviePageStyled;
