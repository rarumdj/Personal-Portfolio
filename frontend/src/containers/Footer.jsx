import React, { useEffect, useState } from "react";
import emailjs, { send } from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { client } from "../client";
import { AppWrap, MotionWrap } from "../wrapper";
import { motion } from "framer-motion";

const Footer = () => {
  const success = () =>
    toast("Message Delivered", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const error = () =>
    toast.error("Message Delivery Failed", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.EMAIL_JS_PROJECT_ID,
        process.env.EMAIL_JS_TEMPLATE_ID,
        toSend,
        process.env.EMAIL_JS_TOKEN
      )
      .then((response) => {
        success();
        setToSend({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => error());
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const [footer, setFooter] = useState([]);

  useEffect(() => {
    const query = '*[_type == "footer"]';

    client.fetch(query).then((data) => setFooter(data));
  }, []);
  let footerTxt = {};
  footer.forEach((footertxt) => (footerTxt = footertxt));

  const date = new Date().getFullYear();
  return (
    <div id="contact" className="px-4 md:px-24 lg:px-44">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <motion.div
        whileHover={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-col justify-center items-center py-12 md:py-24 "
      >
        <div className="flex flex-col justify-center space-y-4 mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold text-blue-600">
            {footerTxt.section}
          </h1>
          <p className="lg:text-xl sm:text-sm text-center text-blue-600">
            {footerTxt.subtext1} <br className="lg:block hidden" />
            {footerTxt.subtext2}
          </p>
        </div>
        <div className="xl:w-2/3 flex md:flex-row justify-center flex-col md:space-x-6 space-x-0 md:space-y-0 space-y-6 mb-8">
          <div className="h-20 px-4 bg-green-100 rounded-md flex w-72 space-x-5 justify-between">
            <i className="gg-mail my-auto"></i>
            <p className="my-auto lg:text-lg md:text-base text:sm text-gray-700">
              <a href="mailto:davemoses3@gmail.com">{footerTxt.email}</a>
            </p>
          </div>
          <div className="h-20 px-4 bg-purple-200 rounded-md flex w-72 space-x-5 justify-between">
            <i className="gg-smartphone my-auto"></i>
            <p className="my-auto lg:text-lg md:text-base text:sm text-gray-700">
              + Shoot-me-a mail
            </p>
          </div>
        </div>
        <div className="lg:w-3/4 w-full h-full">
          <form onSubmit={sendEmail} className="space-y-4">
            <div className="flex md:flex-row flex-col justify-between items-center space-x-0  md:space-x-4 space-y-4 md:space-y-0">
              <input
                className="rounded-sm w-full p-4 outline-none bg-transparent border border-blue-600 text-xs sm:text-sm text-gray-700"
                type="text"
                name="name"
                placeholder="Name"
                value={toSend.name}
                onChange={handleChange}
                required
              />
              <input
                className="rounded-sm w-full p-4 outline-none bg-transparent border border-blue-600 text-xs sm:text-sm text-gray-700"
                type="email"
                name="email"
                placeholder="Email"
                value={setToSend.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <textarea
                className="rounded-sm w-full p-4 outline-none bg-transparent border border-blue-600 text-xs sm:text-sm text-gray-700"
                type="text"
                placeholder="Message"
                rows={5}
                name="message"
                value={send.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="rounded-sm w-full p-4 outline-none bg-transparent border border-blue-600 font-medium text-sm sm:text-xl text-blue-600"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </motion.div>
      <div className="border-t py-6">
        <p className="sm:text-sm text-xs text-gray-500 text-center">
          © {date} Designed and Built :: David Johnson
        </p>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Footer, ""), "contact", "relative", "hidden");
