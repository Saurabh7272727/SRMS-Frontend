import React, { useState } from 'react'
import './Teachers.scss';
import { SucessToast, ErrorToast } from '../../Utils/ToastMessage.js';
import { ToastContainer } from 'react-toastify';
import { AdminFetch } from '../../Store/server.js';
import { useNavigate } from 'react-router-dom';
import { IoReloadOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const Teachers = ({ id }) => {
    const Navi = useNavigate();
    const { dataAdmin, loading } = AdminFetch(`/teachersList/${id}`);
    const { data } = dataAdmin;
    const [inputData, setInputData] = useState({
        fullName: "",
        email: "",
        college: "BIT",
        branch: "IT",
        course: "B.tech",
        year: 1,
    });


    const InputHandler = (e) => {
        const { name, value } = e.target;
        const copyInputData = { ...inputData };
        copyInputData[name] = value;
        setInputData(copyInputData);
    }

    const teacherFormSubmit = async (e) => {
        e.preventDefault();
        console.log(inputData);
        const url = 'http://localhost:8080/api/admin/teacher/createAccount';
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify({ ...inputData, adminId: id })
        });

        const result = await response.json();
        const { sucess, message, status } = result;
        if (!sucess) {
            ErrorToast(message);
        } else {
            SucessToast(message);
            setInputData({
                fullName: "",
                email: "",
                college: "BIT",
                branch: "IT",
                course: "B.tech",
                year: 1,
            })
        }
    }

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <>
            <div className="container_wrapper_box_forTeachers">
                <form method='POST' onSubmit={teacherFormSubmit}>
                    <input type="text" name='fullName' value={inputData?.fullName} placeholder='Enter full name of teacher' required autoFocus onChange={InputHandler} />
                    <input type="email" name='email' value={inputData?.email} placeholder='email address' onChange={InputHandler} required />
                    <input type="text" name='college' value={'BIT'} placeholder='College' />
                    <select name="branch" placeholder="Branch" onChange={InputHandler}>
                        <option value="IT">IT</option>
                        <option value="CSE">CSE</option>
                    </select>
                    <select name="course" placeholder="Course" onChange={InputHandler}>
                        <option value="B.tech">B.tech</option>
                    </select>
                    <select type='number' name="year" placeholder="Year" onChange={InputHandler}>
                        <option value="1">..Year</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button type='submit'>Create</button>
                </form>
            </div><br />
            <div className="text_container_for_teachers">
                <fieldset style={{ padding: "10px 10px" }}>
                    <p>Teachers Accounts Mangement</p>
                    <br />
                    <p>
                        Classroom management is an important topic in teacher education, as it has a strong
                        impact on students’ engagement. However, untangling the concepts influencing teachers’
                        classroom management practices is a question that needs further investigation. Using data
                        from a survey of 154 vocational teachers participating in teacher education, this study examined
                        associations between classroom management practices, teaching experience, and teachers’ beliefs
                        (general pedagogical beliefs, beliefs about student motivation, and self-efficacy beliefs). Results
                        highlighted associations between the different types of beliefs, and between teachers’ beliefs
                        and practices. Teaching experience was positively related to self-efficacy and beliefs in constructivism but did not impact practices.
                    </p>
                    <br />
                    <br />
                    <h3 style={{ textDecoration: "underline" }}>ENROLL : SRMS</h3><br />
                    <p>Enroll today and practice real-world strategies to build and grow strong relationships with your partners. Using practical examples and case studies, learn to overcome common challenges in Account Management, while maintaining loyalty with partners of all shapes and sizes. This course is for beginners and those who are new to Account Management or thinking about becoming an Account Manager.</p>
                </fieldset>
            </div>
            <br />
            <div className="table_container">
                <table>
                    <caption><h2 style={{ color: "black" }}>Teachers list :</h2> <IoReloadOutline onClick={refreshPage} /></caption>
                    <tr>
                        <th>fullname</th>
                        <th>email</th>
                        <th>college</th>
                        <th>branch</th>
                        <th>course</th>
                        <th>year</th>
                        <th>options</th>
                    </tr>
                    {loading ? "..loading" : ""}
                    {dataAdmin?.data?.length == 0
                        ? <tr>
                            <td>No name</td>
                            <td>No email</td>
                            <td>No college</td>
                            <td>No branch</td>
                            <td>No course</td>
                            <td>No year</td>
                            <td>No options</td>
                        </tr> : data?.map((e, index, array) => {
                            return (
                                <tr key={index}>
                                    <td>{e?.fullName}</td>
                                    <td>{e.email}</td>
                                    <td>{e.college}</td>
                                    <td>{e.branch}</td>
                                    <td>{e.course}</td>
                                    <td>{e.year}</td>
                                    <td style={{ color: "red", cursor: "pointer" }}><MdDelete /></td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
            <ToastContainer />

        </>
    )
}

export default Teachers;