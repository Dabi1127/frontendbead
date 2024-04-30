import React from 'react'
import ToggleInput from './ToggleInput'
import { useState } from 'react';
import DateSelector from './DateSelector';

const FrissHazasok = ({setisSet,isset,setjoDatum}) => {
    //const [isSet, setisSet] = useState(false);
    return (
        <>
        <ToggleInput text="Friss házasok kedvezénye" setisSet={setisSet} />
        <DateSelector setJodatum={setjoDatum} isSet={isset}/>
        </>
    )
}

export default FrissHazasok