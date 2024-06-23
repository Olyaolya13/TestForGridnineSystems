import { Typography, Button } from '@mui/material';
import { SubmitBtnProps } from '../../../../types/types';

const styles = {
  container: {
    borderRadius: '8px',
    padding: '0',
    height: '40px',
    backgroundColor: '#111',
    color: '#EDEEEE',
    '&:hover': {
      backgroundColor: '#222',
      opacity: '0.9'
    },
    '&:focus': {
      backgroundColor: '#222'
    }
  },
  title: {
    fontFamily: 'Benzin',
    fontSize: '14px'
  }
};

export default function SubmitBtn({
  title,
  width = '170px',
  disabled = false,
  margin = '10px',
  onClick
}: SubmitBtnProps) {
  return (
    <Button
      type="submit"
      variant="contained"
      disableElevation
      sx={{
        ...styles.container,
        width,
        margin
      }}
      disabled={disabled}
      onClick={onClick}
    >
      <Typography variant="h2" sx={styles.title}>
        {title}
      </Typography>
    </Button>
  );
}
