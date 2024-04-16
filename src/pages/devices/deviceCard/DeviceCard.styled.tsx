import styled from "styled-components";

export const Device = styled.div<{ $progress: number }>`
  ${({ theme: { borderRadius, spaces, colors }, $progress }) => `
  background: ${colors.lightGray};
  width: 100%;
  border-radius: ${borderRadius};
  padding: ${spaces.kilo};
  padding-bottom: ${spaces.giga};
  box-sizing: border-box;
  border: 1px solid ${colors.borderGray};
  position: relative;

  &::before {
    content: " ";
    position: absolute;
    width: 100%;
    height: 10px;
    left: 0;
    bottom: 0;
    background: ${colors.borderGray};
    border-bottom-left-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};
  }

  &::after {
    content: " ";
    position: absolute;
    width: ${$progress}%;
    height: 10px;
    left: 0;
    bottom: 0;
    background: ${colors.green};
    border-bottom-left-radius: ${borderRadius};
    border-bottom-right-radius: ${$progress === 100 ? borderRadius : "0px"};
  }
  `};
`;

export const IconWrapper = styled.div`
  ${({ theme: { colors } }) => `
    width: fit-content;
    height: min-content;
    display: flex;

    svg {
      width: 32px;
      height: 32px;

      path {
        transition: all 500ms;
        stroke: ${colors.white};
      }
    }
  `}
`;

export const IntercationsIcon = styled.div`
  ${({ theme: { borderRadius, spaces, colors } }) => `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${spaces.kilo};
    position: relative;
    padding: ${spaces.byte};
    height: 40px;
    border-radius: ${borderRadius};
    cursor: pointer;
    box-sizing: border-box;
    transition: all 500ms;

    svg {
      width: 18px;
      height: 18px;

      path {
        transition: all 500ms;
        stroke: black;
      }
    }

    #road-map,
    #edit {
      visibility: hidden;
      opacity: 0;
      transition: opacity 200ms;
    }

    &:hover {
      background: ${colors.secondary};

      #road-map,
      #edit {
        visibility: visible;
        opacity: 1;
      }

      svg path {
        stroke: ${colors.primary};
      }
    }
  `}
`;

export const TextWrapper = styled.div``;

export const DeviceKey = styled.span`
  font-weight: bold;
`;
export const DeviceValue = styled.span``;

export const LeftInteractions = styled.div`
  ${({ theme: { spaces } }) => `
    display: flex;
    width: fit-content;
    align-items: center;
    position: absolute;
    gap: ${spaces.byte};
    top: 10px;
    right: 10px;
  `}
`;

export const CheckProgress = styled.div`
  ${({ theme: { borderRadius, spaces, colors } }) => `
    width: fit-content;
    display: flex;
    align-items: center;
    align-self: flex-end;
    gap: ${spaces.byte};
    padding: ${spaces.byte};
    font-weight: bold;
    border-radius: ${borderRadius};
    cursor: pointer;
    color: ${colors.black};
    transition: 0.2s all;
  `}
`;
