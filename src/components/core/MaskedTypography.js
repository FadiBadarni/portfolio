import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Colors from "utilities/Colors";

export const MaskedTypography = styled(Typography)`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
      45deg,
      ${Colors.aestheticSilver},
      ${Colors.aestheticSilver}
    ),
    linear-gradient(135deg, ${Colors.cultered}, ${Colors.darkPurple});
  background-blend-mode: screen, overlay;
`;
