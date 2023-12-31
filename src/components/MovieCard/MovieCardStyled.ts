import styled from "styled-components";

const MovieCardStyled = styled.article`
  display: flex;
  padding: 20px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 8px;

  .movie-container {
    &__image {
      border-radius: ${({ theme }) => theme.borderRadius};
      border: 7px solid ${({ theme }) => theme.colors.secondaryColor};
      width: 100%;
      height: auto;
      aspect-ratio: 2/3;
      object-fit: cover;
      max-width: 400px;
      min-height: auto;
    }

    &__title {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.mainColor};
    }

    &__director {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.secondaryColor};
    }

    &__question {
      padding-top: 16px;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.mainColor};
    }
  }
`;
export default MovieCardStyled;
