import { useState } from 'react';
import { FormControl, FormGroup, TextField } from '@mui/material';
import { FiltersProps } from '../../../types/types';
import TitleSecondary from '../titleSecondary/TitleSecondary';

export default function FilterPrice({ title, flightsData, setFilterPriceCriteria }: FiltersProps) {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMinPrice =
      event.target.value.trim() === '' ? '' : event.target.value.replace(/\D/g, '');
    setMinPrice(newMinPrice);
    filterFlights(newMinPrice, maxPrice);
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxPrice =
      event.target.value.trim() === '' ? '' : event.target.value.replace(/\D/g, '');
    setMaxPrice(newMaxPrice);
    filterFlights(minPrice, newMaxPrice);
  };

  const filterFlights = (min: string, max: string) => {
    let filtered = flightsData;

    if (min !== '' && !isNaN(parseInt(min))) {
      const minPriceNum = parseInt(min);
      filtered = filtered.filter(flight => parseInt(flight.price.total.amount) >= minPriceNum);
    }

    if (max !== '' && !isNaN(parseInt(max))) {
      const maxPriceNum = parseInt(max);
      filtered = filtered.filter(flight => parseInt(flight.price.total.amount) <= maxPriceNum);
    }

    if (setFilterPriceCriteria) {
      setFilterPriceCriteria(filtered);
    }
  };

  return (
    <FormControl component="fieldset">
      <TitleSecondary title={title} color="#00a7cc" margin="10px 0" fontSize="14px" />
      <FormGroup sx={{ width: '70%' }}>
        <TextField
          id="minPrice"
          name="minPrice"
          label="От"
          variant="outlined"
          type="text"
          value={minPrice}
          onChange={handleMinPriceChange}
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]*',
            min: 0,
            max: 1000000
          }}
        />
        <TextField
          id="maxPrice"
          name="maxPrice"
          label="До"
          variant="outlined"
          type="text"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]*',
            min: 0,
            max: 1000000
          }}
        />
      </FormGroup>
    </FormControl>
  );
}
