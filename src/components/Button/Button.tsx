import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  actionOnClick?: () => void;
  title: string;
  text: string;
}

const Button = ({
  title,
  text,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled
      type={"button"}
      onClick={actionOnClick}
      title={title}
      children={text}
    />
  );
};

export default Button;
