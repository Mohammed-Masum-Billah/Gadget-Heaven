import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="footer bg-base-200 text-base-content justify-center border-base-300 border-t px-10 py-4">
        <div className="grid-flow-col justify-center items-center">
          <p>
            <span className='text-xl font-semibold justify-center items-center text-center'>Gadget Heaven</span>
            <br />
            Leading the way in cutting edge technology and innovation.
          </p>
        </div>
      </footer>
      <footer className="footer bg-base-200 text-base-content p-10">
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
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>

    </>
  );
};

export default Footer;