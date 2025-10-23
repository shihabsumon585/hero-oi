import React from 'react';

const Footer = () => {
    return (
        <div className='bg-neutral text-neutral-content p-10'>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content ">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                </nav>
            </footer>
            <p className='link link-hover text-center mt-4 text-sm'>Copyright © 2025 Apple Inc. All rights reserved.</p>
        </div>
    );
};

export default Footer;