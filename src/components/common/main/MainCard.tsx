import { Box, Typography } from '@mui/material';
import data from '../../../../mocks/flights.json';
import MainTitle from './MainTitle';
import { Flight } from '../../../types/types';
import MainDateTime from './MainDateTime';

export default function Main() {
  const flightsData = data.result.flights;

  return (
    <Box sx={{ width: '60vw', gridArea: 'main' }}>
      {flightsData.map((flightData: { flight: Flight }, index: number) => (
        <Box key={index}>
          <MainTitle flight={flightData.flight} />
          <MainDateTime flight={flightData.flight} />
          {/* {flightData.flight.legs.map((leg, index) => (
            <Box key={index} sx={{ mt: 1 }}>
              <Typography variant="h2" sx={{ fontSize: '14px' }}>
                Общий маршрут: {leg.duration} минут
              </Typography>
              {leg.segments.length > 1 ? (
                <Typography variant="h3" sx={{ fontSize: '16px', color: '#b39b00' }}>
                  {leg.segments.length === 1
                    ? 'Прямой рейс'
                    : leg.segments.length === 2
                    ? '1 пересадка'
                    : leg.segments.length === 3 || leg.segments.length === 4
                    ? `${leg.segments.length - 1} пересадки`
                    : `${leg.segments.length - 1} пересадок`}
                </Typography>
              ) : (
                <Typography variant="h3" sx={{ fontSize: '16px', color: '#00c298' }}>
                  Прямой рейс
                </Typography>
              )}
              <Typography
                variant="h3"
                sx={{ fontSize: '16px' }}
              >{`Рейс выполняет: ${flightData.flight.carrier.caption}`}</Typography>
              <Typography
                variant="h3"
                sx={{ fontSize: '16px' }}
              >{`Баггаж: ${flight.flight.servicesStatuses.baggage.caption}`}</Typography>
              <Typography
                variant="h3"
                sx={{ fontSize: '16px' }}
              >{`Обмен билета: ${flight.flight.servicesStatuses.exchange.caption}`}</Typography>
              <Typography
                variant="h3"
                sx={{ fontSize: '16px' }}
              >{`Возврат денежных средств: ${flight.flight.servicesStatuses.refund.caption}`}</Typography>
            </Box>
          ))} */}
        </Box>
      ))}
    </Box>
  );
}
