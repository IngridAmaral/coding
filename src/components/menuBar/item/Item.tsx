import { IconContainer, ItemText, LinkWrapper } from "./Item.styled";
import Popover from "../../popover/Popover";

type Item = {
  name: string;
  icon: JSX.Element;
  link: string;
};

const Item = ({
  item,
  onClick,
  isActive,
  isExpanded,
}: {
  item: Item;
  onClick: () => void;
  isActive: boolean;
  isExpanded: boolean;
}) => (
  <LinkWrapper
    to={item.link}
    onClick={onClick}
    $isExpanded={isExpanded}
    $isActive={isActive}
  >
    <IconContainer $isActive={isActive}>
      {item.icon}
      {!isExpanded && (
        <Popover text={item.name} id={item.name} top={100} align="right" />
      )}
    </IconContainer>

    <ItemText $isActive={isActive}>{item.name}</ItemText>
  </LinkWrapper>
);
export default Item;
