import { Box, Typography } from '@mui/material';
import { MainProps } from '../../../types/types';
import DateTimeComponent from '../dateTimeComponent/DateTimeComponent';

const styles = {
  containerTitle: { display: 'flex', justifyContent: 'center', marginTop: '10px' },
  title: { fontSize: '14px' },
  dateTimeContainer: { display: 'flex', justifyContent: 'center', margin: '10px' },
  totalTime: {
    fontSize: '14px',
    paddingTop: '10px',
    textAlign: 'center',
    marginBottom: '10px',
    color: 'grey'
  },
  transfer: {
    fontSize: '16px',
    color: '#b39b00',
    display: 'flex',
    alignItems: 'center',
    '&::before, &::after': {
      content: '""',
      flex: 1,
      borderBottom: '1px solid #b39b00',
      margin: '20px 0'
    }
  }
};

const getTimeFromMins = (mins: number) => {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  return `${hours}ч. ${minutes}м.`;
};

export default function MainDateTime({ flight }: MainProps) {
  return (
    <Box>
      {flight.legs.map((leg, index) => (
        <Box key={index}>
          <Box sx={styles.containerTitle}>
            <Typography variant="h2" sx={styles.title}>
              {leg.segments[0].departureAirport.caption}&nbsp;
            </Typography>
            <Typography variant="h2" sx={{ ...styles.title, color: '#00a7cc' }}>
              ({leg.segments[0].departureAirport.uid}) - &nbsp;
            </Typography>
            <Typography variant="h2" sx={styles.title}>
              {leg.segments[leg.segments.length - 1].arrivalAirport.caption}&nbsp;
            </Typography>
            <Typography variant="h2" sx={{ ...styles.title, color: '#00a7cc' }}>
              ({leg.segments[leg.segments.length - 1].arrivalAirport.uid})
            </Typography>
          </Box>
          <Box sx={styles.dateTimeContainer}>
            <DateTimeComponent
              departureDate={leg.segments[0].departureDate}
              arrivalDate={leg.segments[leg.segments.length - 1].arrivalDate}
            />
          </Box>
          <Typography variant="h2" sx={styles.totalTime}>
            Общее время: {getTimeFromMins(leg.duration)}
          </Typography>
          <Box>
            {leg.segments.length > 1 ? (
              <Typography variant="h3" sx={styles.transfer}>
                {leg.segments.length - 1} пересад{leg.segments.length - 1 === 1 ? 'ка' : 'ки'}
              </Typography>
            ) : (
              <Typography
                variant="h3"
                sx={{
                  ...styles.transfer,
                  color: '#00c298',
                  '&::before, &::after': {
                    content: '""',
                    flex: 1,
                    borderBottom: '1px solid #00c298',
                    margin: '20px 0'
                  }
                }}
              >
                Прямой рейс
              </Typography>
            )}
          </Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: '14px',
              marginBottom: '10px'
            }}
          >
            Рейс выполняет: {flight.carrier.caption}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
