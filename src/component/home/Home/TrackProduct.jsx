import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { setProductDetails } from "../../../Redux/action";
import { setToken } from "../../../Redux/action";
import barcode from "../../assets/images/barcode.png";

const TrackProduct = () => {
  const { t } = useTranslation();

  const product = useSelector(state => state.auth.product); // Assuming 'productDetails' is the state where product details are stored

  const [id, setId] = useState("");

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();


  const handleInputChange = (e) => {
    setId(e.target.value);
  };


  return (
    <div className="w-[100%] lg:px-28 mx-auto">
        {error && <div className="text-red-500">{error}</div>}
          <div
            style={{
              backgroundImage: "url(/aboutbg.png)",
              backgroundPosition: "center center",
            }}
            className="md:w-[100%] mx-5 px-1 flex flex-col justifgy-center bg-blue-50 shadow-md"
          >
            <div className="py-5 px-5 md:text-2xl font-semibold font-cabin">
              <h1 className="pb-2">
                {t("PRODUCT ID")}: {product.productId} - {product.name}
              </h1>
              <h1>{t("PRODUCT NAME")}: {product.name}</h1>
            </div>
            <div className="pl-5 pr-44 rounded-e-md bg-blue-600 md:w-fit py-2 text-white">
              <h3>{t("Consignment Information")}</h3>
            </div>
            <div className="h-[70%g] border border-gray-300">
              <div className="">
                <p className="border-b px-5 border-gray-300 py-3">
                  {t("Product Name")}: {product.name}
                </p>
                <p className="border-b px-5 border-gray-300 py-3">
                  {t("Description")}: {product.description}
                </p>
                <p className="py-3 px-5">{t("Weight")}: {product.weight}</p>
              </div>
            </div>

            <div className="pl-5 pr-44 rounded-e-md bg-blue-600 md:w-fit py-2 text-white">
              <h3>{t("Receiver's Information<")}</h3>
            </div>
            <div className="h-[70%g] border border-gray-300">
              <div className="">
                <p className="border-b px-5 border-gray-300 py-3">
                  {t("Reciever's Name: ")}{product.recName}
                </p>
                <p className="border-b px-5 border-gray-300 py-3">
                  {t("Email Address")}: {product.recAddress}
                </p>
                <p className="border-b px-5 border-gray-300 py-3">
                  {t("Contact")}: {product.recPhone}
                </p>
                <p className="border-b px-5 border-gray-300 py-3">
                  {t("Address")}: {product.recAddress}
                </p>
                <p className="py-3 px-5">{t("Zip Code")}: {product.zipcode}</p>
              </div>
            </div>

            <div className="pl-5 pr-44 rounded-e-md bg-blue-600 md:w-fit py-2 text-white">
              <h3>{t("Sender's Information")}</h3>
            </div>
            <div className="h-[70%g] border border-gray-300">
              <div className="">
                <p className="border-b px-5 border-gray-300 py-3">
                  {t("Name")}: {product.clientName}
                </p>
                <p className="border-b px-5 border-gray-300 py-3">
                  {t("Email Address")}: {product.email}
                </p>
                <p className="border-b px-5 border-gray-300 py-3">
                  {t("Address")}: {product.address}
                </p>
                <p className="py-3 px-5">
                  {t("Distance Between Sender - Receiver")}: {product.distance} KM
                </p>
              </div>
            </div>

            <div className="pl-5 pr-44 rounded-e-md bg-blue-600 md:w-fit py-2 text-white">
              <h3>{t("Delivery Status")}</h3>
            </div>
            <div className="h-[70%g] border border-gray-300">
              <p className="text-center px-5 py-3">
                {t("This consignment with Tracking ID")} ({product.productId}) 
                {t("is on its way to")} {product.statusAddress}
              </p>
            </div>
            <div className="h-[70%g] border border-gray-300">
              <p className="text-center px-5 py-3">
                {t("This consignment with Tracking ID")} ({product.productId}) 
                {t("is currently at")} {product.location}
              </p>
            </div>

            <div className="flex justify-center pl-5t pr-44f rounded-e-md py-2 text-white">
              <div className="flex justify-center">
                <img className="md:w-[25rem] w-[18rem] flex justify-center" src={barcode} alt="barcode" />
              </div>
            </div>
          </div>
    </div>
  );
};

export default TrackProduct;
