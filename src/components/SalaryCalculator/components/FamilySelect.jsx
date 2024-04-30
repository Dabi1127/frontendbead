import React from 'react'
import { useState } from 'react'

const FamilySelect = ({isSet}) => {
    const [eltartott, seteltartott] = useState(0)
    const [kedvez, setkedvez] = useState(0)
    if(isSet){
        return (
            <div className='text-secondary text-sm'>
                <button onClick={eltartottUp} className='btn btn-secondary btn-xs'>+</button>
                {eltartott}
                <button onClick={eltartottDown} className='btn btn-secondary btn-xs'>-</button>
                Eltartott, ebből kedvezményezett:
                <button onClick={kedvezUp} className='btn btn-secondary btn-xs'>+</button>
                {kedvez}
                <button onClick={kedvezDown} className='btn btn-secondary btn-xs'>-</button>
            </div>
        )
    }else{
        return
    }
    function eltartottUp(){
        seteltartott(eltartott+1);
    }
    function eltartottDown(){
        if(eltartott > 0 && eltartott > kedvez) seteltartott(eltartott-1);
    }
    function kedvezUp(){
        if(kedvez < eltartott && kedvez < 3) setkedvez(kedvez+1);
    }
    function kedvezDown(){
        if(kedvez > 0) setkedvez(kedvez-1);
    }
}

export default FamilySelect