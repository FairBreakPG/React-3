import { useState } from 'react';
import Alert from './Components/alert/Alert';
import Buscador from './Components/buscador/Buscador';
import Formulario from './Components/formulario/Formulario';
import Listado from './Components/listado/Listado';
import { BaseColaboradores } from './Components/datos/BaseColaboradores';

export default function App() {
  //Estado para los  nuevos colaboradores 
  const [colaboradores, setColaboradors]  = useState(BaseColaboradores)

  //Estado para los colaboradores filtrados
  const [filteredColaboradores, setFilteredColaboradores] = useState([]);

  


  //Logica para agregar un colaborador
  const agregarColaborador = (nuevoColaborador) =>
    {
      setColaboradors([...colaboradores, nuevoColaborador]);
      setFilteredColaboradores([...filteredColaboradores, nuevoColaborador]); // Agregar el nuevo colaborador también a los colaboradores filtrados

      console.log("Colaborador agregado correctamente", nuevoColaborador);
    };


  return (
    <div>
            <Alert mensaje="Este es un mensaje de prueba" tipo="success" />

          <Buscador colaboradores={colaboradores} setFilteredColaboradores={setFilteredColaboradores} />

    <Listado colaboradores={filteredColaboradores.length > 0 ? filteredColaboradores : colaboradores}/>
    <Formulario agregarColaborador={agregarColaborador}/>

      

    </div>
  )
}

