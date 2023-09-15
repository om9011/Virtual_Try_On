import React, { useEffect, useState } from 'react';
import "./Try.css";


const Loader = () => (
    <div className="loader">
        Loading...
    </div>
);

const Try = () => {
    const  [image, setimage] = useState('');
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

    function handleChange(e) {
        setFile(e.target.files[0]);
    }
    
    async function handleUpload() {
        if (file) {
            setUploading(true);

            const formData = new FormData();
            formData.append('image', file);

            try {
                const response = await fetch('http://localhost:5000/upload', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    console.log('File uploaded successfully');
                    // Handle success here, e.g., show a success message to the user

                    // Show the loader for 10 seconds
                    setShowLoader(true);
                    setTimeout(() => {
                        setShowLoader(false);
                        setimage('https://i.ibb.co/6rskhYQ/try.jpg');
                    }, 10000);
                } else {
                    console.error('File upload failed');
                    // Handle the error here, e.g., show an error message to the user
                }
            } catch (error) {
                console.error('An error occurred while uploading the file:', error);
                // Handle any network-related errors here
            } finally {
                setUploading(false);
            }
        }
    }

    return (
        <div className="try">
            <div className='notation'>
                <div className='tryon'>
                    <h2 className='heading' style={{ color: "Black", fontWeight: 600 }}>Virtual Try-On</h2>
                    <p className='subtitle'> : Try before you buy</p>
                </div>
                <label className="file-input-container">
                    <input type="file" onChange={handleChange} />
                </label>
                <button className="btn-upload" onClick={handleUpload} disabled={uploading}>
                    {uploading ? 'Uploading...' : 'Upload'}
                </button>
                {showLoader && <Loader />}

                <div className='inputs'>
                    <div className='input'>
                        <img src={file ? URL.createObjectURL(file) : ''} alt='Input' />
                    </div>
                    {!showLoader && (   
                        <div className='output'>
                            <img src={image} alt='Output' />
                        </div>
                    )}
                </div>

                <div className='share'>
                    <div className='download'>
                        <button className='btn'>Download</button>
                    </div>
                    <div className='social'>
                        <button className='btn-share'>
                            <i className='bx bxl-facebook-circle'></i>
                        </button>
                        <button className='btn-share'>
                            <i className='bx bxl-whatsapp'></i>
                        </button>
                        <button className='btn-share'>
                            <i className='bx bxl-twitter'></i>
                        </button>
                        <button className='btn-share'>
                            <i className='bx bxl-instagram-alt'></i>
                        </button>
                        <button className='btn-share'>
                            <i className='bx bxl-telegram'></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Try;
