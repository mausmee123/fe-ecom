import React from "react";
import Autocomplete from "@mui/material/Autocomplete/Autocomplete";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Button from "@material-ui/core/Button";
import "../pages/admin/Publish.scss"

const FilterByCompany = (props) => {
    const { isAdmin } = props;
    return(
        <>
            <InputLabel className="filterLabel">Filter by Company</InputLabel>
            {isAdmin && <InputLabel className="inputFieldTitle">Filter by Company</InputLabel> }

            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                renderInput={(params) => <TextField {...params}
                />}
            />
            {isAdmin && <Button variant="contained" color="primary" className="filter-btn edit">Edit</Button>}
            {isAdmin && <Button variant="contained" color="primary" className="filter-btn delete">Delete</Button> }
        </>
    );
};

export default FilterByCompany;

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
];