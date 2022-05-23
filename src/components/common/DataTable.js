import * as React from 'react';
import {
    DataGrid,
} from '@mui/x-data-grid';
import CustomNoRowsOverlay from "./NoRecordFound"
import styled from 'styled-components';

const StyledDataGrid = styled(DataGrid)(({borderColor}) => ({
    '& .MuiDataGrid-root .MuiDataGrid-columnHeader:focus, .MuiDataGrid-root .MuiDataGrid-cell:focus': {
        outline: 'none !important'
    },
    '& .MuiDataGrid-columnsContainer': {
        backgroundColor: true ? '#fafafa' : '#1d1d1d',
    },
    '& .MuiDataGrid-iconSeparator': {
        display: 'none',
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
        borderRight: `1px solid ${
            borderColor
        }`,
        outline: 'none !important'
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
        borderTop: `1px solid ${
            borderColor
        } !important`,
        borderBottom: `0 !important`,
        outline: 'none !important'
    },
    '& .MuiDataGrid-cell': {
        color:
            true ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
        outline: 'none !important'
    },
    '& .MuiPaginationItem-root': {
        borderRadius: 0,
        outline: 'none !important'
    },
}));

export default function DataTable({rows, columns}) {
    return (
        <div style={{width: "100%", height: rows.length > 0 ? "unset" : "450px"}}>
            <StyledDataGrid
                borderColor={"#007FFF"}
                autoHeight={rows.length > 0}
                rows={rows || []}
                columns={columns}
                pageSize={5}
                components={{
                    NoRowsOverlay: CustomNoRowsOverlay,
                }}
                disableColumnSelector={true}
                pagination
                disableSelectionOnClick={true}
                ColumnSortedAscendingIcon={null}
                disableColumnMenu={true}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
}

