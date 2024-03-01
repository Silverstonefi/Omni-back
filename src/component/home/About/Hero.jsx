import React from "react";
import { Link } from "react-router-dom";
import { ImQuotesLeft } from "react-icons/im";
import about from "../../assets/images/1-abt.jpg";
import abt2 from "../../assets/images/2-abt.jpg";
import { useTranslation } from 'react-i18next';


const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <section>
        <div className="relative w-full h-[40vh] lg:h-[60vh] lg:w-full object-contain">
          <img
            className=" lg:static lg:h-[70vh] w-[900px] h-[40vh] object-cover lg:w-full"
            src={about}
            alt="ttt"
          />{" "}
          <div className="absolute bg-black/60 top-0 w-full h-full text-white pt-28 lg:pt-36 px-5 lg:px-28 lg:flex lg:justify-between font-cabin">
            <div>
              <p className="text-4xl lg:text-6xl font-semibold">{t("About Us")}</p>
            </div>
            <div className="font-medium flex gap-2 mt-3 lg:mt-7">
              <div>
                <Link to="/">{t("Home")}</Link>
              </div>
              <div className="flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5"></div>
                <Link to="/about" className="text-[#fa4612]">
                  {t("About Us")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="font-cabin lg:relative lg:flex lg:pl-28 lg:pr-20 lg:mx-0 mx-5 gap-16 bg-white lg:pt-20 pt-14">
          <div className="relative">
            <img className="w-[100%] h-auto" src={abt2} alt="" />

            <div className="absolute bottom-3 lg:top-1/2 lg:bottom-0 lg:right-[-40px] right-4 bg-orange-500 lg:w-[80px] w-[50px] h-[50px] lg:h-[80px] rounded-full flex items-center justify-center">
              <ImQuotesLeft className="text-white lg:p-0 p-1.5" size={40} />
            </div>
          </div>
          <div className="lg:mx-5 lg:w-[65%] pt-5 lg:pt-0">
            <div className="lg:w-[87%u]">
              <h3 className="uppercase font-bold text-orange-600 text-sm">
                {t("Know About Us")}
              </h3>
              <h1 className="text-xl lg:py-3 py-2 lg:text-[2rem] lg:leading-[2.8rem] font-bold tracking-wider text-[#161b5cda]">
                {t("Reliable and express logistics and transport solutions that does not waste your time")}
              </h1>
            </div>
            <div>
              <p className="text-gray-500 text-sm leading-7 tracking-wider pb-9 lg:pt-3 pt-1">
                {t("OmniMove Express Services offers a host of logistic management services and supply chain solutions. We provide innovative solutions with the best people, processes, and technology. With over 60 years of providing world class service to their customers on the asset side, a need to provide a one stop shop for a \"true customer service logistic solution\" was introduced. By adding this dimension to an already dynamic and customer centric asset based provider, we feel we bring a total solution.")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
