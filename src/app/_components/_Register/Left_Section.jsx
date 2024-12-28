"use client";
import { useAuth } from "@/app/_contexts/AuthContext";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import { motion } from "framer-motion";

const Left_Section = () => {
  const { email, setEmail, password, setPassword, name, setName } = useAuth();
  const [VerificationCode, setVerificationCode] = useState("");

  const variants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <div>
      <Image width={200} height={200} alt="OyeStore" src="/images/logo.png" />
      <div className="flex flex-col items-center justify-center mt-16 ">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={variants}
          className="text-3xl  text-center mb-10 text-black"
        >
          Create your account
        </motion.h1>

        <div className="ml-5 mr-5">
          <motion.input
            initial="hidden"
            animate="visible"
            variants={variants}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="bg-white shadow-gray-400 border-2 border-white shadow-inner rounded-lg p-3 w-full placeholder-gray-400 mt-2  pl-4 pr-4"
          />
          <motion.input
            initial="hidden"
            animate="visible"
            variants={variants}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Password"
            className="bg-white  shadow-gray-400 border-2 border-white shadow-inner rounded-lg p-3 w-full mt-7 placeholder-gray-400 pl-4 pr-4"
          />

          <motion.p
            initial="hidden"
            animate="visible"
            variants={variants}
            className="text-sm text-center w-96 text-gray-400 tracking-wide mt-6 ml-3"
          >
            {" "}
            A Verification code has been send to your email. If not in the
            inbox, please check your spam mail.
          </motion.p>

          <motion.input
            initial="hidden"
            animate="visible"
            variants={variants}
            type="text"
            value={VerificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder="Verification Code"
            className="bg-white shadow-gray-400 border-2 border-white shadow-inner rounded-lg p-3 w-full placeholder-gray-400 mt-11  pl-4 pr-4"
          />
        </div>

        <Link
          href={{
            pathname: "/register/next",
          }}
        >
          <motion.button
            initial="hidden"
            animate="visible"
            variants={variants}
            className="font-bold mt-14 text-[#303030] bg-[#F0692F] p-3 w-44 rounded-xl shadow-gray-500 shadow-md"
          >
            Next
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Left_Section;
