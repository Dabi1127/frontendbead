import React from 'react'
import { useState } from 'react'

const FamilySelect = ({isSet,seteltartott,setkedvez}) => {
    const [localeltartott, setlocaleltartott] = useState(0)
    const [localkedvez, setlocalkedvez] = useState(0)
    if(isSet){
        return (
            <div className='text-secondary text-sm'>
                <button onClick={eltartottUp} className='btn btn-secondary btn-xs'>+</button>
                {localeltartott}
                <button onClick={eltartottDown} className='btn btn-secondary btn-xs'>-</button>
                Eltartott, ebből kedvezményezett:
                <button onClick={kedvezUp} className='btn btn-secondary btn-xs'>+</button>
                {localkedvez}
                <button onClick={kedvezDown} className='btn btn-secondary btn-xs'>-</button>
            </div>
        )
    }else{
        return
    }
    function eltartottUp(){
        seteltartott(localeltartott+1);
        setlocaleltartott(localeltartott+1);
    }
    function eltartottDown(){
        if(localeltartott > 0 && localeltartott > localkedvez) {seteltartott(localeltartott-1); setlocaleltartott(localeltartott-1)}
    }
    function kedvezUp(){
        if(localkedvez < localeltartott && localkedvez < 3) {setkedvez(localkedvez+1);setlocalkedvez(localkedvez+1)}
    }
    function kedvezDown(){
        if(localkedvez > 0) {setkedvez(localkedvez-1);setlocalkedvez(localkedvez-1)}
    }
}

export default FamilySelect