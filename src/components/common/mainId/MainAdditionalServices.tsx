import { Box, Typography } from '@mui/material';
import { MainProps } from '../../../types/types';

export default function MainAdditionalServices({ flight }: MainProps) {
  return (
    <Box>
      <Typography variant="h3" sx={{ fontSize: '16px' }}>
        {`Баггаж: ${flight.servicesStatuses.baggage.caption}`}
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontSize: '16px' }}
      >{`Обмен билета: ${flight.servicesStatuses.exchange.caption}`}</Typography>
      <Typography
        variant="h3"
        sx={{ fontSize: '16px' }}
      >{`Возврат денежных средств: ${flight.servicesStatuses.refund.caption}`}</Typography>
    </Box>
  );
}
