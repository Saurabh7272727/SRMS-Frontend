import React from "react";
import './Student.scss';



const Student = () => {
    return (
        <>
            <div className="student_img_wrapper">
                <img src="https://static.vecteezy.com/system/resources/previews/002/294/181/non_2x/welcome-to-university-web-banner-design-free-vector.jpg" alt="" />
            </div>
            <br />
            <h2 style={{ padding: "0px 10px" }}>Stduents list :</h2>
            <br />
            <p style={{ padding: "0px 10px" }}>There are see list of student are enroll in SRMS student mangement system , there are not edit & interChanging any field of student regrading.  <br /><br />
                <p style={{ color: "red", padding: "0px 10px" }}>NOTE -  Only see list of student and how many student present here to use flitering.</p>
            </p><br />
            <hr />
        </>
    )
}

export default Student;