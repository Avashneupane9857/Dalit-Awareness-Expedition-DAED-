import { useNavigate } from "react-router-dom";
import { aboutUs, eventBg, objective, strength, vision } from "../assets";
import { styles } from "../styles";
import Footer from "./Footer";
import HeroHeader from "./HeroHeader";
import SideHero from "./SideHero";
import Subscription from "./Subscription";
import { achievementItems, navLinks } from "../constants";
import Button from "./Button";
import { useRecoilValue } from "recoil";
import { translatorState } from "../store";
import { data } from "../translation";

const AboutDAED = () => {
  const navigate = useNavigate();
  const text = useRecoilValue(translatorState);
  return (
    <div className="w-full h-auto flex flex-col">
      <Button />
      <HeroHeader active="aboutus" />
      <SideHero title={navLinks?.[1]?.title?.[text]} img={aboutUs} />

      <div
        className={`flex flex-col  justify-between items-start h-auto w-full `}
      >
        <div className={`w-full h-auto   my-5 ${styles.padding}`}>
          <p className="text-[16px] sm:text-[18px] leading-relaxed sm:leading-loose text-justify p-6 border-2 border-slate-500 rounded-md">
            {data?.Aboutdaed?.[text]}
          </p>
        </div>
        <div className="w-full h-[350px] sm:h-[300px] flex flex-col sm:flex-row justify-around items-center bg-slate-100">
          <div className="h-[40%] sm:h-full w-[80%] sm:w-[40%] flex flex-col gap-3 items-center justify-center">
            <p className="font-semibold text-[25px] sm:text-[29px]">
              Empowering People's
            </p>
            <p className="font-light text-[14px]">
              Empower, Elevate, Thrive, Inspire
            </p>
          </div>
          <div className="h-[45%] sm:h-[70%] w-[80%] sm:w-[45%] flex flex-wrap items-center justify-between">
            {achievementItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 w-[45%] h-[35%]"
                >
                  <div className="w-[10%] h-[80%]">
                    <img
                      src={item.img}
                      alt="achievememt"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-[80%] h-[90%] flex flex-col gap-2">
                    <p className="font-semibold text-[25px] sm:text-[29px]">
                      {item.count}
                    </p>
                    <p className="font-light text-[14px]">{item.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={`${styles.padding} bg-[#161618] w-full h-auto sm:h-[950px] text-white flex flex-col gap-3`}
        >
          <div className="w-full sm:h-[45%] h-auto flex flex-col sm:flex-row justify-between items-center sm:gap-0 gap-3">
            <div className="w-full sm:w-[30%] h-auto sm:h-[90%] flex flex-col items-center justify-around bg-[#23232666] px-6 rounded-md">
              <img
                src={objective}
                alt="objective-img"
                className="w-[50%] h-[100px] sm:h-[20%] object-contain"
              />
              <p className="font-semibold text-[29px] font-serif">
                {data?.objective?.[text]}
              </p>
              <p className="font-medium font-serif">
                {data?.objectiveContent?.[text]}
              </p>
            </div>
            <div className="w-full sm:w-[30%] h-auto sm:h-[90%] flex flex-col items-center justify-around bg-[#23232666] px-6 rounded-md">
              <img
                src={strength}
                alt="Strength-img"
                className="w-[50%] h-[20%] object-contain"
              />
              <p className="font-semibold text-[29px] font-serif">
                {data?.strenghts?.[text]}
              </p>
              <p className="font-medium font-serif">
                {data?.streghtsContent?.[text]}
              </p>
            </div>
          </div>
          <div className="h-full w-full flex items-center justify-center">
            <div className="w-full h-auto sm:w-[30%] sm:h-[90%] flex flex-col items-center justify-around bg-[#23232666] px-6 rounded-md">
              <img
                src={vision}
                alt="Vision-img"
                className="w-[50%] h-[20%] object-contain"
              />
              <p className="font-semibold text-[29px] font-serif">
                {data?.vision?.[text]}
              </p>
              <p className="font-medium font-serif">
                {data?.visionContent?.[text]}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Subscription />
      <Footer />
    </div>
  );
};
export default AboutDAED;
