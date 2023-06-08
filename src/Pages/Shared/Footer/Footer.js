import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=''>
            <div>
                <footer className="footer p-10 bg-neutral text-neutral-content">
                    <div>
                        <span className="footer-title">Services</span>
                        <Link to='/home' className="link link-hover">Home</Link>
                        <Link to='/blog' className="link link-hover">Blog</Link>
                        
                        <Link className="link link-hover">Advertisement</Link>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <Link className="link link-hover">About us</Link>
                        <Link className="link link-hover">Contact</Link>
                        
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <Link className="link link-hover">Terms of use</Link>
                        <Link className="link link-hover">Privacy policy</Link>
                        <Link className="link link-hover">Cookie policy</Link>
                    </div>
                    <div>
                        <p>Copyright © 2022 - All right reserved by <span className='font-bold'>Car Dealer Ltd</span> </p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;