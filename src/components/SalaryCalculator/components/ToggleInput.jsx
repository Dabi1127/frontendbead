import React from 'react'

const ToggleInput = ({text, setisSet}) => {
    function handleOnChange(e){
        if(setisSet != null){
          setisSet(e.target.checked);
        }
        console.log(e.target.checked);
    }
  return (
    <div className='flex'>
        <input onChange={handleOnChange} type="checkbox" className="toggle"/>
        <p className="text-primary"> {text}</p>
    </div>
  )
}

export default ToggleInput