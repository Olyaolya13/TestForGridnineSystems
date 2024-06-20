import React, { useState, useEffect } from 'react';
import { FormControl, RadioGroup, FormControlLabel } from '@mui/material';
import { Flight } from '../../../types/types';
import RadioBtn from '../filterBtns/RadioBtn';
import TitleSecondary from '../titleSecondary/TitleSecondary';

interface FilterSortProps {
  label: string;
  title: string;
  flightsData: Flight[];
  setFilteredFlights: (flights: Flight[]) => void;
}

const FilterSort: React.FC<FilterSortProps> = ({
  label,
  title,
  flightsData,
  setFilteredFlights
}) => {
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
            .filter(flight => flight.legs.length > 0 && flight.legs[0].duration)
            .sort((a, b) => a.legs[0].duration - b.legs[0].duration);
        default:
          return flights;
      }
    };

    const sortedFlights = sortFlights(flightsData, selectedSort);
    setFilteredFlights(sortedFlights);
  }, [selectedSort, flightsData, setFilteredFlights]);

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
};

export default FilterSort;
