import React from "react";
import { FaFacebookSquare, FaGooglePlay, FaTelegram } from "react-icons/fa";
import { FaSquareInstagram, FaSquareYoutube } from "react-icons/fa6";
import { GrApple } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="max-w-[1250px] m-auto flex justify-between border-t mt-15 mb-15  border-[#8B8E99]">
      <div className="flex flex-col gap-1 mt-8">
        <a href="#" className="">
          Haqida gapiryabman
        </a>
        <a href="#" className="text-[#8B8E99] text-[14px] font-normal">
          Topshirish punktlari
        </a>
        <a href="#" className="text-[#8B8E99] text-[14px] font-normal">
          Bo'sh ish o'rinlari
        </a>
      </div>

      <div className="flex flex-col gap-1 mt-8">
        <a href="#" className="">
          Foydalarga
        </a>
        <a href="#" className="text-[#8B8E99] text-[14px] font-normal">
          Biz nimadir haqida gapiryabmiz
        </a>
        <a href="#" className="text-[#8B8E99] text-[14px] font-normal">
          Savol-Javob
        </a>
      </div>

      <div className="flex flex-col gap-1 mt-8">
        <a href="#">Tadbirkorlarga</a>
        <a href="#" className="text-[#8B8E99] text-[14px] font-normal">
          Uzumda soting
        </a>
        <a href="#" className="text-[#8B8E99] text-[14px] font-normal">
          Xonalar yopiq
        </a>
        <a href="#" className="text-[#8B8E99] text-[14px] font-normal">
          Teshshirish punktini ochish
        </a>
      </div>

      <div className="flex flex-col mt-8 pr-4">
        <div className="flex flex-col gap-1">
          <a href="#">Ilovani olish</a>
          <div className="flex gap-3 mt-2.5">
            <a href="#" className="text-[14px] flex items-center gap-1">
              <GrApple size={23} /> AppStore
            </a>
            <a href="#" className="text-[14px] flex items-center gap-1">
              <FaGooglePlay size={20} /> Google Play
            </a>
          </div>
        </div>

        <div className="flex flex-col mt-8">
          <a href="#">Qo'rqoqlikdan foydalanish</a>
          <div className="flex gap-3 mt-2.5">
            <a href="#" className="text-[14px] flex items-center gap-1">
              <FaSquareInstagram size={40} className="instagram" />
            </a>
            <a href="#" className="text-[14px] flex items-center gap-1">
              <FaTelegram size={40} className="telegram" />
            </a>
            <a href="#" className="text-[14px] flex items-center gap-1">
              <FaFacebookSquare size={40} />
            </a>
            <a href="#" className="text-[14px] flex items-center gap-1">
              <FaSquareYoutube size={40} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;