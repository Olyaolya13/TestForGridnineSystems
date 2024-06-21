import { ThemeProvider } from '@emotion/react';
import { Checkbox, createTheme } from '@mui/material';

interface CheckoxProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  label?: string;
  checked: boolean;
  name: string;
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

export default function CheckoxBtn({ onChange, checked, name }: CheckoxProps) {
  return (
    <ThemeProvider theme={theme}>
      <Checkbox
        disableRipple
        onChange={onChange}
        checked={checked}
        name={name}
        color="primary"
        sx={styles.checkbox}
      />
    </ThemeProvider>
  );
}
