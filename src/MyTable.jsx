import React, { useEffect, useState } from 'react';
import ReactTable from 'react-table';

const MyTable = ({ tableData }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(tableData);
    }, [tableData]);

    const columns = [
        {
            Header: 'ID',
            accessor: 'id',
        },
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Description',
            accessor: 'description',
        },
    ];

    return (
        <ReactTable
            data={data}
            columns={columns}
            defaultPageSize={10}
            className="-striped -highlight"
        />
    );
};

export default MyTable;
