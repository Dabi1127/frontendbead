import React from 'react'
import ToggleInput from './ToggleInput'
import { useState } from 'react';
import DateSelector from './DateSelector';

const FrissHazasok = () => {
    const [isSet, setisSet] = useState(false);
    const [joDatum, setJodatum] = useState(false);
    return (
        <>
        <ToggleInput text="Friss házasok kedvezénye" setisSet={setisSet} />
        <DateSelector setJodatum={setJodatum} isSet={isSet}/>
        </>
    )
}

export default FrissHazasok