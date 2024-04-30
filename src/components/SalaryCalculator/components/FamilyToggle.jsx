import React from 'react'
import ToggleInput from './ToggleInput'
import FamilySelect from './FamilySelect'
import { useState } from 'react'

const FamilyToggle = ({seteltartott,setkedvezmenyezett}) => {
    const [isSet, setisSet] = useState(false)
  return (
    <>
    <ToggleInput setisSet={setisSet} text="Családi adókedvezmény"/>
    <FamilySelect seteltartott={seteltartott} setkedvez={setkedvezmenyezett} isSet={isSet}/>
    </>
  )
}

export default FamilyToggle