import { Box, Typography } from '@mui/material';
import { MainProps } from '../../../types/types';
import DateTimeComponent from '../dateTimeComponent/DateTimeComponent';

const getTimeFromMins = (mins: number) => {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  return `${hours}ч. ${minutes}м.`;
};

export default function MainDateTime({ flight }: MainProps) {
  return (
    <Box>
      {flight.legs.map((leg, legIndex) => (
        <Box key={legIndex} sx={{ mt: 2 }}>
          {leg.segments.map((segment, segmentIndex) => (
            <Box key={segmentIndex} sx={{ mt: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h2" sx={{ fontSize: '14px' }}>
                  {segment.departureAirport.caption}&nbsp;
                </Typography>
                <Typography variant="h2" sx={{ fontSize: '14px', color: '#00a7cc' }}>
                  ({segment.departureAirport.uid}) - &nbsp;
                </Typography>
                <Typography variant="h2" sx={{ fontSize: '14px' }}>
                  {segment.arrivalAirport.caption}&nbsp;
                </Typography>
                <Typography variant="h2" sx={{ fontSize: '14px', color: '#00a7cc' }}>
                  ({segment.arrivalAirport.uid})
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <DateTimeComponent
                  departureDate={segment.departureDate}
                  arrivalDate={segment.arrivalDate}
                />
              </Box>
            </Box>
          ))}
          <Typography
            variant="h2"
            sx={{
              fontSize: '14px',
              paddingTop: '10px',
              marginBottom: '10px',
              color: 'grey'
            }}
          >
            Общее время: {getTimeFromMins(leg.duration)}
          </Typography>
          <Box>
            {leg.segments.length > 1 ? (
              <Typography variant="h3" sx={{ fontSize: '16px', color: '#b39b00' }}>
                {leg.segments.length === 1
                  ? 'Прямой рейс'
                  : `${leg.segments.length - 1} пересад${leg.segments.length === 2 ? 'ка' : 'ки'}`}
              </Typography>
            ) : (
              <Typography variant="h3" sx={{ fontSize: '16px', color: '#00c298' }}>
                Прямой рейс
              </Typography>
            )}
          </Box>
          <Typography variant="h3" sx={{ fontSize: '16px', color: 'grey' }}>
            Рейс выполняет:{' '}
            <span style={{ fontFamily: 'Benzin', color: '#111' }}>{flight.carrier.caption}</span>
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
