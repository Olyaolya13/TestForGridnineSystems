import style from './App.module.scss';
import theme from './vendor/theme';
import { Main } from './components/pages';
import Filters from './components/common/filters/Filters';
import { ThemeProvider } from '@emotion/react';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className={style.app}>
        <Filters />
        <Main />
      </div>
    </ThemeProvider>
  );
}
