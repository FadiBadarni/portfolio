import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const EmorphedBox = styled(Box)`
  position: relative;
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.01) 100%
  );

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.07)
    );
    -webkit-mask: linear-gradient(black, black) content-box,
      linear-gradient(black, black);
    -webkit-mask-composite: xor;
    pointer-events: none;
    user-select: none;
  }
`;
