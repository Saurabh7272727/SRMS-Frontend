import React, { useState } from 'react';
import './FileUpload.scss'; // Import the CSS file for styling
import { useParams, useNavigate } from 'react-router-dom';

const FileUpload = () => {
    const { id } = useParams();
    return (
        <>
            <div className="img_uploader">
                <form action={`http://localhost:8080/api/img/${id}`} method='POST' enctype="multipart/form-data">
                    <input type="password" name='key' value={import.meta.env.VITE_APP_BACKEND_KEY} />
                    <input type="file" name='img' placeholder='upload profile img' autoFocus required />
                    <button type='submit'>Upload</button>
                </form>
            </div>
        </>
    );
};

export default FileUpload;