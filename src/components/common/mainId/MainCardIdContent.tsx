import { Box, Typography } from '@mui/material';
import { MainProps } from '../../../types/types';
import DateTimeComponent from '../dateTimeComponent/DateTimeComponent';
import MainAdditionalServices from './MainAdditionalServices';
import SubmitBtn from '../ui/btns/SubmitBtn';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  text: { color: '#00a7cc' },
  textContainer: { display: 'flex', justifyContent: 'center' },
  additionText: { color: 'grey' },
  btnContainer: { display: 'flex', justifyContent: 'center' },
  line: { borderBottom: '1px solid #b39b00' }
};

const getTimeFromMins = (mins: number) => {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  return `${hours}ч. ${minutes}м.`;
};

const getDurationInMinutes = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return Math.round((end.getTime() - start.getTime()) / 60000);
};

export default function MainCardIdContent({ flight }: MainProps) {
  return (
    <Box>
      <Box sx={styles.container}>
        <Typography variant="h1" sx={styles.text}>
          {flight.carrier.caption}
        </Typography>

        <Typography variant="h1" sx={styles.text}>
          {flight.price.total.amount} {flight.price.total.currency}
        </Typography>
      </Box>
      {flight.legs.map((leg, legIndex) => (
        <Box key={legIndex}>
          {leg.segments.map((segment, index) => (
            <Box key={index} sx={{ margin: '10px 0' }}>
              <Box sx={styles.textContainer}>
                <Typography variant="h4">{segment.departureAirport.caption}&nbsp;</Typography>
                <Typography variant="h4" sx={styles.text}>
                  ({segment.departureAirport.uid})&nbsp;
                </Typography>
                <Typography variant="h4">- {segment.arrivalAirport.caption}&nbsp;</Typography>
                <Typography variant="h4" sx={styles.text}>
                  ({segment.arrivalAirport.uid})
                </Typography>
              </Box>
              <Box sx={styles.textContainer}>
                <DateTimeComponent
                  departureDate={segment.departureDate}
                  arrivalDate={segment.arrivalDate}
                />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', margin: '10px 0 20px' }}>
                <Typography variant="h4" sx={styles.additionText}>
                  Время в пути: {getTimeFromMins(segment.travelDuration)}
                </Typography>

                {index < leg.segments.length - 1 && (
                  <Typography variant="h4" sx={{ ...styles.additionText, marginTop: '10px' }}>
                    Пересадка:
                    {getTimeFromMins(
                      getDurationInMinutes(
                        segment.arrivalDate,
                        leg.segments[index + 1].departureDate
                      )
                    )}
                  </Typography>
                )}
              </Box>
            </Box>
          ))}
          <Typography
            variant="h4"
            sx={{ ...styles.text, textAlign: 'center', marginBottom: '10px' }}
          >
            Общее время: {getTimeFromMins(leg.duration)}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              marginBottom: '10px'
            }}
          >
            Рейс выполняет: {flight.carrier.caption}
          </Typography>
          <Box sx={styles.line}></Box>
        </Box>
      ))}
      <MainAdditionalServices flight={flight} />
      <Box sx={styles.btnContainer}>
        <SubmitBtn title="Купить" />
      </Box>
    </Box>
  );
}
