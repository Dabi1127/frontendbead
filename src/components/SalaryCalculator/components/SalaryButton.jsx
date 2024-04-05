import React from 'react'

const SalaryButton = ({SalaryValue,setSalaryValue,setSliderValue, changeAmount, text}) => {
  return (
    <button onClick={(e)=>{setSalaryValue(SalaryValue*changeAmount),setSliderValue(SalaryValue*changeAmount)}} className="btn btn-secondary btn-outline">{text}</button>
  )
}

export default SalaryButton