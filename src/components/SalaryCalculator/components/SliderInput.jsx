import React from 'react'
import { NumericFormat } from 'react-number-format';

const SliderInput = ({SliderValue,setSalaryValue}) => {
  function handleOnChange(e){
    if(document.activeElement === e.target){
        setSalaryValue(parseInt(e.target.value));
    }
  }
  return (
    <>
    <input onChange={handleOnChange} type="range" min={SliderValue*0.5} max={SliderValue*1.5} className="range range-primary" />
    <div className="text-secondary w-full flex justify-between text-xs px-2">
        <NumericFormat value={(SliderValue*0.5).toFixed(0)} displayType={'text'} thousandSeparator={" "} suffix={' Ft'} />
        <NumericFormat value={(SliderValue*0.75).toFixed(0)} displayType={'text'} thousandSeparator={" "} suffix={' Ft'} />
        <NumericFormat value={(SliderValue).toFixed(0)} displayType={'text'} thousandSeparator={" "} suffix={' Ft'} />
        <NumericFormat value={(SliderValue*1.25).toFixed(0)} displayType={'text'} thousandSeparator={" "} suffix={' Ft'} />
        <NumericFormat value={(SliderValue*1.5).toFixed(0)} displayType={'text'} thousandSeparator={" "} suffix={' Ft'} />
    </div>
    </>
  )
}

export default SliderInput