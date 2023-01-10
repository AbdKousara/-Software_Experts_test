import './styles.css';
import facts from './bananas.json';
import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Bananas from './pics/artsy_bananas.png';
function App() {
  const [bananas, setBananas] = useState([]);

  useEffect(() => {
    let bananasWithIDs = facts.funfacts.map((fact) => ({
      id: uuid(),
      fact: fact,
    }));
    setBananas(bananasWithIDs);
  }, []);

  let runFacts = () =>
    bananas.map((fact, idx) => (
      <li key={fact.id}>
        <span className='emoji' role='img' aria-label='banana emoji'>
          🍌
        </span>
        {fact.fact}
      </li>
    ));
  return (
    <div className='App'>
      <img src={Bananas} className='App-logo' alt='logo' />
      <section className='facts'>
        <ul>{runFacts()}</ul>
      </section>
    </div>
  );
}

export default App;
