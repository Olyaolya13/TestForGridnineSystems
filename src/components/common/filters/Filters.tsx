import { Box } from '@mui/material';
import CheckoxBtn from '../../common/filterBtns/CheckboxBtn';
import RadioBtn from '../../common/filterBtns/RadioBtn';

export default function Main() {
  return (
    <Box sx={{ gridArea: 'filter', width: '30vw' }}>
      <CheckoxBtn />
      <RadioBtn />
    </Box>
  );
}
