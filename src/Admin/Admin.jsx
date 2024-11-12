import React, { useState } from 'react';
import './Admin.scss';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { SucessToast, ErrorToast } from '../Utils/ToastMessage.js';
const Admin = () => {
    const Navi = useNavigate();
    const [signUpData, setSignUpData] = useState({
        key: '',
        email: '',
    });
    const [loading, setLoading] = useState(false);
    const InputChangeHandler = (e) => {
        const { name, value } = e.target;
        const copySignUpData = { ...signUpData };
        copySignUpData[name] = value;
        setSignUpData(copySignUpData);
    }

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        const { key, email } = signUpData;
        if (!email || !key) {
            setLoading(false);
            return ErrorToast('All field are required');
        }

        const url = 'http://localhost:8080/api/admin/signup/email'
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(signUpData)
        });

        const result = await response.json();
        const { sucess, message, status } = result;
        console.log(result);
        if (!sucess) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
            return ErrorToast(message);
        }
        setLoading(true);
        SucessToast(message);
        setTimeout(() => {
            Navi(`/admin/user/${email}/${key}/SRMS`);
        }, 3000);
    }


    return (
        <>
            <div className="admin_page_section">
                <div className="text_section">
                    <h3> “Welcome to the Admin Dashboard! Here, you can manage users, view reports, and configure settings to optimize your platform.”</h3>
                    <br /><br /><br />
                    <h2>“© 2024 Your SRMS. All rights reserved.”
                        Creator = saurabh sharma
                    </h2>
                </div>
                <div className="form_section">
                    <h3>SignUp</h3><hr />
                    <form method='POST' onSubmit={(e) => { formSubmitHandler(e) }}>
                        <div>
                            <input onChange={InputChangeHandler} type="text" name='key' placeholder='Admin key => (SRMS KEY)' value={signUpData.key} autoFocus />
                        </div>
                        <div>
                            <input onChange={InputChangeHandler} type="email" name='email' value={signUpData.email} placeholder='Enter the email' />
                        </div>
                        <button type="submit">{loading ? "loading...." : "Next"}</button>
                    </form>
                    <p>
                        if you have already account <span onClick={() => Navi('/admin/login')}>Login</span>
                    </p>
                    <ToastContainer />
                </div>
            </div>
        </>
    )
}

export default Admin;