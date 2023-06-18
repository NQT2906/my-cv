import { styled } from "styled-components";

export const ProgressWrapper = styled.div`
  position: relative;
  width: 200px;
`;

export const ProgressBackground = styled.div`
  position: absolute;
  height: 10px !important;
  width: 100%;

  background-color: var(--background-main-layout);
`;

export const ProgressPercent = styled.div<{ percent: number }>`
  position: absolute;
  height: 10px !important;
  width: ${(props) => `${props.percent}%`};

  background-color: var(--color-font-soft-dark);
`;
