import styled from "styled-components";

export const Container = styled.div`
  ${({ theme: { colors } }) => `
    display: flex;
    width: 100vw;
    height: 100vh;
    background: ${colors.secondary};
    color: ${colors.black};
  `}
`;

export const ChildrenWrapper = styled.div`
  ${({ theme: { spaces } }) => `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: ${spaces.tera};
    padding: ${spaces.giga} ${spaces.tera};
    box-sizing: border-box;
  `}
`;
