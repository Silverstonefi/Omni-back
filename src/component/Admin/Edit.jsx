import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineRollback } from "react-icons/ai";
import { setAdProduct } from "../../Redux/action";
import { PRODUCT_DETAILS } from "../../Redux/actionTypes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Edit = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const notify = (word) => {
    toast.info(`${word}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const adProduct = useSelector((state) => state.auth.product);
  console.log("aduser", adProduct);

  const [product, setProduct] = useState({
    ...adProduct,
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
    console.log("product", product);
  };
  console.log("proa", product);
  const onEdit = async (event) => {
    event.preventDefault();
    const {
      productId,
      name,
      client,
      address,
      dhl,
      order,
      amt,
      phone,
      email,
      recName,
      recAddress,
      recEmail,
      recPhone,
      distance,
      weight,
      description,
      statusAddress,
      location
    } = product;

    const iseditUser = await fetch(
      `https://api.omnimoveexpress.org/products/${productId}`,
      {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          clientName: client,
          address: address,
          name,
          dhlNum: dhl,
          order: order,
          amount: amt,
          phone: phone,
          email: email,
          distance: distance,
          weight: weight,
          description: description,
          recAddress: recAddress,
          recEmail: recEmail,
          recPhone: recPhone,
          recName: recName,
          statusAddress: statusAddress,
          location: location
        }),
      }
    );

    let resp = await iseditUser.json();
    console.log("edit resp", resp);   
    toast.success(`Product ${product.name} has been edited successfully`, {
      onClose: () => setTimeout(() => navigate("/admin/products", { replace: true }), 0)
    });   

  };

  const onDel = async () => {
    const { productId } = product;
    const isNotThere = await fetch(
      `https://api.omnimoveexpress.org/products/${productId}`,
      {
        method: "delete",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      }
    );
      console.log("first log delte", productId);
    let resp = await isNotThere.json();
    toast.success(`Product ${product.name} has been deleted successfully`, {
      onClose: () => navigate("/admin/products", { replace: true })
    });
  };

  return (
    <div className="py-10">
      <div className="text-center font-cabin font-semibold text-xl uppercase tracking-wider">
        <h1>Edit Details</h1>
      </div>
      <div className="my-5 flex items-center gap-1 font-bold cursor-pointer">
        <AiOutlineRollback
          className="text-blue-300"
          size={34}
          onClick={() => {
            navigate("/admin/products");
          }}
        />
        Back
      </div>
      <form className="px-5 border shadow-xl mb-4 text-black capitalize text-xl grid md:grid-cols-2 gap-x-10 py-3">
        <div className="mb-2 pt-0">
          <label className="text-xs">Product_ID</label>
          <input
            name="productId"
            disabled
            value={product.productId}
            type="text"
            placeholder={`${product.productId}`}
            className="px-3 py-3 placeholder-gray-900 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
          />
        </div>
        <div className="mb-2 pt-0">
          <label className="text-lg font-semibold">Product Name:</label>
          <input
            name="name"
            onChange={onChange}
            value={product.name}
            type="text"
            placeholder={`${product.name}`}
            className="px-3 py-3 placeholder-gray-900 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline focus:bg-slate-200 w-full"
          />
        </div>
        <div className="mb-2 pt-0">
          <label className="text-lg font-semibold">Price:</label>
          <input
            name="amount"
            onChange={onChange}
            value={product.amount}
            type="text"
            placeholder={`${product.amount}`}
            className="px-3 py-3 placeholder-gray-900 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full focus:bg-slate-200"
          />
        </div>{" "}
        <div className="mb-2 pt-0">
          <label className="text-lg font-semibold">Tracking Code:</label>
          <input
            name="dhlNum"
            onChange={onChange}
            value={product.dhlNum}
            type="text/number"
            placeholder={`${product.dhlNum}`}
            className="px-3 py-3 placeholder-gray-900 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full focus:bg-slate-200"
          />
        </div>
        <div className="mb-2 pt-0">
          <label className="text-lg font-semibold">Product Weight:</label>
          <input
            name="weight"
            onChange={onChange}
            value={product.weight}
            type="text"
            placeholder={`${product.weight}`}
            className="px-3 py-3 placeholder-gray-900 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline focus:bg-slate-200 w-full"
          />
        </div>
        <div className="mb-2 pt-0">
          <label className="text-lg font-semibold">Product Description:</label>
          <input
            name="description"
            onChange={onChange}
            value={product.description}
            type="text"
            placeholder={`${product.description}`}
            className="px-3 py-3 placeholder-gray-900 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline focus:bg-slate-200 w-full"
          />
        </div>
        <div className="mb-2 pt-0">
          <label className="text-lg font-semibold">Distance:</label>
          <input
            name="distance"
            onChange={onChange}
            value={product.distance}
            type="text"
            placeholder={`${product.distance}`}
            className="px-3 py-3 placeholder-gray-900 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline focus:bg-slate-200 w-full"
          />
        </div>
        <div className="mb-2 pt-0">
          <label className="text-lg font-semibold">Destination:</label>
          <input
            name="statusAddress"
            onChange={onChange}
            value={product.statusAddress}
            type="text"
            placeholder={`${product.statusAddress}`}
            className="px-3 py-3 placeholder-gray-900 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full focus:bg-slate-200"
          />
        </div>{" "}
        <div className="mb-2 pt-0">
          <label className="text-lg font-semibold">Sender's Name:</label>
          <input
            name="clientName"
            onChange={onChange}
            value={product.clientName}
            type="text"
            placeholder={`${product.clientName}`}
            className="px-3 py-3 placeholder-gray-900 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full focus:bg-slate-200"
          />
        </div>
        <div className="mb-2 pt-0">
          <label className="text-lg font-semibold">Sender's Email:</label>
          <input
            name="email"
            onChange={onChange}
            value={product.email}
            type="text"
            placeholder={`${product.email}`}
            className="px-3 py-3 placeholder-gray-900 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full focus:bg-slate-200"
          />
        </div>
        <div className="mb-2 pt-0">
          <label className="text-lg font-semibold">Sender's Phone:</label>
          <input
            name="phone"
            onChange={onChange}
            value={product.phone}
            type="text"
            placeholder={`${product.phone}`}
            className="px-3 py-3 placeholder-gray-900 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full focus:bg-slate-200"
          />
        </div>
        <ToastContainer />
        <div className="mb-2 pt-0">
          <label className="text-lg font-semibold">Sender's Address:</label>
          <input
            name="address"
            onChange={onChange}
            value={product.address}
            type="text"
            placeholder={`${product.address}`}
            className="px-3 py-3 placeholder-gray-900 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full focus:bg-slate-200"
          />
        </div>
        {/* receiver */}
        <div className="mb-2 pt-0">
          <label className="text-lg font-semibold">Receiver's Name:</label>
          <input
            name="recName"
            onChange={onChange}
            value={product.recName}
            type="text"
            placeholder={`${product.recName}`}
            className="px-3 py-3 placeholder-gray-900 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full focus:bg-slate-200"
          />
        </div>
        <div className="mb-2 pt-0">
          <label className="text-lg font-semibold">Receiver's Email:</label>
          <input
            name="recEmail"
            onChange={onChange}
            value={product.recEmail}
            type="text"
            placeholder={`${product.recEmail}`}
            className="px-3 py-3 placeholder-gray-900 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full focus:bg-slate-200"
          />
        </div>
        <div className="mb-2 pt-0">
          <label className="text-lg font-semibold">Receiver's Phone:</label>
          <input
            name="recPhone"
            onChange={onChange}
            value={product.recPhone}
            type="text"
            placeholder={`${product.recPhone}`}
            className="px-3 py-3 placeholder-gray-900 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full focus:bg-slate-200"
          />
        </div>
        <div className="mb-2 pt-0">
          <label className="text-lg font-semibold">Receiver's Address:</label>
          <input
            name="recAddress"
            onChange={onChange}
            value={product.recAddress}
            type="text"
            placeholder={`${product.recAddress}`}
            className="px-3 py-3 placeholder-gray-900 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full focus:bg-slate-200"
          />
        </div>
        <div className="mb-2 pt-0">
          <label className="text-lg font-semibold">Current Location:</label>
          <input
            name="location"
            onChange={onChange}
            value={product.location}
            type="text"
            placeholder={`${product.location}`}
            className="px-3 py-3 placeholder-gray-900 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full focus:bg-slate-200"
          />
        </div>
        <div className="mt-8 text-gray-600 flex justify-between md:w-[25%] gap-2">
          <button
            onClick={onEdit}
            className="bg-green-500 text-white active:bg-green-800 font-bold uppercase text-xs px-4 py-2 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Save
          </button>

          <button
            onClick={onDel}
            className="bg-red-500 text-white active:bg-red-800 font-bold uppercase text-xs px-4 py-2 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
