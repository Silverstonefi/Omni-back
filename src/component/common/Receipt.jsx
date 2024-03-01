import React from "react";
import { FiCheckCircle, FiPackage, FiTruck } from "react-icons/fi";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";
import { BiRefresh } from "react-icons/bi";
import { FaTruckLoading, FaTruckMoving } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";

const Receipt = () => {
  return (
    <>
      <section className="font-cabin">
        <div className="flex gap-3 px-20 py-5">
          <div>
            <FiCheckCircle className="text-blue-500" size={40} />
          </div>
          <div>
            <h5 className="text-sm text-gray-400">Order #16</h5>
            <h1 className="font-semibold">Thank You Mark!</h1>
          </div>
        </div>
      </section>

      <section className="px-20">
        <div className="border-2 border-gray-300 rounded-md">
          <div className="px-20 py-5 flex border-b border-gray-300">
            <Steps
              items={[
                {
                  title: "Confirmed",
                  status: "finish",
                  icon: <FiCheckCircle />,
                },
                {
                  title: "Out for Delivery",
                  status: "finish",
                  icon: <FiTruck />,
                },
                {
                  title: "On its way",
                  status: "finish",
                  icon: <FaTruckLoading />,
                },
                {
                  title: "Delivered",
                  status: "finish",
                  icon: <FiPackage />,
                },
              ]}
            />
          </div>

          <div className="px-20 py-5">
            <h1 className="lg:text-2xl font-semibold">
              {" "}
              Your shipment has been delivered
            </h1>
            <p className="lg:pr-72 tracking-wider py-2">
              Your shipment has been delivered to the address you provided. If
              you haven't recieved it, or if you have any other problems, Please
              contact us.
            </p>
            <div className="flex gap-1">
              <BiRefresh className="pt-0.5" size={20} />
              <p className="font-semibold text-blue-500">
                Re-order the same items
              </p>
            </div>
          </div>

          <div className="border-b border-gray-300 mx-10"></div>

          <div className="px-20 py-5">
            <p className="font-semibold">DHL tracking number:</p>
            <p className="text-blue-500">123456</p>
          </div>
        </div>
      </section>

      <section className="px-20 py-5">
        <div className="border-2 border-gray-300 rounded-md py-5">
          <h1 className="pb-3 px-20 text-xl font-bold uppercase">
            Customer Information
          </h1>
          <div className="px-20 flex justify-between">
            <div className="">
              <div>
                <h2 className="text-lg font-semibold">Contact Information</h2>
                <p>Mark</p>
              </div>
              <div className="pt-3">
                <h2 className="text-lg font-semibold">Shipping Address</h2>
                <p>Mark</p>
                <p>RM10 6YS</p>
                <p>London, UK</p>
              </div>
            </div>

            <div className="">
              <div>
                <h2 className="text-lg font-semibold">Payment Method</h2>
                <p>Cash on delivery (COD) - $23.14</p>
              </div>
              <div className="pt-3">
                <h2 className="text-lg font-semibold pr-[6.34rem]">
                  Billing Address
                </h2>
                <p>Mark</p>
                <p>RM10 6YS</p>
                <p>London, UK</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Receipt;
