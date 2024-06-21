import React, { useState, useEffect } from 'react';
import { FormControl, FormControlLabel, FormGroup } from '@mui/material';
import { Flight, FilterProps } from '../../../types/types';
import TitleSecondary from '../titleSecondary/TitleSecondary';
import CheckboxBtn from '../ui/check/CheckboxBtn';

export default function FilterCheck({ title, flightsData, setFilteredFlights }: FilterProps) {
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
    setFilteredFlights(filteredFlights);
  }, [selectedChecks, setFilteredFlights]);

  return (
    <FormControl component="fieldset">
      <TitleSecondary title={title} color="#111" />
      <FormGroup>
        <FormControlLabel
          control={
            <CheckboxBtn
              checked={selectedChecks.oneStop}
              onChange={handleCheckChange}
              name="oneStop"
            />
          }
          label="1 пересадка"
        />
        <FormControlLabel
          control={
            <CheckboxBtn
              checked={selectedChecks.twoAndMoreStops}
              onChange={handleCheckChange}
              name="twoAndMoreStops"
            />
          }
          label="2 и более пересадки"
        />
        <FormControlLabel
          control={
            <CheckboxBtn
              checked={selectedChecks.directFlight}
              onChange={handleCheckChange}
              name="directFlight"
            />
          }
          label="прямой рейс"
        />
      </FormGroup>
    </FormControl>
  );
}
