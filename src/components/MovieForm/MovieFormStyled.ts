import styled from "styled-components";

const MovieFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;

  .movie-form {
    &__block {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      padding: 5px;
    }

    &__label {
      color: ${({ theme }) => theme.colors.mainColor};
      font-size: 1.4rem;
      margin-bottom: 12px;
    }

    &__input {
      padding: 10px 0;
      color: ${({ theme }) => theme.colors.mainColor};
      font-size: 1.4rem;
      background-color: ${({ theme }) => theme.colors.secondaryColor};
      border-radius: ${({ theme }) => theme.borderRadius};
    }
  }
`;
export default MovieFormStyled;
