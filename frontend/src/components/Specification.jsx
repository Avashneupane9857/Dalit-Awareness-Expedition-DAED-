import { specConst } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

const Specification = () => {
  return (
    <div className="flex w-[80%] mx-auto mt-2 h-[100px] md:h-[160px] py-3 px-7">
      <motion.div
        variants={fadeIn("", "", 0.5, 1.5)}
        className="flex h-full  w-full items-center justify-around bg-[#FFBF00] rounded-2xl"
      >
        {specConst.map((spec, index) => {
          return (
            <div
              key={index}
              className="flex items-center  flex-col h-full w-[28%] pt-2 "
            >
              <div className="h-[40%] sm:h-[70%] w-[35%] sm:pb-2 ">
                <img
                  className=" object-cover rounded-xl"
                  src={spec.img}
                  alt={`Spec ${index}`}
                />
              </div>
              <p className="text-white text-center w-[43%] h-[50%] md:w-[45%] mt-3 md:mt-2 text-[6px] md:text-[10px] font-semibold">
                {spec.content}
              </p>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
export default SectionWrapper(Specification, "");
