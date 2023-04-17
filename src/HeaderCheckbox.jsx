import React, { useState } from 'react';

const HeaderCheckbox = (props) => {
    const [isChecked, setIsChecked] = useState(true);

    const handleChange = (e) => {
        setIsChecked(e.target.checked);
        props.columnApi.setColumnVisible(props.column.colId, e.target.checked);
    };

    return (
        <>
            {props.displayName}
            <input type="checkbox" checked={isChecked} onChange={handleChange} />
        </>
    );
};

export default HeaderCheckbox;
