import { Box, CardMedia, Modal } from '@mui/material';
import CloseIcon from '../../../assets/icons/CloseIcon.svg';
import { useEffect, useState } from 'react';
import { PopupProps } from '../../../types/types';

const styles = {
  container: {
    width: '50vw',
    height: '82vh',
    position: 'absolute',
    borderRadius: 2,
    top: '50%',
    left: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(27px)',
    padding: '40px',
    zIndex: 1
  },
  closeIcon: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    width: '25px',
    height: '25px',
    zIndex: 3
  }
};

export default function Popup({ open, onClose, onClickCloseIcon, children }: PopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (open && !isOpen) {
      setIsOpen(true);
    }
  }, [open, isOpen]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.container}>
        <CardMedia
          component="img"
          src={CloseIcon}
          sx={styles.closeIcon}
          onClick={onClickCloseIcon}
        />
        {children}
      </Box>
    </Modal>
  );
}
