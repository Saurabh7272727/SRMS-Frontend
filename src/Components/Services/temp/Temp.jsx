import React from 'react'
import './Temp.scss';
import { useNavigate } from 'react-router-dom';
const Temp = ({ value }) => {
    const Navi = useNavigate();
    return (
        <>
            <div className="temp_wrapper" >
                <button onClick={() => Navi(`/service/${value}`)}>{value}</button>
            </div>
        </>
    )
}

export default Temp