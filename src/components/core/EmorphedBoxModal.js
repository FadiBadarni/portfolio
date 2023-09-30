import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const EmorphedBoxModal = styled(Box)`
  padding: 32px;
  border-radius: 24px;
  background: linear-gradient(rgba(37, 34, 39, 0.98) 0%, rgb(60, 52, 66) 100%);
  overflow-y: hidden;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-height: 80%;

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
      rgba(184, 93, 245, 0.7),
      rgba(240, 240, 240, 0.7)
    );
    -webkit-mask: linear-gradient(black, black) content-box,
      linear-gradient(black, black);
    -webkit-mask-composite: xor;
    pointer-events: none;
    user-select: none;
  }
`;
