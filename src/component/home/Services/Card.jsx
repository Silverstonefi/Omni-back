import React from "react";
import warehouse from "../../assets/images/warehouse.png";
import airplane from "../../assets/images/airplane.png";
import bottle from "../../assets/images/water-pollution.png";
import road from "../../assets/images/road.png";
import { useTranslation } from 'react-i18next';
import { BsArrowRight } from "react-icons/bs";

const Card = () => {
  const { t } = useTranslation();

  return (
    <div className="py-20">
      <section className="lg:px-28 lg:py-20 bg-white w-full lg:relative">
        <div className="lg:flex lg:justify-center block font-cabin">
          {/* this is a card */}
          <div className="ml-5 lg:ml-0 bg-gray-e300 w-[90%] lg:w-1/4 items-center flex flex-col justify-center text-center px-9 py-5 shadow-slate-300 shadow-md shadow-b hover:transition ease-out duration-700 hover:ease-in-out hover:transform hover:scale-110 hover:duration-700 z-10 bg-white">
            <img className="w-16" src={warehouse} alt="" />

            <h3 className="font-semibold text-[20px] text-[#151c6d] py-5">
              {t("Warehousing")}
            </h3>
            <p className="text-gray-500 pb-5">
              {t("We have top class warehousing facilities. Our warehouses are spacious, well guarded,..")}
            </p>
            <BsArrowRight
              className="text-red-500 hover:text-white hover:bg-orange-500 hover:transition ease-out duration-700 hover:ease-in-out hover:duration-700 border border-gray-100 rounded-full p-2.5 bg-red-200 font-light"
              size={40}
            />
          </div>

          <div className="ml-5 lg:ml-0 hover:z-50 bg-white lg:w-1/4 w-[90%] lg:my-0 my-8 items-center flex flex-col justify-center text-center px-2 py-3 shadow-slate-300 shadow-md border-l border-gray-300 hover:transition ease-out duration-700 hover:ease-in-out hover:transform hover:scale-110 hover:duration-700">
            <img className="w-16" src={airplane} alt="" />

            <h3 className="font-semibold text-[20px] text-[#151c6d] py-5">
              {t("Air Freight")}
            </h3>
            <p className="text-gray-500 pb-5">
              {t("OmniMove Express Services is an airfreight forwarding specialists offering a comprehensive...")}
            </p>
            <BsArrowRight
              className="text-red-500 hover:text-white hover:bg-orange-500 hover:transition ease-out duration-700 hover:ease-in-out hover:duration-700 border border-gray-100 rounded-full p-2.5 bg-red-200 font-light"
              size={40}
            />
          </div>
          <div className="ml-5 lg:ml-0 bg-gray-e300 lg:w-1/4 w-[90%] items-center flex flex-col justify-center text-center px-5 py-3 shadow-slate-300 shadow-md hover:transition ease-out duration-700 hover:ease-in-out hover:transform hover:scale-110 hover:duration-700 bg-white">
            <img className="w-16" src={bottle} alt="" />

            <h3 className="font-semibold text-[20px] text-[#151c6d] py-5">
              {t("Ocean Freight")}
            </h3>
            <p className="text-gray-500 pb-5">
              {t("OmniMove Express Services flexible and scalable sea freight solutions cover your ...")}
            </p>
            <BsArrowRight
              className="text-red-500 hover:text-white hover:bg-orange-500 hover:transition ease-out duration-700 hover:ease-in-out hover:duration-700 border border-gray-100 rounded-full p-2.5 bg-red-200 font-light"
              size={40}
            />
          </div>
          <div className="ml-5 lg:ml-0 bg-gray-e300 lg:w-1/4 w-[90%] lg:mt-0 mt-8 items-center flex flex-col justify-center text-center px-5 py-3 shadow-slate-300 shadow-sm hover:transition ease-out duration-700 hover:ease-in-out hover:transform hover:scale-110 hover:duration-700 bg-white">
            <img className="w-16" src={road} alt="" />

            <h3 className="font-semibold text-[20px] text-[#151c6d] py-5">
              {t("Road Freight")}
            </h3>
            <p className="text-gray-500 pb-5">
              {t("OmniMove Express Services offers an efficient integrated transport system with multiple types ..")}
            </p>
            <BsArrowRight
              className="text-red-500 hover:text-white hover:bg-orange-500 hover:transition ease-out duration-700 hover:ease-in-out hover:duration-700 border border-gray-100 rounded-full p-2.5 bg-red-200 font-light"
              size={40}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
