import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import Colors from "utilities/Colors";

export const MaskedTextField = styled(TextField)`
  label.Mui-focused {
    color: ${Colors.cultered};
  }
  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: ${Colors.cultered};
    }
  }
  .MuiFormLabel-root {
    color: ${Colors.cultered};
  }
  .MuiInputBase-root {
    color: ${Colors.cultered};
  }
  background: linear-gradient(
    rgba(240, 240, 240, 0.12),
    rgba(240, 240, 240, 0.08)
  );
  border-radius: 5px;
`;
