import React from "react";
import { useTranslation } from 'react-i18next';

const Query = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="font-cabin pb-28">
        <form
          action=""
          className="lg:mx-28 lg:shadow-md lg:shadow-gray-200 lg:py-10"
        >
          <header className="text-center">
            <p className="text-[#fa4612] uppercase">{t("Information")}</p>
            <h1 className="text-[#161b5ce8] lg:font-semibold lg:text-5xl text-3xl px-5 font-bold lg:py-5 py-2">
              {t("Drop a message for any query")}
            </h1>
          </header>
          <div>
            <div className="lg:grid lg:grid-cols-2 lg:px-5 px-2 mx-5">
              <input
                className="mr-5 lg:my-8 my-4 h-12 w-full lg:w-auto outline-none border text-sm text-gray-500 px-7 border-gray-300 focus:border focus:border-[#fa4612] focus:transition focus:duration-300"
                placeholder={t("DD-MM-YY")}
                type="text"
              />
              <input
                className="mr-5 lg:my-8 my-4 h-12 w-full lg:w-auto outline-none text-sm border text-gray-500 px-7 border-gray-300 focus:border focus:border-[#fa4612] focus:transition focus:duration-300"
                placeholder={t("Your Email")}
                type="email"
              />{" "}
              <input
                className="mr-5 lg:my-8 my-4 h-12 w-full lg:w-auto outline-none text-sm border text-gray-500 px-7 border-gray-300 focus:border focus:border-[#fa4612] focus:transition focus:duration-300"
                placeholder={t("Your phone number")}
                type="text"
              />
              <input
                className="mr-5 lg:my-8 my-4 h-12 w-full lg:w-auto outline-none text-sm border text-gray-500 px-7 border-gray-300 focus:border focus:border-[#fa4612] focus:transition focus:duration-300"
                placeholder={t("Your Subject")}
                type="text"
              />
            </div>

            <div className="flex flex-col justify-center">
              <textarea
                className="h-[250px] px-4 py-2 lg:ml-10 lg:mr-14 mr-7 ml-7 border border-gray-300 outline-none focus:ring-1 focus:ring-[#fa4612] focus:transition focus:duration-300"
                placeholder={t("Type your message here...")}
              />
              <div className="flex justify-center pt-5">
                <button className="default-btn w-fit text-orange-500  py-5 px-[3rem] leading-none transition-all duration-500 z-1 capitalize border border-orange-500 hover:border-white rounded-md relative cursor-pointer hover:text-white">
                  {t("Send Message")}
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
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Query;
