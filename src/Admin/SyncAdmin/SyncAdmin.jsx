import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import './SyncAdmin.scss';
import Student from '../../Components/Student/Student.jsx';
import Teachers from '../../Components/Teachers/Teachers.jsx';
import Home from '../../Components/Home/Home.jsx';
import { FaHandPointRight } from "react-icons/fa";
const SyncAdmin = () => {
    const Navi = useNavigate();
    const { id, router } = useParams();
    return (
        <>
            <div className="admin_wrapper_container">
                <div className="dashBoard_admin">
                    <div onClick={() => Navi(`/admin/${id}/Home`)}><h4>Home</h4></div>
                    <div onClick={() => Navi(`/admin/${id}/Teachers`)}><h4>Teachers</h4></div>
                    <div onClick={() => Navi(`/admin/${id}/Student`)}><h4>Student</h4></div>
                </div>
                <div className="show_to_all_optios">
                    {router == "Home" ? <Home id={id} /> : router == "Teachers" ? <Teachers id={id} /> : <Student />}
                </div>
            </div>
        </>
    )
}

export default SyncAdmin;