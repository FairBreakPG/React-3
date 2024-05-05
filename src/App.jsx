import { useState } from 'react';
import Alert from './Components/alert/Alert';
import Buscador from './Components/buscador/Buscador';
import Formulario from './Components/formulario/Formulario';
import Listado from './Components/listado/Listado';
import { BaseColaboradores } from './Components/datos/BaseColaboradores';
import '../src/App.css';

export default function App() {
  //Estado para los  nuevos colaboradores 
  const [colaboradores, setColaboradors]  = useState(BaseColaboradores)

  //Estado para los colaboradores filtrados
  const [filteredColaboradores, setFilteredColaboradores] = useState([]);

  //Logica para agregar un colaborador
  const agregarColaborador = (nuevoColaborador) => {
    // Agregar el nuevo colaborador a la lista general de colaboradores
    setColaboradors([...colaboradores, nuevoColaborador]);

    //filtrado
    const nuevoColaboradorPasaFiltro = colaboradoresFiltrados.length === 0 ||
        colaboradoresFiltrados.some(colaborador => 
            colaborador.nombre.toLowerCase().includes(nuevoColaborador.nombre.toLowerCase()) ||
            colaborador.email.toLowerCase().includes(nuevoColaborador.email.toLowerCase()) ||
            colaborador.cargo.toLowerCase().includes(nuevoColaborador.cargo.toLowerCase())
        );

    if (nuevoColaboradorPasaFiltro) {
        setFilteredColaboradores([...colaboradoresFiltrados, nuevoColaborador]);
    }

    console.log("Colaborador agregado correctamente", nuevoColaborador);
};


  return (
    <div className="app-container">
    <div className="title">Lista Colaboradores</div>
    <div className="content-container">
      <div className="list-container">
        <Alert />
        <Buscador className="custom-buscador" colaboradores={colaboradores} setFilteredColaboradores={setFilteredColaboradores} />
        <Listado colaboradores={filteredColaboradores.length > 0 ? filteredColaboradores : colaboradores} />
      </div>
      <div className="form-container">
        <div className="title">Agregar Colaborador</div>
        <Formulario agregarColaborador={agregarColaborador} />
      </div>
    </div>
  </div>
  )
}

