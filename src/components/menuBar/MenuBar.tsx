import { useState } from "react";
import { Container, IconContainer, Logo, LogoWrapper } from "./MenuBar.styled";
import { ArrowRight, Billing, Contact, Devices, Progress, User } from "@icons";
import Item from "./item/Item";

const icons = [
  { name: "User", icon: <User />, link: "/user" },
  { name: "Devices", icon: <Devices />, link: "/devices" },
  { name: "Progress", icon: <Progress />, link: "/progress" },
  { name: "Billing", icon: <Billing />, link: "/billing" },
  { name: "Contact", icon: <Contact />, link: "/contact" },
];

const MenuBar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState("User");

  return (
    <Container $isExpanded={isExpanded}>
      <LogoWrapper $isExpanded={isExpanded}>
        <Logo $isExpanded={isExpanded}>
          <img
            src="https://assets-global.website-files.com/64089d5ecfeb0c6fbf31087b/65761b6fae4a910bcfa95a6c_FormlyAI-_5_.webp"
            loading="lazy"
            sizes="101.8046875px"
            srcSet="https://assets-global.website-files.com/64089d5ecfeb0c6fbf31087b/65761b6fae4a910bcfa95a6c_FormlyAI-_5_-p-500.webp 500w, https://assets-global.website-files.com/64089d5ecfeb0c6fbf31087b/65761b6fae4a910bcfa95a6c_FormlyAI-_5_-p-800.webp 800w, https://assets-global.website-files.com/64089d5ecfeb0c6fbf31087b/65761b6fae4a910bcfa95a6c_FormlyAI-_5_-p-1080.webp 1080w, https://assets-global.website-files.com/64089d5ecfeb0c6fbf31087b/65761b6fae4a910bcfa95a6c_FormlyAI-_5_.webp 4136w"
            alt="Logo"
          />
        </Logo>
        <IconContainer
          $isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <ArrowRight />
        </IconContainer>
      </LogoWrapper>
      {icons.map((item) => (
        <Item
          item={item}
          onClick={() => setActiveItem(item.name)}
          isActive={activeItem === item.name}
          isExpanded={isExpanded}
        />
      ))}
    </Container>
  );
};

export default MenuBar;
