import styled from "styled-components";

export const RoadmapWrapper = styled.div`
  ${({ theme: { spaces } }) => `
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        width: 100%;
        align-items: flex-start;
        gap: ${spaces.byte};
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

export const PlanName = styled.div`
  ${({ theme: { spaces, colors } }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: ${colors.white};
    gap: ${spaces.byte};
    padding: ${spaces.bit} ${spaces.mega};
    width: 100%;
    background: ${colors.green};
    position: relative;
    box-sizing: border-box;
    text-align: center;
    height: fit-content;
    
    &::before {
        content: '';
        border-left: 14px solid ${colors.secondary};
        border-top: 14px solid transparent;
        border-bottom: 14px solid transparent;
        position: absolute;
        top: 0;
        left: 0;
    }

    &::after {
        content: '';
        border-left: 14px solid ${colors.green};
        border-top: 14px solid transparent;
        border-bottom: 14px solid transparent;
        position: absolute;
        top: 0;
        left: 100%;
        z-index: 20;
    }

    @media (max-width: 1270px) {
        height: 50px;
        padding: ${spaces.bytet};
        padding-left: calc(${spaces.bit} + 25px);

        &::before {
            content: '';
            border-left: 25px solid ${colors.secondary};
            border-top: 25px solid transparent;
            border-bottom: 25px solid transparent;
            position: absolute;
            top: 0;
            left: 0;
        }

        &::after {
            content: '';
            border-left: 25px solid ${colors.green};
            border-top: 25px solid transparent;
            border-bottom: 25px solid transparent;
            position: absolute;
            top: 0;
            left: 100%;
            z-index: 20;
        }
    }
  `}
`;

export const Step = styled.div<{ $status?: string }>`
  ${({ theme: { spaces, colors }, $status }) => `
    display: flex;
    justify-content: center;
    font-size: 14px;
    color: ${$status === "done" ? colors.white : colors.black};
    gap: ${spaces.byte};
    width: 100%;
    background: ${$status === "done" ? colors.green : colors.white};
    position: relative;
    margin-right: ${spaces.bit};
    min-height: 70px;
    text-align: center;
    padding: ${spaces.byte};
    box-sizing: border-box;
  `}
`;
