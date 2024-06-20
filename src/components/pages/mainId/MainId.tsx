import { Box } from '@mui/material';
import MainCardId from '../../common/mainId/MainCardId';

export default function Main() {
  return (
    <Box sx={{ width: '60vw', gridArea: 'main' }}>
      <MainCardId />
    </Box>
  );
}
