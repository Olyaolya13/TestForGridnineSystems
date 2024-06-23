import { useState, useEffect } from 'react';
import { Box, FormControl, Slider, Typography } from '@mui/material';
import { Flight, FiltersProps } from '../../../types/types';
import TitleSecondary from '../titleSecondary/TitleSecondary';

const getTimeFromMins = (mins: number) => {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  return `${hours}ч. ${minutes}м.`;
};

export default function FilterDuration({
  title,
  flightsData,
  setFilteredTimeFlights
}: FiltersProps) {
  const [value, setValue] = useState<number[]>([0, 60]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  useEffect(() => {
    const filterFlights = (flights: Flight[]): Flight[] => {
      const filteredFlights = flights.filter(flight => {
        const totalDuration = flight.legs.reduce((total, leg) => total + leg.duration, 0);
        return totalDuration >= value[0] * 60 && totalDuration <= value[1] * 60;
      });

      return filteredFlights;
    };

    const filteredFlights = filterFlights(flightsData);

    if (setFilteredTimeFlights) {
      setFilteredTimeFlights(filteredFlights);
    }
  }, [value, setFilteredTimeFlights]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <FormControl component="fieldset">
        <TitleSecondary title={title} color="#00a7cc" margin="10px 0" fontSize="14px" />
        <Box sx={{ width: 300 }}>
          <Typography variant="h4" gutterBottom>
            от {getTimeFromMins(value[0] * 60)} до {getTimeFromMins(value[1] * 60)}
          </Typography>
          <Slider
            sx={{ color: '#00a7cc' }}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={0}
            max={60}
            marks={[
              { value: 0, label: '0ч' },
              { value: 12, label: '12ч' },
              { value: 24, label: '24ч' },
              { value: 36, label: '36ч' },
              { value: 48, label: '48ч' },
              { value: 60, label: '60ч' }
            ]}
            getAriaValueText={getTimeFromMins}
          />
        </Box>
      </FormControl>
    </Box>
  );
}
