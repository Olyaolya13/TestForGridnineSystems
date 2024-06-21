import React, { useState, useEffect } from 'react';
import { FormControl, RadioGroup, FormControlLabel } from '@mui/material';
import { FilterProps, Flight } from '../../../types/types';
import RadioBtn from '../ui/check/RadioBtn';
import TitleSecondary from '../titleSecondary/TitleSecondary';

export default function FilterSort({ label, title, flightsData, setFilteredFlights }: FilterProps) {
  const [selectedSort, setSelectedSort] = useState<'low-price' | 'high-price' | 'time'>(
    'low-price'
  );

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSort(event.target.value as 'low-price' | 'high-price' | 'time');
  };

  useEffect(() => {
    const sortFlights = (flights: Flight[], sortType: string): Flight[] => {
      switch (sortType) {
        case 'low-price':
          return flights
            .filter(flight => flight.price && flight.price.total && flight.price.total.amount)
            .sort((a, b) => Number(a.price.total.amount) - Number(b.price.total.amount));
        case 'high-price':
          return flights
            .filter(flight => flight.price && flight.price.total && flight.price.total.amount)
            .sort((a, b) => Number(b.price.total.amount) - Number(a.price.total.amount));
        case 'time':
          return flights
            .filter(flight => flight.legs && flight.legs.length > 0)
            .sort((a, b) => {
              const totalDurationA = a.legs.reduce((total, leg) => total + leg.duration, 0);
              const totalDurationB = b.legs.reduce((total, leg) => total + leg.duration, 0);
              return totalDurationA - totalDurationB;
            });
        default:
          return flights;
      }
    };

    const sortedFlights = sortFlights(flightsData, selectedSort);
    setFilteredFlights(sortedFlights);
  }, [selectedSort, setFilteredFlights]);

  return (
    <FormControl component="fieldset">
      <TitleSecondary title={title} color="#111" />
      <RadioGroup aria-label={label} name={label} value={selectedSort} onChange={handleSortChange}>
        <FormControlLabel value="low-price" control={<RadioBtn />} label="по возрастанию цены" />
        <FormControlLabel value="high-price" control={<RadioBtn />} label="по убыванию цены" />
        <FormControlLabel value="time" control={<RadioBtn />} label="по времени в пути" />
      </RadioGroup>
    </FormControl>
  );
}
