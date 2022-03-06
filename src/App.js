import './styles/main.scss';
import { useEffect, useState } from 'react';
import Dice from './images/icon-dice.svg';
import MobileDivider from './images/pattern-divider-mobile.svg';
import DesktopDivider from './images/pattern-divider-desktop.svg';

function App() {
  const [advice, setAdvice] = useState();
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  // Render divider line based on current screen with
  useEffect(() => {
    window.addEventListener('resize', getScreenWidth);
  }, [screenWidth]);

  const fetchData = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data);
  };

  function getScreenWidth() {
    setScreenWidth(window.innerWidth);
  }

  function changeAdvice() {
    fetchData();
  }

  if (advice === undefined) return <h1 className='loading-msg'>Loading...</h1>;

  return (
    <div className='advice-container'>
      <h1 className='advice-container__header'>Advice #{advice.slip.id}</h1>
      <p className='advice-container__content'>"{advice.slip.advice}"</p>

      {screenWidth > 1023 ? (
        <img
          src={DesktopDivider}
          className='advice-container__divider'
          alt='straight line divider'
        />
      ) : (
        <img
          src={MobileDivider}
          className='advice-container__divider'
          alt='straight line divider'
        />
      )}
      <button className='generate-btn' onClick={changeAdvice}>
        <img src={Dice} alt='' />
      </button>
    </div>
  );
}

export default App;
