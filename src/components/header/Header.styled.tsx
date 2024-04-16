import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.div`
  ${({ theme }) => ` 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 32px;
    gap: ${theme.spaces.kilo};
    line-height: normal;
  `}
`;

export const LinkWrapper = styled(Link)`
  ${({ theme: { spaces, colors, borderRadius } }) => `  
    display: flex;
    align-items: center;
    gap: ${spaces.bit};
    cursor: pointer;
    color: ${colors.primary};
    width: fit-content;
    padding: ${spaces.byte};
    border-radius: ${borderRadius};
    background: ${colors.white};
    border: 1px solid ${colors.white};
    font-size: 12px;

    &:hover {
      border: 1px solid ${colors.borderGray};
      color: ${colors.primary};
    }
  `}
`;

export const IconContainer = styled.div`
  ${({ theme }) => `  
    display: flex;

    svg {
      width: 12px;
      height: 12px;

      path {
        stroke: ${theme.colors.primary};
      }
  }
  `}
`;
