import { useState } from 'react';
import Alert from './Components/alert/Alert';
import Buscador from './Components/buscador/Buscador';
import Formulario from './Components/formulario/Formulario';
import Listado from './Components/listado/Listado';
import { BaseColaboradores } from './Components/datos/BaseColaboradores';

export default function App() {
  const colores = ["blue", "red"];

  const [inputValue, setInputValue] = useState('');
  const [colores2, setColores2] = useState([]);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setColores2([...colores, inputValue ]);
    setInputValue('');
  };

  return (
    <div>
    

      
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      
      <ul>
        {colores2.map((col, index) => (
          <li key={index} style={{color:col}}>
            {col}
          </li>
        ))}
      </ul>
      
    
    </div>
  )
}

