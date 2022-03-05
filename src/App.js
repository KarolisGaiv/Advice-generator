import './styles/main.scss';
import { useEffect, useState } from 'react';
import MobileDivider from './images/pattern-divider-mobile.svg';

function App() {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data);
    console.log(data);
  };

  return (
    <div className='advice-container'>
      <h1 className='advice-container__header'>Advice #{advice.slip.id}</h1>
      <p className='advice-container__content'>"{advice.slip.advice}"</p>
      <img src={MobileDivider} alt='' />
    </div>
  );
}

export default App;
