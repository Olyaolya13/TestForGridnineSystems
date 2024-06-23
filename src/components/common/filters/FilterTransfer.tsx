import React, { useState, useEffect } from 'react';
import { FormControl, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { Flight, FiltersProps } from '../../../types/types';
import TitleSecondary from '../titleSecondary/TitleSecondary';
import CheckboxBtn from '../ui/check/CheckboxBtn';
import { transferFiltersData } from '../../../utils/constants';

export default function FilterTransfer({
  title,
  flightsData,
  setFilterTransferCriteria
}: FiltersProps) {
  const [selectedChecks, setSelectedChecks] = useState({
    oneStop: false,
    twoAndMoreStops: false,
    directFlight: false
  });

  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSelectedChecks(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  useEffect(() => {
    const filterFlights = (flights: Flight[]): Flight[] => {
      let filteredFlights = flights;

      if (selectedChecks.oneStop || selectedChecks.twoAndMoreStops || selectedChecks.directFlight) {
        filteredFlights = filteredFlights.filter(flight => {
          const hasOneStop = flight.legs.every(leg => leg.segments.length === 2);
          const hasTwoAndMoreStops = flight.legs.every(leg => leg.segments.length >= 3);
          const hasDirectFlight = flight.legs.every(leg => leg.segments.length === 1);

          if (selectedChecks.oneStop && selectedChecks.directFlight) {
            return (
              flight.legs.some(leg => leg.segments.length === 1) &&
              flight.legs.some(leg => leg.segments.length === 2)
            );
          }
          return (
            (selectedChecks.oneStop && hasOneStop) ||
            (selectedChecks.twoAndMoreStops && hasTwoAndMoreStops) ||
            (selectedChecks.directFlight && hasDirectFlight)
          );
        });
      }
      return filteredFlights;
    };

    const filteredFlights = filterFlights(flightsData);
    setFilterTransferCriteria && setFilterTransferCriteria(filteredFlights);
  }, [selectedChecks, setFilterTransferCriteria]);

  return (
    <FormControl component="fieldset">
      <TitleSecondary title={title} color="#00a7cc" margin="10px 0" fontSize="14px" />
      <FormGroup>
        {transferFiltersData.map(option => (
          <FormControlLabel
            key={option.name}
            sx={option.sx}
            control={
              <CheckboxBtn
                checked={selectedChecks[option.name as keyof typeof selectedChecks]}
                onChange={handleCheckChange}
                name={option.name}
              />
            }
            label={<Typography variant="h4">{option.label}</Typography>}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
}
