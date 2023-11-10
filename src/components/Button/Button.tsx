import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  actionOnClick?: () => void;
  text: string;
  type: "button" | "submit";
}

const Button = ({
  type,
  text,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return <ButtonStyled type={type} onClick={actionOnClick} children={text} />;
};

export default Button;
