import styled from "styled-components";

const MovieCardStyled = styled.article`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 8px;

  .movie-container {
    &__image {
      border-radius: ${({ theme }) => theme.borderRadius};
      border: 5px solid #f00;
      width: 100%;
      height: auto;
      max-width: fit-content;
    }

    &__title {
      font-size: 1.8rem;
      color: #fff;
    }

    &__director {
      font-size: 1.2rem;
      color: #f00;
    }
  }
`;
export default MovieCardStyled;
