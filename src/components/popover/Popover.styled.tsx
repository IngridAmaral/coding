import styled from "styled-components";

export enum CaretPosition {
  left = 30,
  center = 50,
  right = 80,
}

export enum Align {
  left = 30,
  center = 50,
  right = 80,
}

export const Container = styled.div<{
  $align: keyof typeof Align;
  $caretPosition: keyof typeof CaretPosition;
  $top: number;
}>`
  ${({
    theme: { spaces, borderRadius, colors },
    $align,
    $caretPosition,
    $top,
  }) => `
    position: absolute;
    color: white;
    font-size: 12px;
    width: fit-content;
    text-wrap: nowrap;
    padding: ${spaces.bit} ${spaces.byte};
    background: ${colors.primary};
    border-radius: ${borderRadius};
    left: ${Align[$align]}%;
    transform: translate(-50%, -50%);
    top: -${$top}%;

    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: ${CaretPosition[$caretPosition]}%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: ${colors.primary} transparent transparent transparent;
    }
  `}
`;
