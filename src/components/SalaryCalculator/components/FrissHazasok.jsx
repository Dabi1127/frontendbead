import React from 'react'
import ToggleInput from './ToggleInput'
import { useState } from 'react';
import DateSelector from './DateSelector';

const FrissHazasok = () => {
    const [isSet, setisSet] = useState(false);
    return (
        <>
        <ToggleInput text="Friss házasok kedvezénye" setisSet={setisSet} />
        <DateSelector isSet={isSet}/>
        </>
    )
}

export default FrissHazasok