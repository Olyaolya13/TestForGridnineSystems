import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import data from '../../../../mocks/flights.json';
import MainTitle from '../title/Title';
import { Flight } from '../../../types/types';
import MainCardContent from './MainCardContent';
import SubmitBtn from '../ui/btns/SubmitBtn';

const styles = {
  container: { width: '60vw', gridArea: 'main' },
  paginationContainer: { display: 'flex', justifyContent: 'center', marginTop: '20px' },
  submitBtnContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
};

export default function MainCard() {
  const flightsData = data.result.flights;
  const [currentPage, setCurrentPage] = useState(1);
  const visibleItems = 5;

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(flightsData.length / visibleItems)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleDisableBtnPagination = () => {
    return currentPage === Math.ceil(flightsData.length / visibleItems);
  };

  const currentData = flightsData.slice(
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
    <Box sx={styles.container}>
      {currentData.map((flightData: { flight: Flight }, index: number) => (
        <Box
          key={index}
          sx={{
            marginBottom: '20px'
          }}
        >
          <MainTitle flight={flightData.flight} />
          <MainCardContent flight={flightData.flight} />
          <Box sx={styles.submitBtnContainer}>
            <SubmitBtn title="Выбрать" width="50vw" />
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
  );
}
