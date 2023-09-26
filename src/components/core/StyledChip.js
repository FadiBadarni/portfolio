import styled from "@emotion/styled";
import { Chip } from "@mui/material";
import Colors from "utilities/Colors";

export const StyledChip = styled(Chip)`
  background: linear-gradient(
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  background-blend-mode: screen, overlay;
  color: ${Colors.cultered};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  cursor: default;

  &:hover {
    box-shadow: 0 3px 6px rgba(255, 255, 255, 0.42);
    transform: translateY(-2px);
  }

  .MuiChip-label {
    transition: color 0.3s ease-in-out;
  }

  &:hover .MuiChip-label {
    color: ${Colors.cultered};
  }
`;
