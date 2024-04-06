import React from 'react'
import { useState } from 'react'

const FamilySelect = ({isSet}) => {
    const [eltartott, seteltartott] = useState(0)
    const [kedvez, setkedvez] = useState(0)
    if(isSet){
        return (
            <div className='text-secondary text-sm'>
                <button className='btn btn-secondary btn-xs'>+</button>
                {eltartott}
                <button className='btn btn-secondary btn-xs'>-</button>
                Eltartott, ebből kedvezményezett:
                <button className='btn btn-secondary btn-xs'>+</button>
                {kedvez}
                <button className='btn btn-secondary btn-xs'>-</button>
            </div>
        )
    }else{
        return
    }
}

export default FamilySelect