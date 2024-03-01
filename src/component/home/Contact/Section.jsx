import React from "react";
import { BiPhoneCall, BiLocationPlus, BiTimeFive } from "react-icons/bi";
import { useTranslation } from 'react-i18next';


const Card = () => {
  const { t } = useTranslation();

  return (
    <div className="py-20">
      <section className="lg:px-28 lg:py-20 bg-white w-full lg:relative ">
        <div className="lg:flex lg:gap-12 mx-5">
          {/* card */}
          <div className="flex flex-col justify-center text-center py-5 px-3 lg:w-[570px] hover:shadow-md hover:shadow-gray-400 ">
            <div className="flex justify-center">
              <div className="flex justify-center bg-[#fa4612] w-fit rounded-full p-2 text-white">
                <BiPhoneCall size={35} />
              </div>
            </div>
            <h2 className="py-2 font-semibold lg:text-xl text-[#161b5ce8]">
              {t("Contact")}
            </h2>
            <div className="text-gray-400 leading-7">
              <p>{("Talk to Support")}</p>
              <p>+1(360)7123824</p>
            </div>
          </div>

          <div className="flex flex-col justify-center text-center py-5 px-3 lg:w-[570px] hover:shadow-md hover:shadow-gray-400">
            <div className="flex justify-center">
              <div className="flex justify-center bg-[#fa4612] w-fit rounded-full p-2 text-white">
                <BiLocationPlus size={35} />
              </div>
            </div>
            <h2 className="py-2 font-semibold lg:text-xl text-[#161b5ce8]">
              {t("Location")}
            </h2>
            <div className="text-gray-400 leading-7">
              <p>{t("Find Where We Are")}</p>
              <p>{t("Louvre 33 Rue Du Uloho Avenue, Paris France")}</p>
            </div>
          </div>

          <div className="flex flex-col justify-center text-center py-5 px-3 lg:w-[570px] hover:shadow-md hover:shadow-gray-400">
            <div className="flex justify-center">
              <div className="flex justify-center bg-[#fa4612] w-fit rounded-full p-2 text-white">
                <BiTimeFive size={35} />
              </div>
            </div>
            <h2 className="py-2 font-semibold lg:text-xl text-[#161b5ce8]">
              {t("Contact")}
            </h2>
            <div className="text-gray-400 leading-7">
              <p>{t("Talk to Support")}</p>
              <p>+1(360)7123824</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
