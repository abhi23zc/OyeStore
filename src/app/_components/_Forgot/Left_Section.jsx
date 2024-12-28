"use client";
import { useAuth } from "@/app/_contexts/AuthContext";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
// import { motion } from "framer-motion";

const Left_Section = () => {
  const { email } = useAuth();

  const [forgotEmail, setforgotEmail] = useState(email);

  const variants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <div>
      <Image width={200} height={200} alt="OyeStore" src="/images/logo.png" />
      <div className="pr-16 pl-16 mt-16 ">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={variants}
          className="text-3xl  text-center mb-10 text-black"
        >
          Forgot Your Password?
        </motion.h1>

        <div className="ml-5 mr-5">
          <motion.input
            initial="hidden"
            animate="visible"
            variants={variants}
            type="email"
            onChange={(e) => setforgotEmail(e.target.value)}
            value={forgotEmail}
            placeholder="Enter your registered email"
            className="bg-white shadow-gray-400 border-2 border-white shadow-inner rounded-lg p-3 w-full placeholder-gray-400 mt-2  pl-4 pr-4"
          />
        </div>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={variants}
          className="text-sm text-center text-pretty text-gray-400 tracking-wide mt-5 ml-3"
        >
          A link to reset your password will be send to your registered mail.
          After resetting your password go to the login page and login again.
        </motion.p>
        <div className="flex justify-center">
          <motion.button
            initial="hidden"
            animate="visible"
            variants={variants}
            className="font-bold  mt-14 text-[#303030] bg-[#F0692F] p-3 w-44 rounded-xl shadow-gray-500 shadow-md"
          >
            Back to Login
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Left_Section;
