import React, {useEffect, useState} from "react";
import catImg from '../assets/Activity1.svg';


const colours = ['#007FFF', '#00D037', '#FCB900', '#C32525'];

const dataCategory = [
    { label: "Clothing", image: catImg},
    { label: "Clothing1", image: catImg},
    { label: "Clothing2", image: catImg},
    { label: "Clothing3", image: catImg}
];

const CategorySlider = () => {
    // const [selectedColourIndex, setColourIndex] = useState(0);
    //
    // const newColourIndex = selectedColourIndex + 1;
    // useEffect(() => {
    //
    //     if (colours[newColourIndex])
    //         setColourIndex(newColourIndex);
    //     else
    //         setColourIndex();
    // }, []);

    return (
        <div className="category-slider">
            {dataCategory.map((item, i) => (
            <div className="category">
                <div className="cat-img"  style={{borderColor: colours[i]}}>
                <img src={item.image} alt='vendorImage'/>
                </div>
                <div>{item.label}</div>
            </div>
            ))}
        </div>
    );
};

export default CategorySlider;