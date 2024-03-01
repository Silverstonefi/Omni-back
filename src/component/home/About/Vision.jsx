import React from "react";
import about3 from "../../assets/images/3-abt.jpg";
import { useTranslation } from 'react-i18next';


const Vision = () => {
  const { t } = useTranslation();

  return (
    <div className="relative bottom-0 lg:pt-14 pt-5">
      <section>
        <div className="flex flex-col justify-center text-center lg:px-0 px-5">
          <div>
            <p className="uppercase lg:text-sm text-xs lg:font-semibold font-medium tracking-tight text-[#fa4612]">
              {t("Why choose us")}
            </p>
            <h3 className="text-[#1a375f] font-semibold text-lg lg:text-3xl">
              {t("We are the best among them")}
            </h3>
          </div>
          <div className="lg:flex lg:mx-28 lg:pl-10 lg:mt-10 mt-10">
            <div className="lg:w-[60%] bg-white shadow-sm lg:shadow-slate-400 shadow-slate-300 py-5 z-10 lg:py-0 px-3 lg:pt-14 lg:text-left lg:px-10 ">
              <p className="text-[#24416b] lg:text-3xl text font-semibold lg:pb-3 text-left">
                {t("Why our company is best?")}
              </p>
              <p className="text-[#fa4612] font-semibold py-3 border-b-2 border-[#fa4612] lg:w-fit">
                {t("Our Vision")}
              </p>
              <div className="hidden lg:flex w-full border-t border-gray-300"></div>
              <div className="lg:pt-7 pt-5 text-sm lg:leading-6 text-gray-500 text-left tracking-wider leading-7">
                <p>
                  {t("The following principles reflect our values, define our culture, and guide our actions: lead with humility and respect. Earn trust through authenticity and accountability. Cultivate mutually beneficial partnership with customers, associates and suppliers. Practice servant leadership and demand the highest standards.")}
                </p>
              </div>
            </div>
            <div className="lg:w-[30rem] lg:h-[20rem] object-cover lg:-z-10 lg:pt-0 pt-6">
              <img
                className="lg:w-[25rem] lg:h-[25rem] w-full h-[20rem]"
                src={about3}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
