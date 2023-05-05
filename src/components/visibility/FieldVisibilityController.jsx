import React, { useEffect, useState } from "react";
import "./FieldVisibilityController.css";

const FieldVisibilityController = ({ columnApi, columnDefs }) => {
  const [columnVisibility, setColumnVisibility] = useState({});

  useEffect(() => {
    if (columnApi) {
      const initialVisibility = {};
      columnDefs.forEach((col) => {
        initialVisibility[col.field] = columnApi
          .getColumn(col.field)
          .isVisible();
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
    <div className="field-visibility-controller">
      <h3 className="field-visibility-title">Field Visibility</h3>
      <ul className="field-visibility-list">
        {columnDefs.map((col) => (
          <li key={col.field} className="field-visibility-item">
            <input
              type="checkbox"
              id={col.field}
              className="field-visibility-checkbox"
              checked={columnVisibility[col.field]}
              onChange={(e) => handleChange(col.field, e.target.checked)}
            />
            <label htmlFor={col.field} className="field-visibility-label">
              {col.headerName}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FieldVisibilityController;
