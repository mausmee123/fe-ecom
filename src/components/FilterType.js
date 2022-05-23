import React from "react";
import Grid from "@material-ui/core/Grid";
import FilterByCountry from "./FilterByCountry";
import FilterByCategory from "./FilterByCategory";
import FilterByCompany from "./FilterByCompany";

const FilterType = () => {
    return(
        <>
            <div className="filter-type">
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={4} md={4}>
                        <FilterByCountry/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <FilterByCategory/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <FilterByCompany/>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default FilterType;