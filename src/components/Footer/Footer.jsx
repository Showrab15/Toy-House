import React from 'react';
import {  FaFacebook, FaTwitter ,FaInstagram} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logomain.png'


const Footer = () => {
    return (
        <footer className="footer mt-8 p-10 bg-base-200 text-base-content">
        <div>
        <img className="w-[50px] h-[50px]" src={logo} alt=""/>
          <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
        </div> 
        <div>
          <span className="footer-title">Toys</span> 
          <a className="link link-hover">Sports Toys</a> 
          <a className="link link-hover">Mini Fire Truck Toys</a> 
          <a className="link link-hover">Police Car Toys</a> 
          <a className="link link-hover">Testimonial</a>
        </div> 
        <div>
          <span className="footer-title">Toy House</span> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
          <a className="link link-hover">Press kit</a>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    );
};

export default Footer;