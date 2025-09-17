import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";
import { playSound } from "../utils/playSound";
const Contact = ({ isDarkMode }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log('✅ Email sent:', result.text);
        alert('✅ Message sent successfully!');
        setLoading(false);
      })
      .catch((error) => {
        console.error('❌ Email error:', error.text);
        alert('❌ Failed to send message.');
        setLoading(false);
      });

    e.target.reset();
  };

  return (
    <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="...your hero classes"
>
    <div className={`min-h-screen flex flex-col items-center justify-center px-4 ${
      isDarkMode ? 'bg-[#101010] text-white' : 'bg-white text-gray-800'
    }`}>
      <div className="text-center mt-10 mb-6">
        <h2 className="text-3xl font-bold">Need a Developer?</h2>
        <h2 className="text-3xl font-bold">Let’s Chat</h2>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-2xl flex flex-col space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-6 sm:space-y-0">
          <div className="flex-1">
            <label className="block mb-1 font-medium">First Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Write your name"
              className={`w-full border-2 px-4 py-2 rounded focus:outline-none transition-colors duration-300 ${
                isDarkMode
                  ? "bg-[#1c1c1c] border-gray-300 text-white focus:border-gray-500"
                  : "bg-white border-gray-800 text-black focus:border-gray-400"
              }`}
              required
            />
          </div>

          <div className="flex-1">
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              name="user_email"
              placeholder="Write your email"
              className={`w-full border-2 px-4 py-2 rounded focus:outline-none transition-colors duration-300 ${
                isDarkMode
                  ? "bg-[#1c1c1c] border-gray-300 text-white focus:border-gray-500"
                  : "bg-white border-gray-800 text-black focus:border-gray-400"
              }`}
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            name="message"
            placeholder="Write your message"
            className={`w-full border-2 px-4 py-2 h-40 rounded focus:outline-none transition-colors duration-300 resize-none ${
              isDarkMode
                ? "bg-[#1c1c1c] border-gray-300 text-white focus:border-gray-500"
                : "bg-white border-gray-800 text-black focus:border-gray-400"
            }`}
            required
          ></textarea>
        </div>

        <div className="text-center mt-4">
          <button
            type="submit"
            onClick={() => playSound("/sounds/darkmode.wav")}
            disabled={loading}
            className={`relative px-6 py-2 bg-[#6c4ced] text-white font-medium rounded transition-transform duration-300 ${
              loading ? "cursor-not-allowed" : "hover:scale-105"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <span className="loader mr-2"></span>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>

      {/* CSS for loader */}
      <style>{`
        .loader {
          width: 16px;
          height: 16px;
          border: 3px solid white;
          border-top: 3px solid transparent;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div></motion.div>
  );
};

export default Contact;
