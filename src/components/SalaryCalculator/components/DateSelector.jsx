import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = ({setJodatum, isSet}) => {
    if(isSet){
        return (
            <>
            <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Dátum megadása</button>
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
    function checkDate(e){
        console.log(new Date(e.target.value).getTime());
        console.log(new Date().getTime());
        if(new Date(e.target.value).getTime() >= new Date().getTime()) console.log(true);
        else console.log(false);
    }
}

export default DateSelector