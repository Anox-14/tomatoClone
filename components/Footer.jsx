import React from "react";

const Footer = ({view}) => {
  return (
    <>
    {view ? <footer className="px-[8rem] py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-[2rem] font-bold">tomato</h1>
        <div className="flex gap-4">
          <button className="border rounded-lg p-3 flex gap-3 items-center">
            {" "}
            <img
              src="https://imgs.search.brave.com/sv_x8SHL6bjnGZjlk4WaS81rwBZigox6vg7jXIT6CfQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/NC80MS9GbGFnX29m/X0luZGlhLnN2Zy81/MTJweC1GbGFnX29m/X0luZGlhLnN2Zy5w/bmc"
              className="h-6 w-6 object-cover"
              alt=""
            />{" "}
            India <i className="  bx bx-chevron-down"></i>
          </button>
          <button className="border rounded-lg p-3 flex gap-3 items-center">
            <i className="bx bx-world"></i>English{" "}
          </button>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <div>
          <h1 className="tracking-[0.2rem] font-semibold">ABOUT TOMATO</h1>
          <ul className="text-slate-500">
            <li>Who We Are</li>
            <li>Blog</li>
            <li>Work With Us</li>
            <li>Investor Relations</li>
            <li>Report Fraud</li>
            <li>Press Kit</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div> 
          <h1 className="tracking-[0.2rem] font-semibold">ZOMAVERSE</h1>
          <ul className="text-slate-500">
            <li>Tomato</li>
            <li>Blinkit</li>
            <li>Feeding India</li>
            <li>Hyperpure</li>
            <li>Zomaland</li>
            
          </ul>
        </div>
        <div>
          <h1 className="tracking-[0.2rem] font-semibold">FOR RESTAURANTS</h1>
          <ul className="text-slate-500">
            <li>Partner With US</li>
            <li>Apps For You</li>
          
          </ul>
        </div>
        <div>
          <h1 className="tracking-[0.2rem] font-semibold">LEARN MORE</h1>
          <ul className="text-slate-500">
            <li>Privacy</li>
            <li>Security</li>
            <li>Trems</li>
            <li>Sitemap</li>
            
          </ul>
        </div>
        <div>
          <h1 className="tracking-[0.2rem] font-semibold">SOCIAL LINKS</h1>
          <ul className="text-slate-500">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>twitter</li>
            <li>youtube</li>
            <li>linkneed</li>
           
          </ul>
        </div>
      </div>
      <hr className="mt-8"/>

      <p className="mt-6 text-sm text-slate-500">By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>

    </footer> : null}</>
  );
};

export default Footer;
