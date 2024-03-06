import React from "react";
import { styles } from "../styles";
import { journalConst } from "../constants";

const Journal = () => {
  return (
    <div className={`${styles.padding} w-full h-auto flex flex-col gap-6 `}>
      <p className={`font-semibold  text-[#FFBF00] ${styles.sectionHeadText}`}>
        Journals
      </p>

      {journalConst.map((journal, index) => {
        return (
          <div
            className="flex justify-between items-center w-full bg-[#FFBF00] p-3 h-[500px] rounded-3xl"
            key={index}
          >
            <img src={journal.img} className="w-[25%] h-[80%] object-contain" />
            <div className="h-[80%] w-[65%] flex flex-col p-5 justify-center">
              <p className="text-[18px] font-semibold">{journal.title}</p>
              <p className="text-[18px]">{journal.content}</p>
            </div>
          </div>
        );
      })}
      <div className="w-full h-[100px] flex items-center justify-center">
        <button className="px-44 py-3 rounded-2xl border-2 border-[#FFBF00] font-semibold hover:text-white text-[18px] hover:bg-[#FFBF00]">
          More
        </button>
      </div>
    </div>
  );
};

export default Journal;
