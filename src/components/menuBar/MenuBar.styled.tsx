import styled from "styled-components";

export const Container = styled.div<{ $isExpanded?: boolean }>`
  ${({ theme: { colors, spaces }, $isExpanded }) => `  
    display: flex;
    flex-direction: column;
    width: ${$isExpanded ? "230px" : "74px"};
    height: 100%;
    border-right: 1px solid ${colors.borderGray};
    background: ${colors.lightGray};
    transition: width 1s ease-in-out;
    padding: ${spaces.mega};
    gap: ${spaces.kilo};
    box-sizing: border-box;
  `}
`;

export const LogoWrapper = styled.div`
  ${({ theme: { spaces, borderRadius } }) => `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${spaces.byte};
    box-sizing: border-box;
    border-radius: ${borderRadius};
    cursor: pointer;
    position: relative;
  `};
`;

export const Logo = styled.div<{ $isExpanded?: boolean }>`
  display: flex;
  align-items: center;
  height: fit-content;
  width: ${(props) => (props.$isExpanded ? "110px" : "0px")};
  transition: width 1s ease-in-out;
  overflow: hidden;
`;

export const IconContainer = styled.div<{ $isExpanded?: boolean }>`
  ${({ $isExpanded }) => `  
    display: flex;
    width: fit-content;
    height: min-content;
    position: relative;
    transition: transform 100ms ease;
    transform: ${$isExpanded ? "rotateZ(-180deg)" : "rotateZ(0deg)"};

    svg {
      width: 22px;
      height: 22px;

      path {
        stroke: colors.black;
      }
    }
  `}
`;
