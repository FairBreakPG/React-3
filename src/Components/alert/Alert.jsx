import React from 'react';

export default function Alert({ mensaje, tipo }) {
    return (
        <div className={`alert alert-${tipo} mb-3`} role="alert">
            <p>{mensaje}</p>
        </div>
    );
    
}
