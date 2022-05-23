import React from 'react'
import Select, {components} from 'react-select'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'}
]

const customStyles = {
    multiValue: (provided, state) => ({
        ...provided,
        backgroundColor: '#007FFF',
        // padding: '4px',
        alignItems: "flex-start",
    }),
    multiValueLabel: (provided, state) => ({
        ...provided,
        color: '#fff',
        fontSize: "17px",

    }),
    multiValueRemove: (provided, state) => ({
        ...provided,
        color: '#fff',
        "&:hover": {
            backgroundColor: '#007fff',
            color: '#fff'
        }
    }),
    container: (provider, state) => ({
        ...provider,
        width: '100%',
        // marginLeft: '10%',
        marginBottom: '20px',
        textAlign:'left',


        "@media only screen and (max-width: 600px)": {
            ...provider["@media only screen and (max-width: 600px)"],
            width: '100%',
            marginBottom: '0',
        },
    }),
    dropdownIndicator: (provider,state) => ({
        ...provider,
        padding: '10px',
    })


};



const CaretDownIcon = () => {
    return <ArrowDropDownIcon fontSize='large'/>;
};
const DropdownIndicator = props => {
    return (
        <components.DropdownIndicator {...props}>
            <CaretDownIcon/>
        </components.DropdownIndicator>
    );
};

const MultipleSelect = () => {
    return(
        <div>
            <Select isMulti styles={customStyles} placeholder={<div>Select category</div>}
                    components={{DropdownIndicator}} options={options}/>
        </div>
    )
};

export default MultipleSelect;