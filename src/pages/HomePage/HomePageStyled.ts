import styled from "styled-components";

const HomePageStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  align-items: center;

  .home-page {
    &__title {
      padding: 20px 0 0 0;
      margin-bottom: 8px;
      margin-top: 20px;
      color: ${({ theme }) => theme.colors.mainColor};
      font-size: 2.4rem;
      text-align: center;
      text-transform: uppercase;
      animation: blur 0.75s ease-out infinite;
      text-shadow:
        0px 0px 5px ${({ theme }) => theme.colors.mainColor},
        0px 0px 7px ${({ theme }) => theme.colors.mainColor};
    }

    &__subtitle {
      padding: 20px 0 0 0;
      margin-bottom: 20px;
      color: ${({ theme }) => theme.colors.mainColor};
      font-size: 1rem;
      text-align: center;
      text-transform: uppercase;
      text-shadow:
        0px 0px 5px ${({ theme }) => theme.colors.mainColor},
        0px 0px 7px ${({ theme }) => theme.colors.mainColor};
    }

    &__button {
      margin-top: 16px;
      margin-bottom: 16px;
      padding: 16px;
    }
  }

  .watched-class {
    text-shadow:
      0px 0px 22px ${({ theme }) => theme.colors.mainColor},
      0px 0px 23px ${({ theme }) => theme.colors.secondaryColor};
  }

  @keyframes blur {
    from {
      text-shadow:
        0px 0px 10px #fff,
        0px 0px 10px #fff,
        0px 0px 25px #fff,
        0px 0px 25px #fff,
        0px 0px 25px #fff,
        0px 0px 25px #fff,
        0px 0px 25px #fff,
        0px 0px 25px #fff,
        0px 0px 50px #fff,
        0px 0px 50px #fff,
        0px 0px 50px #7b96b8,
        0px 0px 150px #7b96b8,
        0px 10px 100px #7b96b8,
        0px 10px 100px #7b96b8,
        0px 10px 100px #7b96b8,
        0px 10px 100px #7b96b8,
        0px -10px 100px #7b96b8,
        0px -10px 100px #7b96b8;
    }
  }
`;
export default HomePageStyled;
