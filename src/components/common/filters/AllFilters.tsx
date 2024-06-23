import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import data from '../../../../mocks/flights.json';
import { Flight } from '../../../types/types';
import FilterSort from '../filters/FilterSort';
import FilterTransfer from '../filters/FilterTransfer';
import FilterCompany from '../filters/FilterCompany';
import FilterPrice from '../filters/FilterPrice';
import FilterTimeWay from '../filters/FilterTimeWay';

interface AllFiltersProps {
  setFinalFlights: (flights: Flight[]) => void;
}

export default function AllFilters({ setFinalFlights }: AllFiltersProps) {
  const flightsData: Flight[] = data.result.flights.map((flightData: Flight) => flightData.flight);

  console.log(flightsData);

  const [sortedFlights, setSortedFlights] = useState<Flight[]>(flightsData);
  const [filteredTransferFlights, setFilteredTransferFlights] = useState<Flight[]>(flightsData);

  const [filteredByPriceFlights, setFilteredByPriceFlights] = useState<Flight[]>(flightsData);
  const [filteredByCompanyFlights, setFilteredByCompanyFlights] = useState<Flight[]>(flightsData);
  const [filteredByDurationFlights, setFilteredByDurationFlights] = useState<Flight[]>(flightsData);

  useEffect(() => {
    const applyFilterAndSort = () => {
      let updatedFlights: Flight[] = flightsData;

      if (filteredTransferFlights.length > 3) {
        updatedFlights = updatedFlights.filter((flight: Flight) =>
          filteredTransferFlights.includes(flight)
        );
      }

      if (filteredByPriceFlights.length > 0) {
        updatedFlights = updatedFlights.filter((flight: Flight) =>
          filteredByPriceFlights.includes(flight)
        );
      }

      if (filteredByCompanyFlights.length > 0) {
        updatedFlights = updatedFlights.filter((flight: Flight) =>
          filteredByCompanyFlights.includes(flight)
        );
      }

      if (filteredByDurationFlights.length > 0) {
        updatedFlights = updatedFlights.filter((flight: Flight) =>
          filteredByDurationFlights.includes(flight)
        );
      }

      if (sortedFlights.length > 0) {
        updatedFlights = sortedFlights.filter((flight: Flight) => updatedFlights.includes(flight));
      }

      setFinalFlights(updatedFlights);
    };

    applyFilterAndSort();
  }, [
    filteredTransferFlights,
    filteredByPriceFlights,
    filteredByCompanyFlights,
    filteredByDurationFlights,
    sortedFlights,
    setFinalFlights
  ]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <FilterSort
        label="sort-filter"
        title="Сортировка"
        flightsData={flightsData}
        setSortCriteria={setSortedFlights}
      />
      <FilterTransfer
        label="check-transfer"
        title="Пересадка"
        flightsData={flightsData}
        setFilterTransferCriteria={setFilteredTransferFlights}
      />
      <FilterPrice
        title="Стоимость"
        flightsData={flightsData}
        setFilterPriceCriteria={setFilteredByPriceFlights}
      />
      <FilterCompany
        title="Авиакомпания"
        flightsData={flightsData}
        setFilterCompanyCriteria={setFilteredByCompanyFlights}
      />

      <FilterTimeWay
        title="Общее время"
        flightsData={flightsData}
        setFilteredTimeFlights={setFilteredByDurationFlights}
      />
    </Box>
  );
}
