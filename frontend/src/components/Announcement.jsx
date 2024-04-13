import { useState } from "react";
import { styles } from "../styles";
import { def, announce } from "../assets";
import { IoMdInformationCircle } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { notices } from "../constants";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";

const Announcement = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // let notices = useFetch(`${import.meta.env.VITE_APP_API_ROOT}/notices`);

  return (
    <>
      <div
        className={`${styles.paddingX} sm:px-0 flex w-full h-[80px]  gap-1 mt-4`}
      >
        <img
          src={announce}
          alt="announce bg"
          className="h-full w-[10%] object-contain"
        />
        <p
          className={`${styles.sectionHeadText}  text-[#FFBF00] font-semibold h-full mt-7`}
        >
          Announcements
        </p>
      </div>
      <div
        className={`${styles.padding} flex flex-col sm:flex-row justify-between items-center w-full h-auto sm:h-[400px]  mt-4`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="w-full sm:w-[30%] h-full flex flex-col justify-around items-center mb-5 sm:mb-0 overflow-y-scroll"
        >
          {notices?.length > 0 ? (
            notices.map((notice, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    index == currentIndex ? "border-l-4 border-[#FFBF00] " : ""
                  } w-full h-[70px] border-b-2  flex  items-center pl-4 cursor-pointer`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <IoMdInformationCircle
                    className={`${
                      index == currentIndex ? "text-[#FFBF00] " : ""
                    }`}
                  />
                  <p
                    className={`${
                      index == currentIndex ? "font-semibold" : "font-light"
                    }text-[10px] sm:text-[14px] ml-1 sm:ml-4 py-1 line-clamp-1`}
                  >
                    {notice.title}
                  </p>
                </div>
              );
            })
          ) : (
            <p className="text-[16px] text-[#FFBF00] font-semibold">
              Loading...
            </p>
          )}
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex flex-col w-full sm:w-[60%] h-[400px] items-center justify-around border-x-2 pb-9 border-y-2 border-[#FFBF00] rounded-xl p-4"
        >
          <p className="w-[50%] text-[13px] sm:text-[16px] font-semibold h-auto my-4">
            {notices?.[currentIndex]?.title}
          </p>
          <div className="w-[80%] h-[95%] relative flex justify-center items-center">
            <img
              src={notices?.[currentIndex]?.img || def}
              alt="Notice Image"
              className="w-[95%] h-[90%] object-contain  -z-1 "
            />
            <div className="w-[93%] sm:w-[82%] h-[60%] sm:h-[90%] bg-black absolute bg-opacity-20 hover:bg-opacity-0" />
            <div className="bg-white w-[50px] h-[50px] flex items-center justify-center rounded-full left-[50%] top-[45%] text-[#FFBF00] absolute text-3xl hover:bg-red-900 hover:text-white">
              <a href={notices?.[currentIndex]?.img} target="_blank">
                <AiOutlineSearch />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default SectionWrapper(Announcement, "announcement");
{
  /* <div className="w-full h-[42%] text-white flex justify-between items-center mb-8">
        <div className="h-full w-[35%] hidden sm:flex flex-col items-center justify-around">
          <p className="text-[18px] font-semibold tracking-wider">
            Social Links
          </p>
          <div className="flex w-full h-full items-center gap-5 justify-center">
            <a
              href="#"
              target="_blank"
              className="w-[38%]  h-[41%] mt-5 items-center flex "
            >
              <img
                src={gmail}
                alt="youtube"
                className="rounded-2xl cursor-pointer object-contain w-full h-full"
              />
            </a>
            <a href="#" className="w-[30%] h-[30%]">
              <img
                src={twitter}
                alt="twitter"
                className="rounded-2xl cursor-pointer"
              />
            </a>
            <a href="#" target="_blank" className="w-[30%] h-[30%]">
              <img
                src={facebook}
                alt="facebook"
                className="rounded-2xl  cursor-pointer "
              />
            </a>
          </div>
          <div className="h-full w-[50%] sm:w-[35%] flex flex-col items-start justify-around">
            <p className="text-[16px] sm:text-[18px] font-semibold tracking-wider">
              Deukhuri Multiple Campus
            </p>
            <p className="text-[14px] sm:text-[16px] text-slate-500">
              Lamahi-5, Dang, Nepal
            </p>
            <p className="text-[14px] sm:text-[16px] text-slate-500">
              082417016, 9857847016, 9857847017, 9857847018
            </p>
            <p className="text-[14px] sm:text-[16px] text-slate-500">
              deukhuri.campus@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="h-full w-[30%] sm:w-[20%] flex flex-col items-start justify-around">
        <p className="text-[16px] sm:text-[18px] font-semibold tracking-wider">
          Other Links
        </p>
        <a
          href="/admission"
          className="text-[14px] sm:text-[16px] text-slate-500 cursor-pointer"
        >
          Admission
        </a>
        <a
          href="/contact"
          className="text-[14px] sm:text-[16px] text-slate-500 cursor-pointer"
        >
          Contact
        </a>
        <a
          href="/contact#location"
          className="text-[14px] sm:text-[16px] text-slate-500 cursor-pointer"
        >
          Location
        </a>
        <a
          href="https://tuexam.edu.np/"
          target="_blank"
          className="text-[14px] sm:text-[16px] text-slate-500 cursor-pointer"
        >
          TU Updates
        </a>
      </div> */
}