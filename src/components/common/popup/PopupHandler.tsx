import React, { useState } from 'react';
import { Box } from '@mui/material';
import PopupCardId from './PopupCardId';
import { PopupHandlerProps } from '../../../types/types';

const styles = {
  container: { display: 'flex', justifyContent: 'end' }
};

export default function PopupHandler({ trigger, flight, flightId }: PopupHandlerProps) {
  const [openPopup, setOpenPopup] = useState(false);

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <Box sx={styles.container}>
      {React.cloneElement(trigger as React.ReactElement, { onClick: handleOpenPopup })}
      <PopupCardId
        open={openPopup}
        onClose={handleClosePopup}
        flight={flight}
        flightId={flightId}
      />
    </Box>
  );
}
