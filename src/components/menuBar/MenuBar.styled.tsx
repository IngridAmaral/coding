import styled from "styled-components";

export const Container = styled.div<{ $isExpanded?: boolean }>`
  ${({ theme: { colors, spaces }, $isExpanded }) => `  
    display: flex;
    flex-direction: column;
    min-width: ${$isExpanded ? "230px" : "74px"};
    height: 100%;
    border-right: 1px solid ${colors.borderGray};
    background: ${colors.lightGray};
    transition: min-width 500ms;
    padding: ${spaces.mega};
    gap: ${spaces.kilo};
    box-sizing: border-box;
  `}
`;

export const LogoWrapper = styled.div<{ $isExpanded?: boolean }>`
  ${({ theme: { spaces, borderRadius }, $isExpanded }) => `
    display: flex;
    align-items: center;
    justify-content: ${$isExpanded ? "space-between" : "center"};
    transition: width 1s;
    padding: ${spaces.byte};
    box-sizing: border-box;
    border-radius: ${borderRadius};
    cursor: pointer;
  `};
`;

export const Logo = styled.div<{ $isExpanded?: boolean }>`
  display: flex;
  align-items: center;
  height: fit-contet;
  width: ${(props) => (props.$isExpanded ? "110px" : "0px")};
  transition: width 1s;
  overflow: hidden;
`;

export const IconContainer = styled.div<{ $isActive?: boolean }>`
  ${({ theme: { colors }, $isActive }) => `  
    display: flex;
    width: fit-content;
    height: min-content;
    position: relative;
    transition: all 1s;

    svg {
      width: 22px;
      height: 22px;

      path {
        stroke: ${$isActive ? colors.primary : colors.black};
      }
    }
  `}
`;
