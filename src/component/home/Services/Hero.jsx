import React from 'react';
import { Link } from 'react-router-dom';
import about from "../../assets/images/1-abt.jpg";
import { useTranslation } from 'react-i18next';



const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <section>
        <div className="relative w-full h-[40vh] lg:h-[50vh] lg:w-full object-contain">
          <img
            className=" lg:static lg:h-[70vh] w-[900px] h-[40vh] object-cover lg:w-full"
            src={about}
            alt="ttt"
          />
          <div className="absolute bg-black/60 top-0 w-full h-full lg:h-[80vh] text-white pt-28 lg:pt-36 px-5 lg:px-28 lg:flex lg:justify-between font-cabin">
            <div>
              <p className="text-4xl lg:text-6xl font-semibold">{t("Services")}</p>
            </div>
            <div className="font-medium flex gap-2 mt-3 lg:mt-7">
              <div>
                <Link to="/">{t("Home")}</Link>
              </div>
              <div className="flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5"></div>
                <Link to="/about" className="text-[#fa4612]">
                  {t("Services")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;