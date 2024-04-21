import styled from "styled-components";

export const RoadmapWrapper = styled.div`
  ${({ theme: { spaces } }) => `
        display: grid;
        width: 100%;
        align-items: flex-start;
        gap: ${spaces.byte};
        overflow: scroll;
    `}
`;

export const Plan = styled.div`
  ${({ theme: { spaces, colors } }) => `
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 14px;
    color: ${colors.white};
    gap: ${spaces.byte};
    width: 100%;
  `}
`;

export const IconContainer = styled.div<{ $isOpen?: boolean }>`
  ${({ theme: { colors }, $isOpen }) => `  
    width: 20px;
    height: 20px;

    svg {
      width: 20px;
      height: 20px;
      transform: rotate(${$isOpen ? "90deg" : "0deg"});
      transition: all 400ms ease-in-out;
      
      path {
        fill: ${$isOpen ? colors.primary : "transparent"};
        stroke: ${colors.primary};
      }
    }
  `}
`;

export const PlanName = styled.div<{ $isOpen?: boolean }>`
  ${({ theme: { spaces, colors, borderRadius }, $isOpen }) => `
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: ${colors.black};
    //gap: ${spaces.byte};
    padding: ${spaces.byte} ${spaces.mega};
    width: 100%;
    border: 1px solid ${colors.primary};
    background: ${colors.lightGray};
    border-radius: ${borderRadius};
    position: relative;
    box-sizing: border-box;
    text-align: center;
    height: fit-content;
    font-weight: ${$isOpen ? "bold" : "normal"};

    cursor: pointer;

    &:hover {
      background: ${colors.white};
      font-weight: bold;

      svg {
        path {
          stroke: ${colors.primary};
          fill: ${colors.primary};
        }
      }
    }
  `}
`;

export const StepsWrapper = styled.div<{ $isOpen?: boolean }>`
  ${({ theme: { spaces }, $isOpen }) => `  
    display: flex;
    flex-direction: column;
    overflow: hidden;
    gap: ${spaces.byte};
    max-height: ${$isOpen ? "700px" : "0px"};
    transition: all 400ms ease-in-out;
    //padding: ${$isOpen ? `${spaces.byte} 0` : "0px"};
    box-sizing: border-box;
  `}
`;

export const Step = styled.div<{ $status?: string; $isOpen?: boolean }>`
  ${({ theme: { spaces, colors, borderRadius }, $status, $isOpen }) => `
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: ${colors.black};
    gap: ${spaces.byte};
    background: ${$status === "done" ? colors.green : colors.white};
    position: relative;
    text-align: center;
    padding: ${spaces.byte} ${spaces.mega};
    box-sizing: border-box;
    margin-left: ${spaces.tera};
    border: 1px solid ${colors.primary};
    background: ${colors.lightGray};
    border-radius: ${borderRadius};
    cursor: pointer;
    font-weight: ${$isOpen ? "bold" : "normal"};
    
    &:hover {
      background: ${colors.white};
      font-weight: bold;

      svg {
        path {
          stroke: ${colors.primary};
          fill: ${colors.primary};
        }
      }
    }

    &:last-of-type {
      margin-bottom: ${spaces.mega};
    }

  `}
`;
