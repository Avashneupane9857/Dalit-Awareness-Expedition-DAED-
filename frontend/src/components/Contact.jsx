import { useRecoilValue } from "recoil";
import { contactUs, eventBg } from "../assets";
import { styles } from "../styles";
import Button from "./Button";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import HeroHeader from "./HeroHeader";
import SideHero from "./SideHero";
import { translatorState } from "../store";
import { data } from "../translation";

const Contact = () => {
  const text = useRecoilValue(translatorState);
  return (
    <div className="w-full h-auto flex flex-col">
      <Button />
      <HeroHeader active="contactus" />
      <SideHero title={data?.sideHeroHeading2?.[text]} img={contactUs} />

      <div className={`flex flex-col  lg:mx-4 mx-auto mb-4 ${styles.padding} `}>
        <div className="flex lg:flex-row lg:justify-around justify-around items-center  flex-col ">
          <div className="max-w-[400px] mt-8 ">
            <h1 className="text-xl text-justify">{data?.contacdata?.[text]}</h1>

            <div className="my-8 mx-2">
              <div>
                <h1 className="text-4xl block">Our Adress</h1>
                <h1 className="block text-2xl">Deukhuri Multiple Campus</h1>
              </div>
              <div className="py-4 space-y-4">
                <h1>Lamahi-6 Dang ,Nepal</h1>

                <h1>+977 9865789, 09846290,089876</h1>
                <h1>deukhuricampus@gmail.com</h1>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>

        <div className=" flex flex-col lg:flex-row lg:justify-around my-4 items-center   ">
          <div className="max-w-[400px] mb-4 lg:mb-0 tracking-widest leading-loose">
            <h1 className=" text-xl">
              Our office is located by the Dang,Nepal.{" "}
              <span className=" font-bold text-black">
                "Empower. Elevate. Inspire . Thrive "
              </span>
              We're based on the heart of the beautiful city Dang,so don't
              hesitate to visit by bus ,boat or jet skii too.We have open door
              policy.
            </h1>
          </div>
          <div className="max-w-[400px] ">
            <img
              src="https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png"
              alt="/error"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
