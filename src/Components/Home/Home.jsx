import React, { useState } from 'react'
import { AdminFetch } from '../../Store/server.js';
import { ToastContainer } from 'react-toastify';
import { ErrorToast, SucessToast } from '../../Utils/ToastMessage.js';
import Charts from '../Charts/Charts.jsx';
import './Home.scss';

const Home = ({ id }) => {
    const { dataAdmin, loading } = AdminFetch(`/profile/${id}`);
    const { sucess, message, status, data } = dataAdmin;
    const [inputUpdate, setInputUpdate] = useState(false);
    const [updateddata, setUpdatedData] = useState({
        fullName: "",
        position: "",
        phoneNumber: ""
    });
    if (loading) {
        return <h1>Loading....</h1>
    }

    const ClickHandler = () => {
        setInputUpdate(true);
    }

    const UpdatedDataByAdmin = (e) => {
        const { name, value } = e.target;
        const copydataUpdated = { ...updateddata };
        copydataUpdated[name] = value;
        setUpdatedData(copydataUpdated);
    }

    const homeFormSubmitHandler = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:8080/api/admin/profileUpdate';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...updateddata, id })
        });
        const result = await response.json();
        const { sucess, message } = result;
        if (!sucess) {
            return ErrorToast(message);
        }
        return SucessToast(message);
    }

    return (
        <>
            {
                sucess ? <div className='admin_container'>
                    <form method='POST' onSubmit={homeFormSubmitHandler}>
                        <div className="form_conatiner">
                            <label htmlFor="fullName">
                                <h5>Full-Name</h5>
                                {
                                    inputUpdate ?
                                        <input type="text" name="fullName" onChange={UpdatedDataByAdmin} /> :
                                        <input type="text" name="fullName" value={data?.fullName} onClick={ClickHandler} />
                                }

                            </label>
                            <label htmlFor="university">
                                <h5>University</h5>
                                <input type="text" name="university" value={data?.university} disabled />
                            </label>
                            <label htmlFor="position">
                                <h5>Position</h5>
                                {
                                    inputUpdate ?
                                        <input type="text" name="position" onChange={UpdatedDataByAdmin} /> :
                                        <input type="text" name="position" value={data?.position} onClick={ClickHandler} />
                                }

                            </label>
                            <label htmlFor="phoneNumber">
                                <h5>Mobile number</h5>
                                {
                                    inputUpdate ? <input type="number" name="phoneNumber" onChange={UpdatedDataByAdmin} /> :
                                        <input type="number" name="phoneNumber" value={data?.phoneNumber} onClick={ClickHandler} />
                                }
                            </label>
                            <button type='submit'>Update</button>
                        </div>
                        <div className="form_conatiner_2">
                            <label htmlFor="email">
                                <h5>Email</h5>
                                <input type="email" name="email" value={data?.email} disabled />
                            </label>
                            <label htmlFor="adminkey">
                                <h5>AdminKey</h5>
                                <input type="text" name="adminkey" value={data?.adminkey} disabled />
                            </label>
                        </div>
                    </form>
                    <div className='admin_profile_pic'>
                        <img src={data?.img} alt="adminProfilePic" />
                    </div>
                </div>
                    :
                    <div><br /><br /><h2>Something is wrong:admin/page</h2></div>
            }
            <div className="label">
                <h5 style={{ color: "white" }}>CraetedAt - {data?.createdAt}</h5>
            </div>
            <Charts id={id} />
            <ToastContainer />
        </>
    )
}

export default Home;