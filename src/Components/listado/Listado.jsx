import React from 'react';
import Table from 'react-bootstrap/Table';
import '../listado/Listado.css';

export default function Listado({ colaboradores }) {
    return (
        <Table striped bordered hover size="sm" className="tabla-listado-colaboradores">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Teléfono</th>
                </tr>
            </thead>
            <tbody>
                {colaboradores.map((colaborador, index) => (
                    <tr key={index}>
                        <td className="estilosFila">{colaborador.nombre}</td>
                        <td className="estilosFila">{colaborador.email}</td>
                        <td className="estilosFila">{colaborador.edad}</td>
                        <td className="estilosFila">{colaborador.cargo}</td>
                        <td className="estilosFila">{colaborador.telefono}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
 
}
