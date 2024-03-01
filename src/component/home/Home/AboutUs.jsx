import React from "react";
import about from "../../assets/images/about-img-two.jpg";
import { MdVerified } from "react-icons/md";
import { useTranslation } from 'react-i18next';


const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <section>
        <div className="relative lg:my-28 lg:h-scregen font-cabin lg:flex">
          <div className="bg-rhed-700 mx-5 lg:ml-28 lg:w-[65%]">
            <div className="lg:w-[87%u]">
              <h3 className="uppercase font-bold text-orange-600 text-sm">
                {t('Know about us')}
              </h3>
              <h1 className="text-xl lg:py-5  lg:text-[2.33rem] lg:leading-[2.8rem] font-bold tracking-wider text-[#161b5cda]">
                {t('Reliable and express logistics and transport solutions that does not waste your time')}
              </h1>
            </div>
            <div>
              <p className="text-gray-500 leading-7 tracking-wider pb-9 pt-10">
                {t("OmniMove Express Services offers a host of logistic management services and supply chain solutions. We provide innovative solutions with the best people, processes, and technology. With over 60 years of providing world class service to their customers on the asset side, a need to provide a one stop shop for a \"true customer service logistic solution\" was introduced. By adding this dimension to an already dynamic and customer centric asset based provider, we feel we bring a total solution.")}
              </p>
            </div>
            <button className="default-btn  text-orange-500 py-5 px-[2.5rem] leading-none transition-all duration-500 z-1 capitalize border border-orange-500 hover:border-white rounded-md relative cursor-pointer hover:text-white">
              {t("About Us")}
            </button>

            <style jsx>{`
              .default-btn::before {
                content: "";
                position: absolute;
                padding: 0;
                border-right: 0;
                border-top: 20px solid transparent;
                border-left: 20px solid #fa4612;
                border-bottom: 20px solid transparent;
                top: 8px;
                left: 0;
                transition: all 0.5s;
              }
              .default-btn::after {
                position: absolute;
                content: "";
                background-color: #fa4612;
                top: 0;
                left: 0;
                width: 0;
                height: 100%;
                transition: all 0.5s;
                z-index: -1;
              }

              .default-btn:hover::after {
                width: 100%;
              }

              .default-btn:hover::before {
                border-left: 20px solid #fff;
                color: #fff;
              }
            `}</style>
          </div>
          <div className="relative lg:static lg:mt-0 mt-8 lg:mb-0 mb-14 lg:mx-0 mx-5">
            <div className="relative">
              <img className="lg:h-[80vh] h-[70.9vh]" src={about} alt="" />
            </div>
            <div className="absolute top-0 bg-white  shadow-grfy-500 shadow-lg lg:w-[21%] w-[70%] py-5 px-7">
              <h3 className="text-[#161b5cda] font-semibold text-lg ">
                {t("Our Prime Priorities")}
              </h3>
              <div className="border-b border-gray-300 pt-1"></div>
              <div className="lg:py-5 pt-2 text-sm lg:leading-6 text-gray-400 tracking-wider">
                <div className="flex gap-2 py-0.5">
                  <div className="">
                    <MdVerified className="text-orange-500 " size={30} />
                  </div>
                  {t("Customer and employee solutions are time-consuming.")}
                </div>
                <div className="flex lg:my-3 gap-2 py-0.5">
                  <div>
                    <MdVerified className="text-orange-500" size={30} />
                  </div>{" "}
                  {t("We accomplish our goals more efficiently.")}
                </div>
                <div className="flex lg:my-3 gap-2 py-0.5">
                  <div>
                    <MdVerified className="text-orange-500" size={30} />
                  </div>{" "}
                  {t("Transparent Communication Collaboration properly do.")}
                </div>
                <div className="flex lg:my-3 gap-2 py-0.5">
                  <div>
                    <MdVerified className="text-orange-500" size={30} />
                  </div>{" "}
                  {t("It provides a road map to increased productivity.")}
                </div>
                <div className="flex lg:my-3 gap-2 py-0.5">
                  <div>
                    <MdVerified className="text-orange-500" size={30} />
                  </div>{" "}
                  {t("Providing independent advice for you.")}
                </div>
                <div className="flex gap-2">
                  <div>
                    <MdVerified className="text-orange-500" size={30} />
                  </div>{" "}
                  {t("24/7 support system available.")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
