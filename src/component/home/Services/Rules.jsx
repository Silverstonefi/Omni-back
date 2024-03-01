import React from "react";
import warehouse from "../../assets/images/warehouse.png";
import delivery from "../../assets/images/fast-delivery.png"
import lock from "../../assets/images/unlock.png";
import watch from "../../assets/images/stopwatch.png"
import payment from "../../assets/images/payment-method.png"
import support from "../../assets/images/distribution-center.png";
import { useTranslation } from 'react-i18next';


const Rules = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="">
        <div className="font-cabin">
          <div className="text-center ">
            <p className="font-semibold text-xs uppercase text-[#fa4612]">
              {t("Began With Rules")}
            </p>
            <h3 className="lg:text-3xl px-5 text-2xl font-semibold tracking-wider text-[#151c6d]">
              {t("Please obey the rules to keep safe")}
            </h3>
            <div className="py-3"></div>
            <p className="text-gray-500 tracking-wide">
              {t("OmniMove Express Services, a host of logistic")}{" "}
              <br className="lg:hidden flex" /> {t("management services and supply")}
              <br className="hidden lg:flex" /> {t("chain solutions.")}
            </p>
          </div>
          <div className="bg-white shadow-xl shadow-gray-300 lg:border lg:border-gray-100 my-10 lg:w-[700px] lg:mx-32 mx-5 lg:content-center">
            <div className="lg:pl-12 lg:py-5 py-5 ">
              <p className="lg:text-3xl text-2xl lg:text-left text-center lg:px-0 px-5 font-semibold tracking-wider lg:pl-14 py-5 text-[#151c6d]">
                {t("Keep your product safe with prevoz")}
              </p>
              <div className="border-t border-gray-300 lg:ml-5 lg:mx-0 mx-5 lg:w-[35rem]"></div>
            </div>
            <div className="lg:w-fit  font-cabin lg:pt-7 lg:grid lg:grid-cols-3">
              <div className="text-center lg:py-5 lg:px-3 pt-2 pb-7 border-b border-gray-300 hover:shadow-sm hover:transition hover:ease-in-out ease-in-out duration-500 hover:duration-500 hover:shadow-gray-400">
                <div className="flex justify-center">
                  <img
                    className="w-14 flex justify-center"
                    src={delivery}
                    alt=""
                  />
                </div>

                <p className="text-xl font-semibold tracking-wider pt-4 lg:pt-2">
                  {t("Fast & Efficient Delivery")}
                </p>
              </div>
              <div className=" text-center lg:border-x lg:py-5 lg:px-3 py-7 border-b border-gray-300 hover:shadow-sm hover:transition hover:ease-in-out ease-in-out duration-500 hover:duration-500 hover:shadow-gray-400">
                <div className="flex justify-center">
                  <img className="w-12 flex justify-center" src={lock} alt="" />
                </div>

                <p className="text-xl font-semibold tracking-wider pt-4">
                  {t("Security For Cargo Tools")}
                </p>
              </div>
              <div className=" text-center lg:py-5 lg:px-3 py-7 border-b border-gray-300 hover:shadow-sm hover:transition hover:ease-in-out ease-in-out duration-500 hover:duration-500 hover:shadow-gray-400">
                <div className="flex justify-center">
                  <img
                    className="w-12 flex justify-center"
                    src={watch}
                    alt=""
                  />
                </div>

                <p className="text-xl font-semibold tracking-wider pt-4 lg:px-6">
                  {t("Real-Time Tracking")}
                </p>
              </div>
              <div className=" text-center  lg:py-6 lg:px-3 py-7 lg:border-none border-b border-gray-300 hover:shadow-sm hover:transition hover:ease-in-out ease-in-out duration-500 hover:duration-500 hover:shadow-gray-400">
                <div className="flex justify-center">
                  <img
                    className="w-12 flex justify-center"
                    src={payment}
                    alt=""
                  />
                </div>

                <p className="text-xl font-semibold tracking-wider pt-6">
                  {t("Easy Payment Methods")}
                </p>
              </div>
              <div className=" text-center lg:border-x py-7 lg:py-6 lg:px-3 border-b lg:border-b-0 border-gray-300 hover:shadow-sm hover:transition hover:ease-in-out ease-in-out duration-500 hover:duration-500 hover:shadow-gray-400">
                <div className="flex justify-center">
                  <img
                    className="w-14 flex justify-center"
                    src={support}
                    alt=""
                  />
                </div>

                <p className="text-xl font-semibold tracking-wider pt-4 px-4">
                  {t("24/7 Hours Support")}
                </p>
              </div>
              <div className=" text-center lg:py-6 py-7 lg:px-3 hover:shadow-sm hover:transition hover:ease-in-out ease-in-out duration-500 hover:duration-500 hover:shadow-gray-400">
                <div className="flex justify-center">
                  <img
                    className="w-12 flex justify-center"
                    src={warehouse}
                    alt=""
                  />
                </div>

                <p className="text-xl font-semibold tracking-wider pt-6 px-4">
                  {t("Warehouse Storage")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rules;
