import React from 'react'
import { useState } from "react";


const TextInput = ({labelText,placeHolder,isSalary,setSliderValue, setSalaryValue}) => {
    function handleOnChange(e){
        if(isSalary && document.activeElement === e.target){
            setSliderValue(parseInt(e.target.value));
            setSalaryValue(parseInt(e.target.value));
        }
    }
    return (
        <label className="mb-5 input input-bordered input-primary flex items-center gap-2">
            {labelText}
            <input onChange={handleOnChange} type="text" className="grow" placeholder={placeHolder} />
        </label>
    );
}

export default TextInput