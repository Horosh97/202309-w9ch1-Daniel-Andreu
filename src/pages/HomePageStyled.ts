import styled from "styled-components";

const HomePageStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background-color: #22093b;

  .home-page {
    &__title {
      padding: 20px 0 0 0;
      color: #fff;
      font-size: 2.4rem;
      text-align: center;
    }
  }
`;
export default HomePageStyled;
