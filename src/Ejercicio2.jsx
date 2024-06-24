import { useState } from "react"

export default function Ejercicio2() {
  const [datos, setDatos] = useState({
    nombre : '',
    edad : ''
  });
  const handleChange = (event) =>{
    const {name, value} = event.target;
    setDatos({
      ...datos,
      [name] : value
    })
  };
  const [mayorOno, setmayorOno] = useState('');
  const handleSumbit = (event) =>{
    event.preventDefault();
    if(datos.edad <= 18 ){
      setmayorOno('es mayor de edad');
    }
    else{
      setmayorOno('no es mayor de edad');
    }
  };
  return (
    <div>
      <h2>Ejercicio 2: Formulario</h2>
      <form onSubmit={handleSumbit}>
      <label>nombre</label>
      <input 
      onChange={handleChange}
      type="text"
      name = 'nombre'
      value = {datos.nombre}
      />
      <label>edad</label>
      <input 
      onChange={handleChange}
      type="number"
      name = 'edad'
      value = {datos.edad}
      />
      </form>
      <button type="sumbit">enviar</button>
      <p>{datos.nombre} tiene {datos.edad} años</p>
      <p>{mayorOno}</p>
    </div>
  )
};
