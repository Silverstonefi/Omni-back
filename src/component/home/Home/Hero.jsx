import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import barcode from "../../assets/images/barcode.png";
import { setProductDetails } from "../../../Redux/action";
import { setToken } from "../../../Redux/action";


const images = [
  {
    src: "./image4.jpg",
    textKey: "Welcome",
    contentKey: "OmniMove Express Services",
  },
  {
    src: "./5.jpg",
    textKey: "Logistics Services",
    contentKey: "We are reliable and efficient",
  },
  {
    src: "./6.jpg",
    textKey: "Logistics Services",
    contentKey: "Faster is fatal, Slower is safe",
  },
];

const Hero = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  const [dotPosition, setDotPosition] = useState("right");
  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };

  const [product, setProduct] = useState(null);
  const [id, setId] = useState("");

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();
const handleInputChange = (e) => {
    setId(e.target.value);
  };
  const Track = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.omnimoveexpress.org/products/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error('Product Not Found');
      }
      const res = await response.json();
      setProduct(res);
      setError(null);
      dispatch(setProductDetails(res)); 
      navigate("/public/tracking_product");
    } catch (err) {
      setError(err.message || "Product Not Found");
      setProduct(null);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSubmit = (e, message) => {
    e.preventDefault();
    if (!id) {
      // If id is empty, alert and return
      alert("Please enter a product ID");
      return;
    } else {
      alert("Fetching product.. Click \"OK\" to continue");
      Track();
    }
    
  };
  
  // const showAlert = (message) => {
  //   alert(message);
  //   // Assuming you want to start tracking after showing alert. If so, remove from here and ensure it's part of your form submit or button click logic.
  //   handleSubmit(); // You might not need to call this here. Instead, ensure your button click handles the tracking process correctly.
  // };
  


  return (
    <Carousel autoplay dotPosition={dotPosition}>
      {images.map((image, index) => (
        <div className="relative" key={index}>
          <img
            className="w-full relative h-[50vh] lg:h-[90vh]"
            src={image.src}
            alt="ttt"
          />
          <div className="absolute lg:top-[7rem] top-[5rem] lg:px-28 px-5 font-cabin text-white">
            <p className="text-lg lg:text-left text-center">{t(image.textKey)}</p>
            <h3 className="lg:pt-10 pt-3 lg:text-6xl text-3xl lg:w-[987j0%] lg:text-left text-center">
            {t(image.contentKey)}
            </h3>
            <div>
              {/* <div className="bg-white flex justify-between lg:px-7 px-5 py-2 mt-5"> */}
                <form onSubmit={handleSubmit} className="bg-white flex justify-between lg:px-7 px-5 py-2 mt-5">
                  <input
                    className="border-none lg:w-[30rem] pr-3 outline-none text-black"
                    type="text"
                    id="productId"
                    value={id}
                    onChange={handleInputChange}
                    placeholder={t("Tracking ID")}
                  />
                  <button type="submit" className="default-btn lg:py-5 py-3 lg:px-[2.5rem] px-5 leading-none bg-[#fa4612] transition-all duration-500 z-1 capitalize border border-white rounded-md relative cursor-pointer text-white lg:before:top-[8px] before:top-0">
                    {t('Track Now')}
                  </button>
                </form>

                <style jsx>{`
                  .default-btn::before {
                    content: "";
                    position: absolute;
                    padding: 0;
                    border-right: 0;
                    border-top: 20px solid transparent;
                    border-left: 20px solid #fff;
                    border-bottom: 20px solid transparent;

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
                {isLoading && (
                  <div className="bg-blue-500 text-white py-2 px-4 rounded">
                   {t("Please wait while we track your product...")}
                  </div>
                )}
                {error && <div className="text-red-500">{error}</div>}
              </div>
            </div>
          </div>
        // </div>
      ))}
      
    </Carousel>
  );
};

export default Hero;
