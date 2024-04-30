import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = ({setJodatum, isSet}) => {
    const [jogosult, setjogosult] = useState(false);
    if(isSet){
        return (
            <>
            <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Dátum megadása</button>
            <div className='text-secondary text-sm'>{jogosult ? 'Jogosult' : 'Nem jogosult'}</div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <input type="date" onChange={checkDate} placeholder='Adjon meg egy dátumot' />
                    <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                    </div>
                </div>
            </dialog>
            </>
        )
    }else{
        return (<></>)
    }
    function checkDate(e) {
        const selectedDate = new Date(e.target.value);
        const today = new Date();
        const twoYearsAgo = new Date(today.getFullYear() - 2, today.getMonth(), today.getDate());
        console.log(selectedDate.getTime(), "\n", twoYearsAgo.getTime(), "\n", selectedDate >= twoYearsAgo);
        setJodatum(selectedDate.getTime() >= twoYearsAgo.getTime());
        setjogosult(selectedDate.getTime() >= twoYearsAgo.getTime());
        console.log(selectedDate.getTime() >= twoYearsAgo.getTime());
      };
}

export default DateSelector