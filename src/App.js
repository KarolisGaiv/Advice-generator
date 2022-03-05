import './styles/main.scss';
import { useEffect, useState } from 'react';

function App() {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data);
    console.log(advice);
  };

  return (
    <div className='advice-container'>
      <h1 className='advice-container__header'>Advice #{advice.slip.id}</h1>
    </div>
  );
}

export default App;
