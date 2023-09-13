import React, { useState } from 'react'
import "./Try.css"
const Try = () => {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
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
                <div className='inputs'>

                    <div className='input'>
                        <img src={file} alt='Input' />
                    </div>
                    <div className='output'>
                        <img src={file} alt='Output' />
                    </div>
                </div>
                <div className='share'>
                    <div className='download'>
                        <button className='btn'>Download</button>
                    </div>
                    <div className='social'>
                        <button className='btn-share'><i class='bx bxl-facebook-circle'></i></button>
                        <button className='btn-share'><i class='bx bxl-whatsapp' ></i></button>
                        <button className='btn-share'><i class='bx bxl-twitter' ></i></button>
                        <button className='btn-share'><i class='bx bxl-instagram-alt' ></i></button>
                        <button className='btn-share'><i class='bx bxl-telegram' ></i></button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Try;