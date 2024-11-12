import React from 'react'
import './Service.scss';
import Temp from './temp/Temp';
const Service = () => {
    const arr = [];
    for (let i = 0; i < 99; i++) {
        arr.push(i);
    }
    return (
        <div className='service_section'>
            {
                arr.map((item, index) => {
                    return (
                        <Temp key={index} value={index + 1}
                        />
                    )
                })
            }
        </div>
    )
}

export default Service;