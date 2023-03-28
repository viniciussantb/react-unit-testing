import { useState } from 'react';

function App() {
  const [names, setNames] = useState([
    'Arthur',
    'Erick',
    'Patrick',
    'Victor'
  ]);
  const [disable, setDisable] = useState(false);

  function handleClick() {
    setNames((state) => [...state, 'Vinícius']);
    setDisable(true);
  }

  const listNames = names.map(name => <li key={name}>{name}</li>)

  return (
    <>
      <h1 className='test'>Hello World</h1>
      <button disabled={disable} className='AddName' onClick={handleClick}>Add Name</button>
      <ul>
        {listNames}
      </ul>
    </>
  )
}

export default App
