import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAdProduct } from "../../Redux/action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({
  product = { name: "", clientName: "", order: "", productId: "" },
  index,
}) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const notify = (word) => {
    toast.info(`${word}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const Edituser = () => {
    console.log("usersssssssssss", product);
    dispatch(setAdProduct(product));
    navigate("/editProfile", { replace: true });
  };

  const onDel = async () => {
    const { productId } = product;
    console.log({ productId });
    const isNotThere = await fetch(
      `https://api.omnimoveexpress.org/products/${productId}`,
      {
        method: "delete",
        headers: { "Content-Type": "application/json" },
      }
    );
    let resp = await isNotThere.json();
    console.log("edit resp", resp);
    navigate("/admin/products", { replace: true });    
    toast.success(`Deleted ${product.name}!`, {
      onClose: () => {
          window.location.reload();
      }
  });  
  };

  return (
    <div className="">
      <div className="shadow-md shadow-slate-400 py-3 px-3 rounded-lg">
        <div className="mt-2">
          <div className="flex justify-between ">
            <div className="flex gap-2">
              <div>
                <p className="w-20 h-20 rounded-full lg:mx-5 bg-[#fa4612] text-center pt-6 text-lg text-white">
                  {index}
                </p>
                <p className="lg:text-center pt-2">{product.name}</p>
              </div>
              <ToastContainer />

              <div className="">
                <div className="text-base pt-5 leading-8">
                  <p>{`Sender: ${product.clientName}`}</p>
                  <p>{`Id: ${product.productId}..`}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="text-gray-600 pt-2">
                <FiEdit
                  className="text-blue-300 cursor-pointer mb-3"
                  size={34}
                  onClick={Edituser}
                  product={product}
                />
                <RiDeleteBinLine
                  className="text-red-400 cursor-pointer"
                  size={34}
                  onClick={onDel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
