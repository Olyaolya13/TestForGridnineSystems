import style from './App.module.scss';
import theme from './vendor/theme';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Main, MainId } from './components/pages';
import { ThemeProvider } from '@emotion/react';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className={style.app}>
        <Routes>
          <Route path="*" element={<Navigate to="/main" />} />
          <Route path="/main" element={<Main />} />
          <Route path="/main/:id" element={<MainId />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}
