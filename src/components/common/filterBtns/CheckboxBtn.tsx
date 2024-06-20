import { ThemeProvider } from '@emotion/react';
import { Checkbox, createTheme } from '@mui/material';

interface CheckoxProps {
  onChange?: () => void;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#00a7cc'
    }
  }
});

const styles = {
  checkbox: {
    padding: '0 7px 0  0'
  }
};

export default function CheckoxBtn({ onChange }: CheckoxProps) {
  return (
    <ThemeProvider theme={theme}>
      <Checkbox disableRipple onChange={onChange} color="primary" sx={styles.checkbox} />
    </ThemeProvider>
  );
}
