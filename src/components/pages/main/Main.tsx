import { Box } from '@mui/material';
import style from './Main.module.scss';
import MainCard from '../../common/main/MainCard';

export default function Main() {
  return (
    <Box className={style.main}>
      <MainCard />
    </Box>
  );
}
