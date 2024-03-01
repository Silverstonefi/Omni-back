import React from 'react';
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import wechat from "../assets/images/wechat.png";
import QQ from "../assets/images/tencent-qq.png";
import line from "../assets/images/line.png";


const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="relatvive botvtom-0 bg-[#24416b] py-8 text-white lg:px-28">
      <div className="lg:flex px-5 text-center justify-between">
        <div className="flex text-sm justify-center">
          <p className="pt-1.5 px-1">{t("Terms & condition")}</p>
          <span className="lg:font-bold font-extrabold text-base text-[#fa4612]">
            .
          </span>
          <p className="pt-1.5 px-1">{t("Privacy & Policy")}</p>
          <span className="lg:font-bold font-extrabold text-base text-[#fa4612]">
            .
          </span>
          <p className="pt-1.5 px-1">{t("Login")}</p>
        </div>
        <div className='pt-3'>
          <p>
            {t("copyright @ 2020")}{" "}
            <span className="text-[#fa4612] text-sm">
              {t("OmniMove Express Services")}
            </span>
          </p>
        </div>
        <div className='flex gap-5 lg:justify-normal justify-center py-2'>
          <FaFacebookF className="bg-[#1b5bb4] p-1" size={25} />          
          <img className='w-7 bg-white p-1 rounded-md' src={QQ} alt="" />
          {/* <AiOutlineTwitter className="bg-[#1b5bb4] p-1" size={25} /> */}
          <AiOutlineInstagram className="bg-[#1b5bb4] p-1" size={25} />          
          <img className='w-6' src={wechat} alt="" />
          {/* <FaLinkedinIn className="bg-[#1b5bb4] p-1" size={25} /> */}
          <AiFillYoutube className="bg-[#1b5bb4] p-1" size={25} />
          <img className='w-6' src={line} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;