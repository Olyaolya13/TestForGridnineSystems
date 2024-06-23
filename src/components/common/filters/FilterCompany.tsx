import React, { useState, useEffect } from 'react';
import { FormControl, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { Flight, FiltersProps } from '../../../types/types';
import TitleSecondary from '../titleSecondary/TitleSecondary';
import CheckboxBtn from '../ui/check/CheckboxBtn';
import { allComponies } from '../../../utils/constants';

interface SelectedCompanyState {
  [key: string]: boolean;
}

export default function FilterCompany({
  flightsData,
  setFilterCompanyCriteria,
  title
}: FiltersProps) {
  const [selectedCompany, setSelectedCompany] = useState<SelectedCompanyState>({
    AF: false,
    KLM: false,
    Aeroflot: false,
    Turk: false,
    Finnair: false,
    Baltic: false,
    Alitalia: false,
    Pegasus: false,
    Brussels: false,
    LOT: false
  });

  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSelectedCompany(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  useEffect(() => {
    const filterFlights = (flights: Flight[]): Flight[] => {
      if (Object.values(selectedCompany).every(value => !value)) {
        return flights;
      }

      const filteredFlights = flights.filter(flight => {
        return Object.keys(selectedCompany).some(
          key => selectedCompany[key] && flight.carrier.caption.includes(key)
        );
      });

      return filteredFlights;
    };

    const filteredFlights = filterFlights(flightsData);

    if (setFilterCompanyCriteria) {
      setFilterCompanyCriteria(filteredFlights);
    }
  }, [selectedCompany, setFilterCompanyCriteria]);

  return (
    <FormControl component="fieldset">
      <TitleSecondary title={title} color="#00a7cc" margin="10px 0" fontSize="14px" />
      <FormGroup>
        {allComponies.map(option => (
          <FormControlLabel
            sx={{ width: '85%' }}
            key={option.id}
            control={
              <CheckboxBtn
                checked={selectedCompany[option.id]}
                onChange={handleCheckChange}
                name={option.id}
              />
            }
            label={<Typography variant="h4">{option.label}</Typography>}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
}
