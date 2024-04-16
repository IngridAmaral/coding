import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  ${({ theme: { spaces, colors } }) => ` 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${spaces.kilo};
  font-weight: bold;
  color: ${colors.primary};
  width: 100%;
  height: 100%;
  `}
`;

const rotate = keyframes`
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
`;

const Animation = styled.div`
  animation: ${rotate} 1500ms linear infinite;
`;

export const IconContainer = styled(Animation)`
  ${({ theme }) => `  
    width: 80px;
    height: 80px;

    svg {
      width: 80px;
      height: 80px;

      path {
        stroke: ${theme.colors.primary};
      }
    }
  `}
`;
