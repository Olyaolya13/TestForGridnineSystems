import style from './App.module.scss';
import { Main } from './components/pages';

export default function App() {
  return (
    <div className={style.app}>
      <Main />
    </div>
  );
}
