import { Box, Typography } from '@mui/material';
import { MainProps } from '../../../types/types';

const styles = {
  container: { marginTop: '10px' },
  title: { marginTop: '7px' }
};

export default function MainAdditionalServices({ flight }: MainProps) {
  return (
    <Box sx={styles.container}>
      <Typography variant="h4" sx={{ ...styles.title, marginTop: 0 }}>
        Баггаж: {flight.servicesStatuses.baggage.caption}
      </Typography>
      <Typography variant="h4" sx={styles.title}>
        Обмен билета: {flight.servicesStatuses.exchange.caption}
      </Typography>
      <Typography variant="h4" sx={styles.title}>
        Возврат денежных средств: {flight.servicesStatuses.refund.caption}
      </Typography>
    </Box>
  );
}
