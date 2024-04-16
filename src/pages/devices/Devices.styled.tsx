import styled from "styled-components";

export const DevicesWrapper = styled.div`
  ${({ theme: { spaces } }) => `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${spaces.giga};
    width: 100%;
  `}
`;

export const IconWrapper = styled.div`
  width: fit-content;
  height: min-content;
  display: flex;

  svg {
    width: 32px;
    height: 32px;

    path {
      transition: all 500ms;
      stroke: white;
    }
  }
`;

export const AddDevice = styled.div`
  ${({ theme: { borderRadius, spaces, colors } }) => `
    display: flex;
    align-items: center;
    align-self: flex-end;
    gap: ${spaces.byte};
    width: fit-content;
    padding: ${spaces.byte};
    font-weight: bold;
    border-radius: ${borderRadius};
    cursor: pointer;
    background: ${colors.green};
    color: ${colors.white};
    transition: 0.2s all;

    &:active {
      transform: scale(0.98);
    }
  `}
`;
