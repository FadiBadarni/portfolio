import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { rootShouldForwardProp } from "@mui/material/styles/styled";

export const EmorphedBoxVariant = styled(Box, {
  shouldForwardProp: (prop) =>
    rootShouldForwardProp(prop) && prop !== "isActive",
})`
  padding: 12px;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease-in-out;

  left: ${(props) => (props.isActive ? "10%" : "0%")};

  background: ${(props) =>
    props.isActive
      ? "linear-gradient(rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.15) 100%)"
      : "linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)"};

  &:hover {
    opacity: 0.7;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(
      rgba(255, 255, 255, 0.12),
      rgba(255, 255, 255, 0.08)
    );
    -webkit-mask: linear-gradient(black, black) content-box,
      linear-gradient(black, black);
    -webkit-mask-composite: xor;
    pointer-events: none;
    user-select: none;
  }
`;
