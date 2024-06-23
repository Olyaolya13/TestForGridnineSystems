import { Typography } from '@mui/material';
import { titleSecondaryProps } from '../../../types/types';

const styles = {
  title: {
    fontFamily: 'Benzin',
    fontSize: '24px',
    letterSpacing: '0.02em',
    color: '#fff'
  }
};

export default function TitleSecondary({ title, margin, color, fontSize }: titleSecondaryProps) {
  return (
    <Typography
      component="h3"
      sx={{
        ...styles.title,
        margin: margin ? margin : '0',
        color: color || styles.title.color,
        fontSize: fontSize || styles.title.fontSize
      }}
    >
      {title}
    </Typography>
  );
}
