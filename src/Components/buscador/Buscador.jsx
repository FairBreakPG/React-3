import React, { useState } from 'react';

export default function Buscador({ colaboradores, setFilteredColaboradores }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const filteredColaboradores = colaboradores.filter((colaborador) =>
            Object.values(colaborador).some((value) =>
                value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
        setFilteredColaboradores(filteredColaboradores);
    };

    return (
        <div className="mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Buscar colaborador..."
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
    );
}
