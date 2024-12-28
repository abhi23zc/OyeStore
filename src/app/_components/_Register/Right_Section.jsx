"use client";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
const Right_Section = () => {
  const variants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <div className="relative h-screen">
      <button className="flex items-center absolute right-5 top-2 gap-3">
        <ArrowLeft width={15} height={15} />
        <h1 className="text-lg font-sans font-bold">Back</h1>
      </button>
      <div className="absolute top-0 bottom-0 right-0 left-0 blur-lg opacity-70">
        <motion.img
          initial="hidden"
          animate="visible"
          variants={variants}
          className=" h-2/3 absolute top-0 left-0 w-2/3"
          src="/images/right_section2.png"
          alt=""
        />
        <motion.img
          initial="hidden"
          animate="visible"
          variants={variants}
          className="h-2/3 absolute bottom-0 right-0 w-2/3"
          src="/images/right_section1.png"
          alt=""
        />
      </div>

      <div className="absolute top-0 bottom-0 right-0 left-0 z-10 flex flex-col justify-center items-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={variants}
          className="text-5xl mb-4 text-[#361C42]"
        >
          New Here?
        </motion.h1>
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={variants}
          className="text-sm text-[#361C42]"
        >
          Sign up now for great deals products
        </motion.h2>

        <motion.button
          initial="hidden"
          animate="visible"
          variants={variants}
          className="font-bold mt-14 text-[#303030] bg-[#F0692F] p-3 w-44 rounded-xl shadow-gray-500 shadow-md"
        >
          Sign up
        </motion.button>
      </div>
    </div>
  );
};

export default Right_Section;
