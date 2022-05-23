import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel/InputLabel";


const FilterByCategory = () => {
    return (
        <>
            <InputLabel className="filterLabel">Filter by Category</InputLabel>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                variant="outlined"
                renderInput={(params) => <TextField {...params} />}
            />
        </>
    );
};

export default FilterByCategory;


const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
];