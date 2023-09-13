import React from 'react'

const Footer = () => {
    return (
        <div style={{ width: 1440, height: 489, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
            <div style={{ width: 1440, height: 386, position: 'relative', background: '#E4E4E4' }}>
                <div style={{ left: 150, top: 71, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '700', wordWrap: 'break-word' }}>Brand</div>
                <div style={{ left: 150, top: 124, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}>Subscribe to our Newsletter</div>
                <div style={{ width: 345, left: 150, top: 156, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                <div style={{ width: 345, paddingLeft: 11, paddingRight: 11, paddingTop: 13, paddingBottom: 13, left: 150, top: 222, position: 'absolute', background: '#F5F5F5', borderRadius: 5, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                    <div style={{ color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}><input type='text' placeholder='Enter Email' style={{
                        width: "300px", height: "20px", margin: "0", border: "none", outline: "none", background: '#F5F5F5'
                    }}></input></div>
                </div>
                <button style={{ width: 51, height: 47, left: 444, top: 222, position: 'absolute', background: '#7C3FFF', borderRadius: 5 }}>
                <i class='bx bxs-send' style={{marginTop:"6px", fontSize:"25px"}}></i>
                </button>
                <div style={{ left: 641, top: 71, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 87, display: 'inline-flex' }}>
                    <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
                        <div style={{ color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}>Company</div>
                        <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>About Us</div>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Blog</div>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Careers</div>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Our team</div>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Help Center</div>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Outlets</div>
                        </div>
                    </div>
                    <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
                        <div style={{ color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}>Shop</div>
                        <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Gift Cards</div>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Our Products</div>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>My Account</div>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Shipping</div>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Returns</div>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Rewards</div>
                        </div>
                    </div>
                    <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
                        <div style={{ color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}>Support</div>
                        <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Contact Us</div>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Payment Options</div>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Store Locator</div>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Accessibility</div>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Affiliates</div>
                        </div>
                    </div>
                    <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
                        <div style={{ color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}>FAQ</div>
                        <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Rewards FAQ</div>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Product Care</div>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Size Guide</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: 1440, height: 103, position: 'relative', background: '#E4E4E4' }}>
                <div style={{ left: 150, top: 41, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>@2023 All rights reserved. Designed by Brand</div>
                <div style={{ left: 1007, top: 41, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 50, display: 'inline-flex' }}>
                    <div style={{ color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Payment Partners</div>
                    <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex' }}>
                        <div style={{ width: 15, height: 17.70, position: 'relative' }}>
                            <div style={{ width: 13.54, height: 15.68, left: 0, top: 0.05, position: 'absolute', background: '#27346A' }}></div>
                            <div style={{ width: 13.54, height: 15.68, left: 0, top: 0.05, position: 'absolute', background: '#27346A' }}></div>
                            <div style={{ width: 11.33, height: 13.15, left: 3.62, top: 4.53, position: 'absolute', background: '#2790C3' }}></div>
                            <div style={{ width: 8.79, height: 6.54, left: 4.68, top: 3.97, position: 'absolute', background: '#1F264F' }}></div>
                        </div>
                        <div style={{ width: 24, height: 18.67, background: '#4758F0' }}></div>
                        <div style={{ width: 28.98, height: 19, position: 'relative' }}>
                            <div style={{ width: 7.83, height: 14.94, left: 10.57, top: 2.03, position: 'absolute', background: '#FF5F00' }}></div>
                            <div style={{ width: 14.48, height: 19, left: 0, top: 0, position: 'absolute', background: '#EB001B' }}></div>
                            <div style={{ width: 14.48, height: 19, left: 14.50, top: 0, position: 'absolute', background: '#F79E1B' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer