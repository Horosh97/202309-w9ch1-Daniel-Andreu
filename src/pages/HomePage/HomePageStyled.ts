import styled from "styled-components";

const HomePageStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};

  .home-page {
    &__title {
      padding: 20px 0 0 0;
      color: ${({ theme }) => theme.colors.mainColor};
      font-size: 2.4rem;
      text-align: center;
    }

    &__button {
      padding: 20px;
    }
  }
`;
export default HomePageStyled;
