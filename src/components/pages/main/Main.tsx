import { Box } from '@mui/material';
import MainCard from '../../common/main/MainCard';

export default function Main() {
  return (
    <Box sx={{ width: '60vw', gridArea: 'main' }}>
      <MainCard />
    </Box>
  );
}
