import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkWrapper = styled(Link)<{ $isActive?: boolean }>`
  ${({ theme: { spaces, borderRadius, colors }, $isActive }) => ` 
    display: flex;
    align-items: center;
    height: 40px;
    gap: ${spaces.kilo};
    padding: ${spaces.byte};
    box-sizing: border-box;
    border-radius: ${borderRadius};
    cursor: pointer;
    background: ${$isActive ? colors.secondary : colors.lightGray};
    transition: all 500ms;

    #User,
    #Progress,
    #Devices,
    #Billing,
    #Contact {
      visibility: hidden;
      opacity: 0;
      transition: opacity 200ms;
    }

    &:hover {
      background: ${colors.secondary};

      #User,
      #Progress,
      #Devices,
      #Billing,
      #Contact {
        visibility: visible;
        opacity: 1;
      }
    }
  `}
`;

export const IconContainer = styled.div<{ $isActive?: boolean }>`
  ${({ theme: { colors }, $isActive }) => ` 
    width: fit-content;
    height: min-content;
    display: flex;
    transition: all 1s;
    position: relative;

    svg {
      width: 22px;
      height: 22px;

      path {
        transition: all 500ms;

        stroke: ${$isActive ? colors.primary : colors.black};
      }
    }
  `}
`;

export const ItemText = styled.div<{ $isActive?: boolean }>`
  ${({ theme: { colors }, $isActive }) => ` 
    font-weight: bold;
    transition: all 500ms;

    color: ${$isActive ? colors.primary : colors.black};
  `}
`;
