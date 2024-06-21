import React, { useState, useEffect } from 'react';
import { FormControl, FormControlLabel, FormGroup } from '@mui/material';
import { Flight, FilterProps } from '../../../types/types';
import TitleSecondary from '../titleSecondary/TitleSecondary';
import CheckboxBtn from '../ui/check/CheckboxBtn';

const allComponies = [
  { id: 'Air France', label: 'Air France' },
  { id: 'KLM', label: 'KLM' },
  { id: 'Аэрофлот', label: 'Аэрофлот - российские авиалинии' },
  { id: 'TURK', label: 'TURK HAVA YOLLARI A.O.' },
  { id: 'Finnair', label: 'Finnair Oyj' },
  { id: 'Baltic', label: 'Air Baltic Corporation A/S' },
  { id: 'Alitalia', label: 'Alitalia Societa Aerea Italiana' },
  { id: 'Pegasus', label: 'Pegasus Hava Tasimaciligi A.S.' },
  { id: 'Brussels', label: 'Brussels Airlines' },
  { id: 'LOT', label: 'LOT Polish Airlines' }
];

interface SelectedCompanyState {
  [key: string]: boolean;
}

export default function FilterCompany({ flightsData, setFilteredFlights, title }: FilterProps) {
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
    setFilteredFlights(filteredFlights);
  }, [selectedCompany, setFilteredFlights]);

  return (
    <FormControl component="fieldset">
      <TitleSecondary title={title} color="#111" />
      <FormGroup>
        {allComponies.map(option => (
          <FormControlLabel
            key={option.id}
            control={
              <CheckboxBtn
                checked={selectedCompany[option.id]}
                onChange={handleCheckChange}
                name={option.id}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
}
