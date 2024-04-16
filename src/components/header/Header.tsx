import { IconContainer, LinkWrapper, Title } from "./Header.styled";
import { Back } from "@icons";

const Header = ({ title, goBackTo }: { title: string; goBackTo?: string }) => (
  <Title>
    {title}
    {goBackTo && (
      <LinkWrapper to="/devices">
        <IconContainer>
          <Back />
        </IconContainer>
        go back
      </LinkWrapper>
    )}
  </Title>
);

export default Header;
