import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  actionOnClick?: () => void;
  text: string;
  type: "button" | "submit";
  className?: string;
}

const Button = ({
  type,
  text,
  className,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled
      className={className}
      type={type}
      onClick={actionOnClick}
      children={text}
    />
  );
};

export default Button;
