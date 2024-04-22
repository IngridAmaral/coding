import styled from "styled-components";

export const RoadmapWrapper = styled.div`
  ${() => `
      display: grid;
      width: 100%;
      align-items: flex-start;
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
    width: 100%;
    margin: ${spaces.byte} 0;
  `}
`;

export const IconContainer = styled.div<{ $isOpen?: boolean }>`
  ${({ theme: { colors }, $isOpen }) => `  
    width: 15px;
    height: 15px;

    svg {
      width: 15px;
      height: 15px;
      transform: rotate(${$isOpen ? "90deg" : "0deg"});
      transition: all 400ms ease-in-out;
      
      path {
        fill: ${$isOpen ? colors.primary : "transparent"};
        stroke: ${colors.primary};
      }
    }
  `}
`;

/*
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
*/

export const PlanName = styled.div<{ $isOpen?: boolean }>`
  ${({ theme: { spaces, colors, borderRadius }, $isOpen }) => `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    color: ${colors.black};
    gap: ${spaces.byte};
    padding: ${spaces.byte} ${spaces.byte};
    width: 100%;
    border-bottom: 1px solid ${colors.borderGray};
    background: ${$isOpen ? colors.white : colors.lightGray};
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
    box-sizing: border-box;
    margin-top: ${spaces.kilo};
  `}
`;

export const CheckBoxesWrapper = styled.div<{ $isOpen?: boolean }>`
  ${({ theme: { spaces, colors }, $isOpen }) => `  
    display: flex;
    flex-direction: column;
    overflow: hidden;
    gap: ${spaces.byte};
    color: ${colors.black};
    max-height: ${$isOpen ? "700px" : "0px"};
    transition: all 400ms ease-in-out;
    box-sizing: border-box;
    margin-left: ${spaces.exa};
  `}
`;

export const CheckBoxWrapper = styled.label<{ $isOpen?: boolean }>`
  ${({ theme: { spaces, colors } }) => `  
    display: flex;
    gap: ${spaces.byte};
    color: ${colors.black};
    transition: all 400ms ease-in-out;
    box-sizing: border-box;
    cursor: pointer;

    &:last-of-type {
      margin-bottom: ${spaces.byte};
    }

    &:first-of-type {
      margin-top: ${spaces.byte};
    }
  `}
`;

/*
export const Step = styled.div<{ $status?: string; $isOpen?: boolean }>`
  ${({ theme: { spaces, colors, borderRadius }, $status, $isOpen }) => `
    display: flex;
    justify-content: flex-start;
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
  `}
`;
*/

export const Step = styled.div<{ $status?: string; $isOpen?: boolean }>`
  ${({ theme: { spaces, colors, borderRadius }, $isOpen }) => `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    color: ${colors.black};
    gap: ${spaces.byte};
    padding: ${spaces.bit} ${spaces.byte};
    background: ${$isOpen ? colors.white : "transparent"};
    border-radius: ${borderRadius};
    position: relative;
    box-sizing: border-box;
    text-align: center;
    height: fit-content;
    font-weight: ${$isOpen ? "bold" : "normal"};
    cursor: pointer;
    margin-left: ${spaces.mega};
    
    &:hover {
      background: ${colors.white};
      font-weight: bold;
    }
  `}
`;

export const CheckContainer = styled.div<{ $status?: string }>`
  ${({ theme: { colors }, $status }) => `  
    width: 15px;
    height: 15px;
    display: ${$status === "done" ? "inline-block" : "none"};

    svg {
      width: 15px;
      height: 15px;
      
      path {
        stroke: ${colors.green};
        stroke-width: 5;
      }
    }
  `}
`;
