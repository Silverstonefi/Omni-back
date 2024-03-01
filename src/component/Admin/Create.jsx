import React, { useState } from "react";
import { isEmail } from "validator";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProductDetails, setToken } from "../../Redux/action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Create = ({ type }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [productId, setProductId] = useState("");
  const [dhlNum, setDhlNum] = useState("");
  const [address, setAddress] = useState("");
  const [clientName, setClientName] = useState("");
  const [statusAddress, setStatusAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [recName, setRecName] = useState("");
  const [recEmail, setRecEmail] = useState("");
  const [recPhone, setRecPhone] = useState("");
  const [recAddress, setRecAddress] = useState("");
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState("");
  const [distance, setDistance] = useState("");
  const [location, setLocation] = useState("");
  const [amt, setAmt] = useState(0);
  const [client, setClient] = useState("");
  const [error, setError] = useState("");
  const [terms, setTerms] = useState(false);
  const [exists, setExists] = useState("");
  const [msg, setMsg] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    productId: "",
    dhlNum: "",
    amt: "",
    weight: "",
    distance: "",
    description: "",
    statusAddress: "",
    clientName: "",
    email: "",
    phone: "",
    address: "",
    recName: "",
    recEmail: "",
    recPhone: "",
    recAddress: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    productId: "",
    weight: "",
    amt: "",
    dhlNum: "",
    distance: "",
    description: "",
    clientName: "",
    email: "",
    phone: "",
    address: "",
    recName: "",
    recEmail: "",
    recPhone: "",
    recAddress: "",
    statusAddress: "",
  });

  const validateForm = () => {
    let newErrors = { ...errors };

    // Perform validation based on input type
    // Text validation
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required.";
    } else {
      newErrors.name = "";
    }
    if (formData.description.trim() === "") {
      newErrors.description = "description is required.";
    } else {
      newErrors.name = "";
    }
    if (formData.clientName.trim() === "") {
      newErrors.clientName = "Sender's Name is required.";
    } else {
      newErrors.clientName = "";
    }
    if (formData.address.trim() === "") {
      newErrors.address = "Sender's Address is required.";
    } else {
      newErrors.address = "";
    }
    // if (formData.location.trim() === "") {
    //   newErrors.location = "State Products Current Location";
    // } else {
    //   newErrors.address = "";
    // }
    if (formData.recAddress.trim() === "") {
      newErrors.recAddress = "Receiver's Address is required.";
    } else {
      newErrors.recAddress = "";
    }
    if (formData.recName.trim() === "") {
      newErrors.recName = "Receiver's Name is required.";
    } else {
      newErrors.recName = "";
    }
    if (formData.statusAddress.trim() === "") {
      newErrors.statusAddress = "Status Address is required.";
    } else {
      newErrors.statusAddress = "";
    }
    if (formData.productId.trim() === "") {
      newErrors.productId = "productId is required.";
    } else {
      newErrors.statusAddress = "";
    }
    if (formData.dhlNum.trim() === "") {
      newErrors.dhlNum = "DHL is required.";
    } else {
      newErrors.statusAddress = "";
    }
    

    // Number validation
    if (formData.weight.trim() === "") {
      newErrors.weight = "weight is required.";
    } else if (isNaN(Number(formData.weight))) {
      newErrors.weight = "weight must be a number.";
    } else {
      newErrors.weight = "";
    }

    if (formData.distance.trim() === "") {
      newErrors.distance = "Distance is required.";
    } else if (isNaN(Number(formData.distance))) {
      newErrors.distance = "Distance must be a number.";
    } else {
      newErrors.distance = "";
    }
    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone is required.";
    } else if (isNaN(Number(formData.distance))) {
      newErrors.phone = "Phone must be a number.";
    } else {
      newErrors.phone = "";
    }
    if (formData.recPhone.trim() === "") {
      newErrors.recPhone = "Phone is required.";
    } else if (isNaN(Number(formData.recPhone))) {
      newErrors.recPhone = "Phone must be a number.";
    } else {
      newErrors.recPhone = "";
    }
    if (formData.amt.trim() === "") {
      newErrors.amt = "Price is required.";
    } else if (isNaN(Number(formData.distance))) {
      newErrors.amt = "Price must be a number.";
    } else {
      newErrors.amt = "";
    }

    // Email validation
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required.";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Email must be a valid email address.";
    } else {
      newErrors.email = "";
    }
    if (formData.recEmail.trim() === "") {
      newErrors.recEmail = "Receiver's mail is required.";
    } else if (!isValidEmail(formData.recEmail)) {
      newErrors.recEmail = "Receiver's Email must be a valid email address.";
    } else {
      newErrors.recEmail = "";
    }

    // Update the errors state
    setErrors(newErrors);
  };

  const isValidEmail = (email) => {
    // Email validation logic (you can use a regular expression or any other validation method)
    // For simplicity, this example just checks if the email contains an '@' symbol
    return email.includes("@");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log({name})
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData, "formData")
  };

  const isEmail = (email) => {
    // Email validation logic using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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

  const Create = (e) => {
    e.preventDefault();

    if (validateForm()) {
      return;
    }
    const { name,
        productId,
        address,
        dhlNum,
        clientName,
        phone,
        amt,
        email,
        recName,
        recEmail,
        recAddress,
        weight,
        distance,
        description,
        recPhone, statusAddress, location } = formData

    fetch("https://api.omnimoveexpress.org/products", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        productId,
        address,
        dhlNum,
        clientName,
        phone,
        amt,
        email,
        recName,
        recEmail,
        recAddress,
        weight,
        distance,
        description,
        recPhone,
        statusAddress,
        location,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("ressssssss", res);
        const { product } = res;

        if (res.error) {
          setError(res.error);
          console.log("mssssg", error);
        }

        if (product !== undefined) {
          dispatch(setProductDetails(product));
          toast.success(`New Product Created ${product.name}`, {
            onClose: () => navigate("/admin/products", { replace: true })
            
          });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <section className="font-cabin lg:pb-28 lg:pt-0 py-10">
        <form
          action=""
          id="productForm"
          className="lg:mx-28 lg:shadow-md lg:shadow-gray-200 lg:py-10"
        >
          <header className="text-center">
            <p className="text-[#fa4612] uppercase">product_Details</p>
            <h1 className="text-[#161b5ce8] lg:font-semibold lg:text-5xl text-3xl px-5 font-bold lg:py-5 py-2">
              Create New Product
            </h1>
          </header>
          <div>
            <div className="lg:grid lg:grid-cfcols-2 lg:px-5 px-2 mx-5">
              <div className="py-4">
                <p className="text-2xl text-center bg-[#fa4412d3] text-white">
                  Consignment Details
                </p>
              </div>
              <label className="text-[#fa4412d3] font-semibold tracking-wider">
                Name:
              </label>{" "}
              {errors.name && <p className="text-red-500">{errors.name}</p>}
              <input
                name="name"
                className="mr-5 lg:my-8 my-4 h-12 w-full lg:w-auto outline-none border text-sm text-gray-500 px-7 border-gray-300 focus:border focus:border-[#fa4612] focus:transition focus:duration-300"
                placeholder="Enter Product Name"
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
              <label className="text-[#fa4412d3] font-semibold tracking-wider">
                ProductId:
              </label>
              {errors.productId && (
                <p className="text-red-500">{errors.productId}</p>
              )}
              <input
                name="productId"
                className={`mr-5 lg:my-8 my-4 h-12 w-full lg:w-auto outline-none text-sm border text-gray-500 px-7 border-gray-300 focus:border focus:border-[#fa4612] focus:transition focus:duration-300`}
                placeholder="Enter ProductID"
                type="text"
                value={formData.productId}
                onChange={handleChange}
              />{" "}
              <label className="text-[#fa4412d3] font-semibold tracking-wider">
                Weight:
              </label>
              {errors.weight && <p className="text-red-500">{errors.weight}</p>}
              <input
                name="weight"
                className="mr-5 lg:my-8 my-4 h-12 w-full lg:w-auto outline-none text-sm border text-gray-500 px-7 border-gray-300 focus:border focus:border-[#fa4612] focus:transition focus:duration-300"
                placeholder="Enter Product Weight"
                type="text"
                value={formData.weight}
                onChange={handleChange}
              />
              <label className="text-[#fa4412d3] font-semibold tracking-wider">
                Distance Between Sender & Receiver:
              </label>
              {errors.distance && (
                <p className="text-red-500">{errors.distance}</p>
              )}
              <input
                name="distance"
                className="mr-5 lg:my-8 my-4 h-12 w-full lg:w-auto outline-none text-sm border text-gray-500 px-7 border-gray-300 focus:border focus:border-[#fa4612] focus:transition focus:duration-300"
                placeholder="Enter Distance"
                type="text"
                value={formData.distance}
                onChange={handleChange}
              />
              <label className="text-[#fa4412d3] font-semibold tracking-wider">
                Tracking Code:
              </label>
              {errors.dhlNum && <p className="text-red-500">{errors.dhlNum}</p>}
              <input
                name="dhlNum"
                className="mr-5 lg:my-8 my-4 h-12 w-full lg:w-auto outline-none text-sm border text-gray-500 px-7 border-gray-300 focus:border focus:border-[#fa4612] focus:transition focus:duration-300"
                placeholder="Enter Tracking code"
                type="text"
                value={formData.dhlNum}
                onChange={handleChange}
              />
              <label className="text-[#fa4412d3] font-semibold tracking-wider">
                Price:
              </label>
              {errors.amt && <p className="text-red-500">{errors.amt}</p>}
              <input
                name="amt"
                className="mr-5 lg:my-8 my-4 h-12 w-full lg:w-auto outline-none text-sm border text-gray-500 px-7 border-gray-300 focus:border focus:border-[#fa4612] focus:transition focus:duration-300"
                placeholder="Enter Price"
                type="text"
                value={formData.amt}
                onChange={handleChange}
              />{" "}
              <label className="text-[#fa4412d3] font-semibold tracking-wider">
                Product Location:
              </label>
              {errors.statusAddress && <p className="text-red-500">{errors.statusAddress}</p>}
              <input
                name="statusAddress"
                className="mr-5 lg:my-8 my-4 h-12 w-full lg:w-auto outline-none text-sm border text-gray-500 px-7 border-gray-300 focus:border focus:border-[#fa4612] focus:transition focus:duration-300"
                placeholder="Enter Product Location"
                type="text"
                value={formData.statusAddress}
                onChange={handleChange}
              />{" "}
              <label className="text-[#fa4412d3] font-semibold tracking-wider">
                Description:
              </label>
              {errors.description && (
                <p className="text-red-500">{errors.description}</p>
              )}
              <textarea
                name="description"
                className="mr-5 lg:my-8 my-4 pt-3 w-full lg:w-auto outline-none text-sm border text-gray-500 px-7 border-gray-300 focus:border focus:border-[#fa4612] focus:transition focus:duration-300"
                placeholder="Enter Product Description"
                type="text"
                value={formData.description}
                onChange={handleChange}
              />
              {/* sender */}
              <div className="py-4">
                <p className="text-2xl text-center bg-[#fa4412d3] text-white">
                  Sender's Details
                </p>
              </div>
              <label className="text-[#fa4412d3] font-semibold tracking-wider">
                Name:
              </label>
              {errors.clientName && (
                <p className="text-red-500">{errors.clientName}</p>
              )}
              <input
                name="clientName"
                className="mr-5 lg:my-8 my-4 h-12 w-full lg:w-auto outline-none text-sm border text-gray-500 px-7 border-gray-300 focus:border focus:border-[#fa4612] focus:transition focus:duration-300"
                placeholder="Enter Sender's Name"
                type="text"
                value={formData.clientName}
                onChange={handleChange}
              />{" "}
              <label className="text-[#fa4412d3] font-semibold tracking-wider">
                Email:
              </label>
              {errors.email && <p className="text-red-500">{errors.email}</p>}
              <input
                name="email"
                className={`mr-5 lg:my-8 my-4 h-12 w-full lg:w-auto outline-none text-sm border ${
                  error ? "border-red-500" : "border-gray-300"
                } text-gray-500 px-7 border-gray-300 focus:border focus:border-[#fa4612] focus:transition focus:duration-300`}
                placeholder="Enter Sender's Email Address"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <label className="text-[#fa4412d3] font-semibold tracking-wider">
                Phone:
              </label>
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              <input
                name="phone"
                className="mr-5 lg:my-8 my-4 h-12 w-full lg:w-auto outline-none text-sm border text-gray-500 px-7 border-gray-300 focus:border focus:border-[#fa4612] focus:transition focus:duration-300"
                placeholder="Enter Sender's Phone Number"
                type="text"
                value={formData.phone}
                onChange={handleChange}
              />
              <label className="text-[#fa4412d3] font-semibold tracking-wider">
                Address:
              </label>
              {errors.address && (
                <p className="text-red-500">{errors.address}</p>
              )}
              <input
                name="address"
                className="mr-5 lg:my-8 my-4 h-12 w-full lg:w-auto outline-none text-sm border text-gray-500 px-7 border-gray-300 focus:border focus:border-[#fa4612] focus:transition focus:duration-300"
                placeholder="Enter Sender's Address"
                type="text"
                value={formData.address}
                onChange={handleChange}
              />
              {/* receiver */}
              <div className="py-4">
                <p className="text-2xl text-center bg-[#fa4412d3] text-white">
                  Reciever's Details
                </p>
              </div>
              <label className="text-[#fa4412d3] font-semibold tracking-wider">
                Name:
              </label>
              {errors.recName && (
                <p className="text-red-500">{errors.recName}</p>
              )}
              <input
                name="recName"
                className="mr-5 lg:my-8 my-4 h-12 w-full lg:w-auto outline-none text-sm border text-gray-500 px-7 border-gray-300 focus:border focus:border-[#fa4612] focus:transition focus:duration-300"
                placeholder="Enter Reciever's Name"
                type="text"
                value={formData.recName}
                onChange={handleChange}
              />{" "}
              <label className="text-[#fa4412d3] font-semibold tracking-wider">
                Email:
              </label>
              {errors.recEmail && (
                <p className="text-red-500">{errors.recEmail}</p>
              )}
              <input
                name="recEmail"
                className="mr-5 lg:my-8 my-4 h-12 w-full lg:w-auto outline-none text-sm border text-gray-500 px-7 border-gray-300 focus:border focus:border-[#fa4612] focus:transition focus:duration-300"
                placeholder="Enter Reciever's Email Address"
                type="text"
                value={formData.recEmail}
                onChange={handleChange}
              />
              <label className="text-[#fa4412d3] font-semibold tracking-wider">
                Phone:
              </label>
              {errors.recPhone && (
                <p className="text-red-500">{errors.recPhone}</p>
              )}
              <input
                name="recPhone"
                className="mr-5 lg:my-8 my-4 h-12 w-full lg:w-auto outline-none text-sm border text-gray-500 px-7 border-gray-300 focus:border focus:border-[#fa4612] focus:transition focus:duration-300"
                placeholder="Enter Reciever's Phone Number"
                type="text"
                value={formData.recPhone}
                onChange={handleChange}
              />
              <label className="text-[#fa4412d3] font-semibold tracking-wider">
                Address:
              </label>
              {errors.recAddress && (
                <p className="text-red-500">{errors.recAddress}</p>
              )}
              <input
                name="recAddress"
                className="mr-5 lg:my-8 my-4 h-12 w-full lg:w-auto outline-none text-sm border text-gray-500 px-7 border-gray-300 focus:border focus:border-[#fa4612] focus:transition focus:duration-300"
                placeholder="Enter Reciever's Address"
                type="text"
                value={formData.recAddress}
                onChange={handleChange}
              />
              <label className="text-[#fa4412d3] font-semibold tracking-wider">
                Current Location OF Product:
              </label>
              {errors.location && (
                <p className="text-red-500">{errors.location}</p>
              )}
              <input
                name="location"
                className="mr-5 lg:my-8 my-4 h-12 w-full lg:w-auto outline-none text-sm border text-gray-500 px-7 border-gray-300 focus:border focus:border-[#fa4612] focus:transition focus:duration-300"
                placeholder="Enter Product's Current Location"
                type="text"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col justify-center">
            <ToastContainer />
              <div className="flex justify-center pt-5">
                <button
                  onClick={Create}
                  className="default-btn w-fit text-orange-500  py-5 px-[3rem] leading-none transition-all duration-500 z-1 capitalize border border-orange-500 hover:border-white rounded-md relative cursor-pointer hover:text-white"
                >
                  Create
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

export default Create;
