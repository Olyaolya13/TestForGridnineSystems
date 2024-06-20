import { FormControlLabel, Radio, ThemeProvider, createTheme } from '@mui/material';

interface RadioProps {
  onChange?: () => void;
  value?: string;
  label?: string;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#00a7cc'
    }
  }
});

const styles = {
  radio: {
    color: '#111',
    padding: '0 7px 0  0'
  }
};

export default function RadioBtn({ value, label, onChange }: RadioProps) {
  return (
    <ThemeProvider theme={theme}>
      <FormControlLabel
        value={value}
        control={<Radio />}
        label={label}
        onChange={onChange}
        sx={styles.radio}
      />
    </ThemeProvider>
  );
}
