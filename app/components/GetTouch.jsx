'use client'
import React, { useEffect, useState } from "react";
import { FaHandshake } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiSitepoint } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa6";
import GlobalApi from "../api/GlobalApi";
import { BiSolidMessageAltCheck } from "react-icons/bi";

const GetTouch = () => {
  const social = [
    {
      plat: "LinkedIn",
      link: "https://www.linkedin.com/in/mostafa-aiman/",
      icon: <IoLogoLinkedin />,
    },
    {
      plat: "Site",
      link: "https://mostafadev.site",
      icon: <SiSitepoint />,
    },
    {
      plat: "Twitter",
      link: "https://x.com/Mostafawazzany1",
      icon: <BsTwitterX />,
    },
    {
      plat: "Email",
      link: "mailto:mostafawazzany@gmail.com",
      icon: <SiGmail />,
    },
    {
      plat: "Instagram",
      link: "https://www.instagram.com/mostafa_elwzzany/",
      icon: <GrInstagram />,
    },
    {
      plat: "Facebook",
      link: "https://www.facebook.com/mostafa.aimanelwzzany/",
      icon: <FaFacebook />,
    },
  ];

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [message, setmessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const apisub = () => {
    setLoading(true);
    GlobalApi.sendMessage(name, email, phone.toString(), message)
      .then((res) => {
        console.log(res);
        setSuccess(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };

  const handleSubmit = () => {
    if (!name || !email || !phone || !message) {
      alert("All fields are required.");
      return;
    }
    apisub();
  };

  return (
    <div id='contact' className="m-4 overflow-x-hidden">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h4 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
          Get in Touch
        </h4>
        <div className="w-24 mx-auto border-t-2 border-t-primary mt-3"></div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        {/* Contact Form Section */}
        <div className="col-span-1 p-5 lg:col-span-2">
          <div className="text-center mb-6">
            <h4 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold flex gap-3 justify-center items-center">
              Contact Us <FaHandshake />
            </h4>
            <div className="w-16 mx-auto border-t-2 border-t-primary mt-3"></div>
          </div>

        {!success ?   <div className="grid font-bold gap-4">
            {/* Name Input */}
            <label className="text-white text-xl sm:text-2xl">Name:</label>
            <div className="bg-primary p-2 rounded-bl-xl rounded-tr-xl">
              <input
                placeholder="Name"
                className="p-2 text-lg sm:text-xl rounded-2xl w-full"
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>

            {/* Email Input */}
            <label className="text-white text-xl sm:text-2xl">Email:</label>
            <div className="bg-primary p-2 rounded-bl-xl rounded-tr-xl">
              <input
                placeholder="Email"
                className="p-2 text-lg sm:text-xl rounded-2xl w-full"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>

            {/* Phone Input */}
            <label className="text-white text-xl sm:text-2xl">Phone:</label>
            <div className="bg-primary p-2 rounded-bl-xl rounded-tr-xl">
              <input
                placeholder="Phone"
                className="p-2 text-lg sm:text-xl rounded-2xl w-full"
                type="text"
                name="phone"
                id="phone"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
            </div>

            {/* Message Input */}
            <label className="text-white text-xl sm:text-2xl">Message:</label>
            <div className="bg-primary p-2 rounded-bl-xl rounded-tr-xl">
              <textarea
                placeholder="Message"
                className="p-2 text-lg sm:text-xl rounded-2xl w-full"
                name="message"
                id="message"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
              ></textarea>
            </div>

            {/* Send Button */}
            <button
              className="mt-4 p-2 rounded-xl text-lg sm:text-xl md:text-2xl bg-primary text-primary2"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
            {success && (
              <div className="mt-4 text-green-500 text-lg sm:text-xl md:text-2xl">
                Message sent successfully!
              </div>
            )}
          </div> : <div className="bg-gradient-to-tr from-green-600 to-green-500 p-5 rounded-xl font-arabicUI2 text-white text-center">
    <h4 className="text-4xl font-bold mb-4 flex place-items-center justify-center gap-4"> <BiSolidMessageAltCheck className=" text-4xl" />
    تم ارسال البيانات</h4>
    <p dir="rtl" className="text-xl">شكراً لتواصلك معنا. سنقوم بالتواصل معك في أقرب وقت ممكن.</p>
  </div>}
        </div>

        {/* Social Links Section */}
        <div className="col-span-1 lg:col-span-4 border-l-0 lg:border-l-2 border-primary p-6">
          <div className="grid grid-cols-2  gap-6">
            {social.map((item, index) => (
              <div
                className="flex flex-col items-center gap-2 m-4 text-white text-center"
                key={index}
              >
                <a
                  target="_blank"
                  href={item.link}
                  rel="noopener noreferrer"
                  className="text-6xl sm:text-7xl md:text-8xl hover:scale-110 hover:text-white/70  transition"
                >
                  {item.icon}
                </a>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold">
                  {item.plat}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTouch;
