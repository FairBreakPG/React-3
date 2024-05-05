import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import '../formulario/Formulario.css';
import Button from 'react-bootstrap/Button';
import Alert from '../alert/Alert'; // Importa el componente Alert

export default function Formulario({ agregarColaborador }) {
    const [alerta, setAlerta] = useState({ mensaje: '', tipo: '' });

    // UseState Estados
    const [nuevoColaborador, setNuevoColaborador] = useState({
        nombre: '',
        email: '',
        edad: '',
        cargo: '',
        telefono: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNuevoColaborador({ ...nuevoColaborador, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(nuevoColaborador).every(value => value.trim() !== '')) {
            agregarColaborador(nuevoColaborador);
            setNuevoColaborador({
                nombre: '',
                email: '',
                edad: '',
                cargo: '',
                telefono: ''
            });
            setAlerta({ mensaje: 'Colaborador agregado !', tipo: 'success' });
        } else {
            setAlerta({ mensaje: 'Complete todos los campos !', tipo: 'danger' });
        }
    };

    return (
        <Form className='caja' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Nombre del colaborador"
                    name='nombre' value={nuevoColaborador.nombre} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email del colaborador"
                    name='email' value={nuevoColaborador.email} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Edad del colaborador"
                    name='edad' value={nuevoColaborador.edad} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Cargo del colaborador"
                    name='cargo' value={nuevoColaborador.cargo} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Teléfono del colaborador"
                    name='telefono' value={nuevoColaborador.telefono} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Button variant="primary" type='submit'>Agregar Colaborador</Button>{' '}
            </Form.Group>

            {/* Alerta debajo del botón */}
            {alerta.mensaje && (
                <Alert mensaje={alerta.mensaje} tipo={alerta.tipo} />
            )}
        </Form>
    );
}
