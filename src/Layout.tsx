import { ReactNode } from "react";
import { ChildrenWrapper, Container } from "./Layout.styled";
import MenuBar from "./components/menuBar/MenuBar";

const Layout = ({ children }: { children?: ReactNode }) => (
  <Container>
    <MenuBar />
    <ChildrenWrapper>{children}</ChildrenWrapper>
  </Container>
);

export default Layout;
