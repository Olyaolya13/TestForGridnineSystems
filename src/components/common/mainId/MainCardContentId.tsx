import { Box, Typography } from '@mui/material';
import { MainProps } from '../../../types/types';
import DateTimeComponent from '../dateTimeComponent/DateTimeComponent';

const getTimeFromMins = (mins: number) => {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  return `${hours}ч. ${minutes}м.`;
};

const getDurationInMinutes = (startDate: string, endDate: string): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return Math.floor((end.getTime() - start.getTime()) / 60000);
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
                  ({segment.departureAirport.uid}) -&nbsp;
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
              <Box sx={{ display: 'flex', justifyContent: 'space-around', margin: '10px 0 20px' }}>
                <Typography variant="h3" sx={{ color: 'grey' }}>
                  Время в пути: {getTimeFromMins(segment.travelDuration)}
                </Typography>

                {segmentIndex < leg.segments.length - 1 && (
                  <Typography variant="h3" sx={{ color: 'grey' }}>
                    Пересадка:
                    {getTimeFromMins(
                      getDurationInMinutes(
                        segment.arrivalDate,
                        leg.segments[segmentIndex + 1].departureDate
                      )
                    )}
                  </Typography>
                )}
              </Box>
            </Box>
          ))}
          <Typography
            variant="h2"
            sx={{ fontSize: '14px', paddingTop: '10px', textAlign: 'center', marginBottom: '10px' }}
          >
            Общее время: {getTimeFromMins(leg.duration)}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
