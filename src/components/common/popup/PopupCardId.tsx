import Popup from './Popup';
import MainCardIdContent from '../mainId/MainCardIdContent';
import { PopupCardIdProps } from '../../../types/types';

export default function PopupCardId({ open, onClose, flight, flightId }: PopupCardIdProps) {
  return (
    <Popup open={open} onClose={onClose} onClickCloseIcon={onClose}>
      <MainCardIdContent flight={flight} flightId={flightId} />
    </Popup>
  );
}
