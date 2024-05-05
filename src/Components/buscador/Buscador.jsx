import { useState } from "react";
export default function Buscador({ colaboradores, setFilteredColaboradores }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        const filteredColaboradores = colaboradores.filter((colaborador) =>
            Object.values(colaborador).some((value) =>
                //minusculas
                value.toString().toLowerCase().includes(term.toLowerCase())
            )
        );
        setFilteredColaboradores(filteredColaboradores);
    };

    //correcion en busqueda para que cuando se limpiar vuelva al estado original
    const resetSearch = () => {
        setSearchTerm('');
        setFilteredColaboradores(colaboradores);
    };

    return (
        <div className="buscador">
            <input
                type="text"
                className="form-control"
                placeholder="Buscar colaborador..."
                value={searchTerm}
                onChange={handleSearch}
            />
            {searchTerm && (
                <button onClick={resetSearch}>Limpiar búsqueda</button>
            )}
        </div>
    );
}
