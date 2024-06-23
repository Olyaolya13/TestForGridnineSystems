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
  const [currentData, setCurrentData] = useState<Flight[]>([]);
  const [finalFlights, setFinalFlights] = useState<Flight[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const visiblePage = 2;

  useEffect(() => {
    setCurrentData(finalFlights.slice(0, visiblePage));
  }, [finalFlights]);

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    const startIndex = (nextPage - 1) * visiblePage;
    const endIndex = startIndex + visiblePage;
    setCurrentData(finalFlights.slice(startIndex, endIndex));
    setCurrentPage(nextPage);
  };

  const handlePrevPage = () => {
    const prevPage = currentPage - 1;
    const startIndex = (prevPage - 1) * visiblePage;
    const endIndex = startIndex + visiblePage;
    setCurrentData(finalFlights.slice(startIndex, endIndex));
    setCurrentPage(prevPage);
  };

  const handleDisableBtnPagination = () => {
    return currentPage * visiblePage >= finalFlights.length;
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
