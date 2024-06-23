import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Flight } from '../../../types/types';
import MainCardContent from './MainCardContent';
import SubmitBtn from '../ui/btns/SubmitBtn';
import Title from '../titleContent/TitleContent';
import PopupHandler from '../popup/PopupHandler';
import AllFilters from '../filters/AllFilters';

const styles = {
  container: { width: '60vw', gridArea: 'main' },
  submitBtnContainer: { display: 'flex', justifyContent: 'center', marginTop: '10px' },
  paginationContainer: { display: 'flex', justifyContent: 'center', marginTop: '20px' }
};

export default function MainCard() {
  const [finalFlights, setFinalFlights] = useState<Flight[]>([]);
  const [currentData, setCurrentData] = useState<Flight[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const visibleItems = 2;

  useEffect(() => {
    const startIndex = (currentPage - 1) * visibleItems;
    const endIndex = startIndex + visibleItems;
    setCurrentData(finalFlights.slice(startIndex, endIndex));
  }, [finalFlights, currentPage]);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const handleDisableBtnPagination = () => {
    return currentPage === Math.ceil(finalFlights.length / visibleItems);
  };

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <AllFilters setFinalFlights={setFinalFlights} />
      </Box>
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
              <PopupHandler
                trigger={<SubmitBtn title="Выбрать" width="50vw" />}
                flight={flight}
                flightId={flight.id}
              />
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
