import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../../../../mocks/flights.json';
import { Flight } from '../../../types/types';
import MainCardContent from './MainCardContent';
import SubmitBtn from '../ui/btns/SubmitBtn';
import Title from '../titleContent/TitleContent';
import FilterSort from '../filters/FilterSort';

const styles = {
  container: { width: '60vw', gridArea: 'main' },
  submitBtnContainer: { display: 'flex', justifyContent: 'center', marginTop: '10px' },
  paginationContainer: { display: 'flex', justifyContent: 'center', marginTop: '20px' }
};

export default function MainCard() {
  const flightsData = data.result.flights.map(flightData => flightData.flight);
  const [filteredFlights, setFilteredFlights] = useState<Flight[]>(flightsData);

  const [currentPage, setCurrentPage] = useState(1);
  const visibleItems = 5;
  const navigate = useNavigate();

  console.log(filteredFlights);

  const handleCardClick = (id: number) => {
    console.log('Clicked on card with id:', id);
    navigate(`/main/${id}`);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredFlights.length / visibleItems)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleDisableBtnPagination = () => {
    return currentPage === Math.ceil(filteredFlights.length / visibleItems);
  };

  const currentData = filteredFlights.slice(
    (currentPage - 1) * visibleItems,
    currentPage * visibleItems
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);

  return (
    <>
      <FilterSort
        label="sort-filter"
        title="Сортировка"
        flightsData={flightsData}
        setFilteredFlights={setFilteredFlights}
      />
      <Box sx={styles.container}>
        {currentData.map((flight: Flight, index: number) => (
          <Box
            key={index}
            sx={{
              marginBottom: '20px'
            }}
          >
            <Title flight={flight} />
            <MainCardContent flight={flight} />
            <Box sx={styles.submitBtnContainer}>
              <SubmitBtn title="Выбрать" width="50vw" onClick={() => handleCardClick(flight.id)} />
            </Box>
          </Box>
        ))}
        <Box sx={styles.paginationContainer}>
          <SubmitBtn title="Назад" onClick={handlePrevPage} disabled={currentPage === 1} />
          <SubmitBtn
            title="Вперед"
            onClick={handleNextPage}
            disabled={handleDisableBtnPagination()}
          />
        </Box>
      </Box>
    </>
  );
}
