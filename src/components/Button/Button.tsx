import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  actionOnClick?: () => void;
  text: string;
}

const Button = ({ text, actionOnClick }: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled type={"button"} onClick={actionOnClick} children={text} />
  );
};

export default Button;
