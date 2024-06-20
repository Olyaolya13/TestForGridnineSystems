import { Box } from '@mui/material';
import data from '../../../../mocks/flights.json';
import MainTitle from '../titleContent/TitleContent';
import { Flight } from '../../../types/types';
import MainCardContentId from './MainCardContentId';
import MainAdditionalServices from './MainAdditionalServices';

export default function MainCard() {
  const flightsData = data.result.flights;

  return (
    <Box sx={{ width: '60vw', gridArea: 'main' }}>
      {flightsData.map((flightData: { flight: Flight }, index: number) => (
        <Box key={index}>
          <MainTitle flight={flightData.flight} />
          <MainCardContentId flight={flightData.flight} />
          <MainAdditionalServices flight={flightData.flight} />
        </Box>
      ))}
    </Box>
  );
}
