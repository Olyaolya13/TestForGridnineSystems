import { Box, Typography } from '@mui/material';
import { MainProps } from '../../../types/types';

export default function Title({ flight }: MainProps) {
  const ruble = flight.price.total.currency === 'руб.' ? '₽' : flight.price.total.currency;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#00a7cc',
        width: '100%',
        padding: '20px 20px 5px 20px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant="h1" sx={{ color: '#fff' }}>
          {flight.carrier.caption}
        </Typography>

        <Typography variant="h1" sx={{ color: '#fff' }}>
          {flight.price.total.amount} {ruble}
        </Typography>
      </Box>
      <Typography variant="h3" sx={{ color: '#fff', textAlign: 'end', marginTop: '5px' }}>
        Стоимость для одного взрослого пассажира
      </Typography>
    </Box>
  );
}
