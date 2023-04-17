import React, { useEffect, useState } from 'react';

const FieldVisibilityController = ({ columnApi, columnDefs }) => {
    const [columnVisibility, setColumnVisibility] = useState({});

    useEffect(() => {
        if (columnApi) {
            const initialVisibility = {};
            columnDefs.forEach((col) => {
                initialVisibility[col.field] = columnApi.getColumn(col.field).isVisible();
            });
            setColumnVisibility(initialVisibility);
        }
    }, [columnApi, columnDefs]);

    const handleChange = (field, isChecked) => {
        if (columnApi) {
            columnApi.setColumnVisible(field, isChecked);
            setColumnVisibility({ ...columnVisibility, [field]: isChecked });
        }
    };

    // Не рендерим компонент, если columnApi еще не установлен
    if (!columnApi) {
        return null;
    }

    return (
        <div>
            <h3>Field Visibility</h3>
            <ul>
                {columnDefs.map((col) => (
                    <li key={col.field}>
                        <input
                            type="checkbox"
                            id={col.field}
                            checked={columnVisibility[col.field]}
                            onChange={(e) => handleChange(col.field, e.target.checked)}
                        />
                        <label htmlFor={col.field}>{col.headerName}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FieldVisibilityController;
