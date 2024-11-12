import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import './User.scss';
import { SucessToast, ErrorToast } from '../../Utils/ToastMessage.js';
import { ToastContainer, toast } from 'react-toastify';
const User = () => {
    const { email, key } = useParams();
    const Navi = useNavigate();
    const [formData, setFormData] = useState({
        key: key,
        fullName: "",
        email: email,
        university: "",
        position: "",
        img: ".png",
        phoneNumber: "",
        password: "",
        otp: "",
    });

    const inputHandler = (e) => {
        const { name, value } = e.target;
        const copyDataForm = { ...formData };
        copyDataForm[name] = value;
        setFormData(copyDataForm);
    }

    const formHandler = async (e) => {
        e.preventDefault();
        const { key, fullName, email, university, position, img, phoneNumber, password, otp } = formData;
        if (!fullName || !email || !img || !password || !otp) {
            return ErrorToast("All fields must be required");
        }
        const url = 'http://localhost:8080/api/admin/signup/create'
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const result = await response.json();
        const { sucess, message, status, data } = result;
        console.log(result);
        if (!sucess) {
            return ErrorToast(message);
        }
        SucessToast(message);
        setTimeout(() => {
            Navi(`/img/uploader/${data?._id}`);
        }, 4000);
    }

    return (
        <>
            <div className="layer">
                <h2 style={{ color: "rgb(51, 49, 49)" }}>Admin signUp</h2>
            </div>
            <div className="container_admin_form">
                <form method='POST' onSubmit={formHandler}>
                    <div>
                        <p>Full Name</p>
                        <input type="text" name='fullName' onChange={inputHandler} placeholder='Enter your full name' autoFocus />
                    </div>
                    <div>
                        <p>University</p>
                        <input type="text" name='university' onChange={inputHandler} placeholder='University name ex-AKTU' />
                    </div>
                    <div>
                        <p>In Role</p>
                        <input type="text" name='position' onChange={inputHandler} placeholder='what your role in university?' />
                    </div>
                    <div>
                        <p>img</p>
                        <input type="file" name='ing' onChange={inputHandler} placeholder='unable to use' disabled />
                    </div>
                    <div>
                        <p>Mobile Number</p>
                        <input type="number" name='phoneNumber' onChange={inputHandler} placeholder='Enter your mobile number' />
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="password" name='password' onChange={inputHandler} placeholder='Enter your password' />
                    </div>
                    <div>
                        <p>OTP</p>
                        <input type="number" name='otp' onChange={inputHandler} placeholder='Enter your otp:Auth' />
                    </div>
                    <button type="submit">Next</button>
                </form>
                <ToastContainer />
            </div>
        </>
    )
}

export default User;