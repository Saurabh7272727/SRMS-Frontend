import React, { useState } from 'react'
import './NavBar.scss';
import Button from '../Buttons/Button';
import { useNavigate } from 'react-router-dom';
import NavTeachers from '../../Teachers/Nav.teachers';
const NavBar = () => {
    const Navi = useNavigate();
    const [navData, setNavData] = useState(false);

    const navTeachersHandler = (e) => {
        if (e === 'teachers') {
            setNavData(!navData);
        } else if (e === 'contact') {
            Navi('/service');
        }
    }
    return (
        <>
            <nav>
                <div className='logo_img_main'>
                    <img src="https://www.srms.it/images/SRMS_logo_C_piccolo.jpg" alt="logo" onClick={() => Navi('/')} />
                </div>
                <div className='middle_nav'>
                    <ul>
                        <li onClick={(e) => navTeachersHandler('contact')}>Service</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li onClick={(e) => navTeachersHandler('teachers')}>Teachers</li>
                    </ul>
                </div>
                <div className='admin_btn'>
                    <Button width={'160px'} height={'50px'} color={"black"} text={"Admin"} link={"/auth/admin"} />
                </div>
            </nav>
            {
                navData ? <div className='teachers_section_hidden'><h1>hello i am  saurabh sharma</h1></div> : ""
            }
        </>
    )
}

export default NavBar;