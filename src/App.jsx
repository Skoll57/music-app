import MainPage from "./pages/MainPage/MainPage.jsx";
import style from "./global.module.scss";
import Playbar from "./components/Playbar/Playbar.jsx";

const App = () => {
  return (
    <div className={style.wrapper}>
      <MainPage />
      <Playbar />
    </div>
  );
};

export default App;
