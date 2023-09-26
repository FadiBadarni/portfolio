import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Colors from "utilities/Colors";

export const MaskedButton = styled(Button)`
  text-transform: none;
  background: linear-gradient(
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  background-blend-mode: screen, overlay;
  color: ${Colors.cultered};
  transition: color 0.3s ease, text-shadow 0.3s ease, opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
    background: linear-gradient(
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
    color: ${Colors.white};
    text-shadow: 0 0 8px ${Colors.white};
  }

  .MuiButton-label {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
