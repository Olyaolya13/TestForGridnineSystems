import { Box, Typography } from '@mui/material';
import { format, parseISO } from 'date-fns';
import { ru as ruLocale } from 'date-fns/locale';

interface DateTimeProps {
  departureDate: string;
  arrivalDate: string;
}

export default function DateTimeComponent({ departureDate, arrivalDate }: DateTimeProps) {
  const startDate = parseISO(departureDate);
  const endDate = parseISO(arrivalDate);

  const startFormatTime = format(startDate, 'HH:mm');
  const endFormatTime = format(endDate, 'HH:mm');

  const startFormatDate = format(startDate, 'dd MMM E', { locale: ruLocale });
  const endFormatDate = format(endDate, 'dd MMM E', { locale: ruLocale });

  return (
    <Box>
      <Typography variant="h2" sx={{ fontSize: '14px', paddingTop: '10px', color: '#00a7cc' }}>
        {startFormatTime} <span style={{ color: '#111' }}>{startFormatDate} - </span>
        <span style={{ color: '#111' }}>{endFormatDate} </span>
        {endFormatTime}
      </Typography>
    </Box>
  );
}
