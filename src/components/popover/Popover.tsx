import { Align, CaretPosition, Container } from "./Popover.styled";

const Popover = ({
  text,
  align = "center",
  caretPosition = "center",
  id,
  top = 50,
}: {
  text: string;
  top?: number;
  align?: keyof typeof Align;
  id: string;
  caretPosition?: keyof typeof CaretPosition;
}) => {
  return (
    <Container id={id} $align={align} $caretPosition={caretPosition} $top={top}>
      {text}
    </Container>
  );
};

export default Popover;
