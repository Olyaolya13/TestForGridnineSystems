import { Box, Typography } from '@mui/material';
import data from '../../../../mocks/flights.json';

export default function Main() {
  const flightsData = data.result.flights;

  console.log(flightsData);

  return (
    <Box sx={{ width: '60vw', gridArea: 'main' }}>
      <Box sx={{ display: 'flex' }}>
        <Typography>Москва, Шереметьево</Typography>
        <Typography>(SVO) - </Typography>
        <Typography>Лондон, Хитроу</Typography>
        <Typography>(LHR)</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Typography>20:40&nbsp;</Typography>
        <Typography>18 авг. вт - </Typography>
        <Typography>19 авг. вт&nbsp;</Typography>
        <Typography>09:45</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Typography>14ч 45мин</Typography>
        <Typography>1 пересадка</Typography>
      </Box>

      {flightsData.map((flight, index) => (
        <Box key={index} sx={{ mt: 2 }}>
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
                {flight.flight.carrier.caption}
              </Typography>

              <Typography variant="h1" sx={{ color: '#fff' }}>
                21049 &#8381;
              </Typography>
            </Box>
            <Typography variant="h3" sx={{ color: '#fff', textAlign: 'end', marginTop: '5px' }}>
              Стоимость для одного взрослого пассажира
            </Typography>
          </Box>

          <Typography variant="h6">{`Данные для рейса ${index + 1}:`}</Typography>
          {flight.flight.legs.map((leg, index) => (
            <Box key={index} sx={{ mt: 1 }}>
              {leg.segments.map((segment, index) => (
                <Box key={index} sx={{ mt: 1 }}>
                  <Box sx={{ display: 'flex' }}>
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
                  <Box sx={{ display: 'flex' }}>
                    <Typography>{segment.departureDate} - </Typography>
                    <Typography>{segment.arrivalDate}&nbsp;</Typography>
                    <Typography>{segment.arrivalDate}&nbsp;</Typography>
                  </Box>
                </Box>
              ))}
              {leg.duration.map((duration, index) => (
                <Box key={index} sx={{ mt: 1 }}>
                  <Typography variant="h2" sx={{ fontSize: '14px' }}>
                    {duration}&nbsp;
                  </Typography>
                </Box>
              ))}
              <Typography
                variant="h3"
                sx={{ fontSize: '16px' }}
              >{`Рейс выполняет: ${flight.flight.carrier.caption}`}</Typography>
            </Box>
          ))}

          <Typography>1 пересадка</Typography>
        </Box>
      ))}
    </Box>
  );
}
