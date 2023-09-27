import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const EmorphedBoxVariant2 = styled(Box)`
  padding: 32px;
  border-radius: 24px;
  position: relative;
  background: linear-gradient(
    rgba(240, 240, 240, 0.1) 0%,
    rgba(240, 240, 240, 0.01) 100%
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
      rgba(240, 240, 240, 0.12),
      rgba(240, 240, 240, 0.08)
    );
    -webkit-mask: linear-gradient(black, black) content-box,
      linear-gradient(black, black);
    -webkit-mask-composite: xor;
    pointer-events: none;
    user-select: none;
  }
`;
