import './styles/main.scss';
import { useEffect, useState } from 'react';
import Dice from './images/icon-dice.svg';
import MobileDivider from './images/pattern-divider-mobile.svg';

function App() {
  const [advice, setAdvice] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data);
  };

  function changeAdvice() {
    fetchData();
  }

  if (advice === undefined) return <h1 className='loading-msg'>Loading...</h1>;

  return (
    <div className='advice-container'>
      <h1 className='advice-container__header'>Advice #{advice.slip.id}</h1>
      <p className='advice-container__content'>"{advice.slip.advice}"</p>
      <img
        className='advice-container__divider'
        src={MobileDivider}
        alt='straight line divider'
      />
      <button className='generate-btn' onClick={changeAdvice}>
        <img src={Dice} alt='' />
      </button>
    </div>
  );
}

export default App;
