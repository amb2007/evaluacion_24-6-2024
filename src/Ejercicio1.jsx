import { useState } from 'react';

export default function Ejercicio1(){ 

  const [SelectedFruit, setSelectedFruit] = useState('');
  const handleChange = (event)=> {
    setSelectedFruit (event.target.value);
  };

  return (
    <div>
      <h2>Ejercicio 1: Lista desplegable</h2>

      <label>Seleccione una fruta: </label>
      <select onChange={handleChange} >
        <option value = 'naranja'>naranja</option>
        <option value = 'pera'>pera </option>
        <option value = 'manzana'>manzana</option>
        <option value = 'mandarina'>mandarina</option>
      </select>
      <p>{SelectedFruit}</p>
    </div>
  );
};
