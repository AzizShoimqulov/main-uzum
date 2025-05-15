import React, { useState } from "react";
import { motion } from "framer-motion";
import data from '../data';
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { IoChevronDownSharp, IoChevronUp, IoSearch } from "react-icons/io5";
import { ImDrawer } from "react-icons/im";
import { LuShoppingCart } from "react-icons/lu";
import { FaChevronDown, FaChevronRight, FaChevronUp, FaRegUser } from "react-icons/fa";
import { FcLikePlaceholder } from "react-icons/fc";

const Navbar = () => {
  const [mashrut, setMashrut] = useState(false);
  const { mahsulotKategoriya } = data;
  const [drobdown, setdrobdown] = useState(false);
  const [lang, setLang] = useState("uz");
  const [katalog, setKatalog] = useState(false);

  const languages = {
    uz: {
      label: "O'zbek tili",
      flag: "data:image/png;base64,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",
    },
    ru: {
      label: "Rus tili",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAD1BMVEX///8AOabVKx4AMqTTKxXmvQ9FAAAA9UlEQVR4nO3QsQGAMAzAsBT4/2b2eOwqnaAZAAAAAAAAAAAAAAAAAAAAAK69bHPYnJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JS87HNw+aknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk/oBg6TI4mvpq6EAAAAASUVORK5CYII=",
    },
  };

  const handleMashrut = () => setMashrut(!mashrut);
  const handledown = () => setdrobdown(!drobdown);
  const handleKatalog = () => setKatalog(!katalog);

  const iconVariants = {
    initial: { opacity: 0.5, rotateX: 90, scale: 0.5 },
    animate: { opacity: 1, rotateX: 0, scale: 1 },
    exit: { opacity: 0.5, rotateX: -90, scale: 0.5 },
  };
  return (
    <>
      <nav className="relative">
        <div className=" bg-[#F0F2F5]">
          <div className="max-w-[1250px] p-0.5 m-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a
                className="flex items-center gap-1 relative"
                href="#"
                onClick={handleMashrut}
              >
                <MdOutlineAddLocationAlt size={22} />
                <span className="flex items-center  gap-1 font-semibold">
                  Qarshi
                  <motion.span
                    key={mashrut ? "close" : "menu"}
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ display: "inline-block" }}
                  >
                    {mashrut ? (
                      <IoChevronUp size={22} />
                    ) : (
                      <IoChevronDownSharp size={22} />
                    )}
                  </motion.span>
                </span>
              </a>
              <a href="#" className="font-semibold text-[15px] text-[#1F202D]">
                Topshirish punktlari
              </a>
            </div>

            <ul className="flex items-center justify-between gap-2.5">
              <li>
                <a
                  href="#"
                  className="text-[#7F4DFF] text-[15px] hover:text-[#735dab]"
                >
                  Sotuvchi bo'lish
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#7F4DFF] text-[15px] hover:text-[#735dab]"
                >
                  Topshirish punktini ochish
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#4D4F59] text-[15px] hover:text-[#303030]"
                >
                  Savol-javob
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#4D4F59] text-[15px] hover:text-[#303030]"
                >
                  Buyurtmalarim
                </a>
              </li>
              <div className="relative inline-block text-left">
                <button
                  onClick={handledown}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
                >
                  <img
                    src={languages[lang].flag}
                    alt={lang}
                    className="w-5 h-5 rounded-full"
                  />
                  <span>{languages[lang].label}</span>
                </button>

                {drobdown && (
                  <div className="absolute bg-white rounded-[3px] shadow-2xl z-10">
                    {Object.keys(languages)
                      .filter((key) => key !== lang)
                      .map((key) => (
                        <button
                          key={key}
                          onClick={() => {
                            setLang(key);
                            setdrobdown(false);
                          }}
                          className="flex items-center gap-2 px-3 py-2 w-[130px] hover:bg-gray-100 rounded-[3px] cursor-pointer"
                        >
                          <img
                            src={languages[key].flag}
                            alt={key}
                            className="w-5 h-5 rounded-full"
                          />
                          <span>{languages[key].label}</span>
                        </button>
                      ))}
                  </div>
                )}
              </div>
            </ul>
          </div>
        </div>

        <div className="max-w-[1250px] m-auto pt-4 flex items-center justify-between">
          <a href="#">
            <svg
              data-v-78c72b34=""
              width="230"
              viewBox="0 0 215 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="Uzum"
              class="ui-icon  logo"
            >
              <rect
                width="31.9764"
                height="31.9764"
                rx="15.9882"
                fill="#FFFF00"
              ></rect>
              <path
                d="M3.75192 14.7933C3.27969 12.1152 3.04358 10.7761 3.38441 9.66131C3.68421 8.68069 4.28676 7.82017 5.1057 7.20306C6.0367 6.50149 7.37576 6.26538 10.0539 5.79316L18.144 4.36665C20.8221 3.89442 22.1612 3.65831 23.276 3.99914C24.2566 4.29894 25.1171 4.90149 25.7342 5.72043C26.4358 6.65143 26.6719 7.99049 27.1441 10.6686L28.2537 16.9611C28.7259 19.6393 28.962 20.9783 28.6212 22.0931C28.3214 23.0737 27.7188 23.9343 26.8999 24.5514C25.9689 25.2529 24.6298 25.489 21.9517 25.9613L13.8616 27.3878C11.1835 27.86 9.84441 28.0961 8.72961 27.7553C7.749 27.4555 6.88847 26.8529 6.27136 26.034C5.5698 25.103 5.33368 23.7639 4.86146 21.0858L3.75192 14.7933Z"
                fill="#7000FF"
              ></path>
              <path
                d="M20.5487 11.0839C21.0311 11.1901 21.4979 11.2808 21.9559 11.398C22.4426 11.5219 22.9249 11.6724 23.4072 11.8073C23.4758 11.8272 23.5024 11.8538 23.5024 11.9312C23.5001 13.4379 23.5156 14.9468 23.4957 16.4535C23.4736 18.073 22.9625 19.5376 21.978 20.8252C20.8806 22.2611 19.4447 23.1859 17.6881 23.6063C16.9956 23.7722 16.2898 23.8275 15.5796 23.7855C13.8915 23.6859 12.3959 23.0908 11.1171 21.9868C9.79849 20.8518 8.96661 19.4226 8.63253 17.7101C8.5374 17.2234 8.49979 16.73 8.49979 16.2344C8.49757 14.8074 8.49979 13.3826 8.49536 11.9556C8.49536 11.8604 8.52634 11.8272 8.61262 11.8007C9.533 11.5064 10.4711 11.2741 11.4202 11.1016C11.4291 11.0993 11.4379 11.1016 11.46 11.0993C11.46 11.137 11.46 11.1746 11.46 11.21C11.46 12.9998 11.4534 14.7919 11.4645 16.5818C11.4711 17.4845 11.5928 18.3761 11.9003 19.2323C12.1437 19.9115 12.5043 20.5177 13.0419 21.0089C13.5464 21.4669 14.1371 21.7567 14.7986 21.8983C15.7345 22.0996 16.6681 22.0841 17.5863 21.7943C18.6704 21.4536 19.4226 20.7323 19.9049 19.7168C20.1638 19.1748 20.3187 18.5995 20.416 18.0088C20.5244 17.3517 20.551 16.688 20.551 16.0242C20.551 14.4269 20.551 12.8273 20.551 11.2299C20.5487 11.1878 20.5487 11.148 20.5487 11.0839Z"
                fill="white"
              ></path>
              <path
                d="M17.3163 14.4027C16.4335 14.4027 15.5596 14.4027 14.6813 14.4027C14.6813 12.3452 14.6813 10.2898 14.6813 8.23665C14.9556 8.15036 16.7942 8.14372 17.3163 8.23001C17.3163 10.2876 17.3163 12.3452 17.3163 14.4027Z"
                fill="white"
              ></path>
              <path
                d="M20.5487 11.0839C21.0311 11.1901 21.4979 11.2808 21.9559 11.398C22.4426 11.5219 22.9249 11.6724 23.4072 11.8073C23.4758 11.8272 23.5024 11.8538 23.5024 11.9312C23.5001 13.4379 23.5156 14.9468 23.4957 16.4535C23.4736 18.073 22.9625 19.5376 21.978 20.8252C20.8806 22.2611 19.4447 23.1859 17.6881 23.6063C16.9956 23.7722 16.2898 23.8275 15.5796 23.7855C13.8915 23.6859 12.3959 23.0908 11.1171 21.9868C9.79849 20.8518 8.96661 19.4226 8.63253 17.7101C8.5374 17.2234 8.49979 16.73 8.49979 16.2344C8.49757 14.8074 8.49979 13.3826 8.49536 11.9556C8.49536 11.8604 8.52634 11.8272 8.61262 11.8007C9.533 11.5064 10.4711 11.2741 11.4202 11.1016C11.4291 11.0993 11.4379 11.1016 11.46 11.0993C11.46 11.137 11.46 11.1746 11.46 11.21C11.46 12.9998 11.4534 14.7919 11.4645 16.5818C11.4711 17.4845 11.5928 18.3761 11.9003 19.2323C12.1437 19.9115 12.5043 20.5177 13.0419 21.0089C13.5464 21.4669 14.1371 21.7567 14.7986 21.8983C15.7345 22.0996 16.6681 22.0841 17.5863 21.7943C18.6704 21.4536 19.4226 20.7323 19.9049 19.7168C20.1638 19.1748 20.3187 18.5995 20.416 18.0088C20.5244 17.3517 20.551 16.688 20.551 16.0242C20.551 14.4269 20.551 12.8273 20.551 11.2299C20.5487 11.1878 20.5487 11.148 20.5487 11.0839Z"
                fill="white"
              ></path>
              <path
                d="M17.3163 14.4027C16.4335 14.4027 15.5596 14.4027 14.6813 14.4027C14.6813 12.3452 14.6813 10.2898 14.6813 8.23665C14.9556 8.15036 16.7942 8.14372 17.3163 8.23001C17.3163 10.2876 17.3163 12.3452 17.3163 14.4027Z"
                fill="white"
              ></path>
              <path
                d="M20.5487 11.0839C21.0311 11.1901 21.4979 11.2808 21.9559 11.398C22.4426 11.5219 22.9249 11.6724 23.4072 11.8073C23.4758 11.8272 23.5024 11.8538 23.5024 11.9312C23.5001 13.4379 23.5156 14.9468 23.4957 16.4535C23.4736 18.073 22.9625 19.5376 21.978 20.8252C20.8806 22.2611 19.4447 23.1859 17.6881 23.6063C16.9956 23.7722 16.2898 23.8275 15.5796 23.7855C13.8915 23.6859 12.3959 23.0908 11.1171 21.9868C9.79849 20.8518 8.96661 19.4226 8.63253 17.7101C8.5374 17.2234 8.49979 16.73 8.49979 16.2344C8.49757 14.8074 8.49979 13.3826 8.49536 11.9556C8.49536 11.8604 8.52634 11.8272 8.61262 11.8007C9.533 11.5064 10.4711 11.2741 11.4202 11.1016C11.4291 11.0993 11.4379 11.1016 11.46 11.0993C11.46 11.137 11.46 11.1746 11.46 11.21C11.46 12.9998 11.4534 14.7919 11.4645 16.5818C11.4711 17.4845 11.5928 18.3761 11.9003 19.2323C12.1437 19.9115 12.5043 20.5177 13.0419 21.0089C13.5464 21.4669 14.1371 21.7567 14.7986 21.8983C15.7345 22.0996 16.6681 22.0841 17.5863 21.7943C18.6704 21.4536 19.4226 20.7323 19.9049 19.7168C20.1638 19.1748 20.3187 18.5995 20.416 18.0088C20.5244 17.3517 20.551 16.688 20.551 16.0242C20.551 14.4269 20.551 12.8273 20.551 11.2299C20.5487 11.1878 20.5487 11.148 20.5487 11.0839Z"
                fill="white"
              ></path>
              <path
                d="M17.3163 14.4027C16.4335 14.4027 15.5596 14.4027 14.6813 14.4027C14.6813 12.3452 14.6813 10.2898 14.6813 8.23665C14.9556 8.15036 16.7942 8.14372 17.3163 8.23001C17.3163 10.2876 17.3163 12.3452 17.3163 14.4027Z"
                fill="white"
              ></path>
              <path
                d="M20.5487 11.0839C21.0311 11.1901 21.4979 11.2808 21.9559 11.398C22.4426 11.5219 22.9249 11.6724 23.4072 11.8073C23.4758 11.8272 23.5024 11.8538 23.5024 11.9312C23.5001 13.4379 23.5156 14.9468 23.4957 16.4535C23.4736 18.073 22.9625 19.5376 21.978 20.8252C20.8806 22.2611 19.4447 23.1859 17.6881 23.6063C16.9956 23.7722 16.2898 23.8275 15.5796 23.7855C13.8915 23.6859 12.3959 23.0908 11.1171 21.9868C9.79849 20.8518 8.96661 19.4226 8.63253 17.7101C8.5374 17.2234 8.49979 16.73 8.49979 16.2344C8.49757 14.8074 8.49979 13.3826 8.49536 11.9556C8.49536 11.8604 8.52634 11.8272 8.61262 11.8007C9.533 11.5064 10.4711 11.2741 11.4202 11.1016C11.4291 11.0993 11.4379 11.1016 11.46 11.0993C11.46 11.137 11.46 11.1746 11.46 11.21C11.46 12.9998 11.4534 14.7919 11.4645 16.5818C11.4711 17.4845 11.5928 18.3761 11.9003 19.2323C12.1437 19.9115 12.5043 20.5177 13.0419 21.0089C13.5464 21.4669 14.1371 21.7567 14.7986 21.8983C15.7345 22.0996 16.6681 22.0841 17.5863 21.7943C18.6704 21.4536 19.4226 20.7323 19.9049 19.7168C20.1638 19.1748 20.3187 18.5995 20.416 18.0088C20.5244 17.3517 20.551 16.688 20.551 16.0242C20.551 14.4269 20.551 12.8273 20.551 11.2299C20.5487 11.1878 20.5487 11.148 20.5487 11.0839Z"
                fill="white"
              ></path>
              <path
                d="M17.3163 14.4027C16.4335 14.4027 15.5596 14.4027 14.6813 14.4027C14.6813 12.3452 14.6813 10.2898 14.6813 8.23665C14.9556 8.15036 16.7942 8.14372 17.3163 8.23001C17.3163 10.2876 17.3163 12.3452 17.3163 14.4027Z"
                fill="white"
              ></path>
              <path
                d="M136.192 9.43597C133.804 9.43597 132 10.4097 131.101 11.8772C130.195 10.4097 128.22 9.43597 126.161 9.43597C122.114 9.43597 120.049 11.9938 120.049 15.1688V22.7806H123.829V15.7037C123.829 14.1951 124.631 12.851 126.456 12.851C128.288 12.851 129.235 14.1333 129.235 15.6488V22.7806H133.029V15.6488C133.029 14.1265 133.921 12.851 135.739 12.851C137.571 12.851 138.421 14.1951 138.421 15.7037V22.7806H142.202V15.1688C142.195 11.9938 140.246 9.43597 136.192 9.43597Z"
                fill="#7000FF"
              ></path>
              <path
                d="M159.051 18.1861V9.6897H155.312L155.34 11.7538C154.523 10.54 153.096 9.43597 150.558 9.43597C146.194 9.43597 143.951 12.8236 143.951 16.2249C143.869 19.6673 146.407 23.0892 150.373 23.0892C152.472 23.0892 154.393 22.1566 155.312 20.5177C155.683 21.6011 156.623 22.7875 158.571 22.7875H160.732V19.6125H160.128C159.374 19.6125 159.051 19.3313 159.051 18.1861ZM151.347 19.8113C149.199 19.8113 147.594 18.3301 147.594 16.2523C147.594 14.2019 149.199 12.7481 151.347 12.7481C153.563 12.7481 155.168 14.2019 155.168 16.2523C155.168 18.3301 153.563 19.8113 151.347 19.8113Z"
                fill="#7000FF"
              ></path>
              <path
                d="M163.14 14.1539V22.7806H166.92V16.9929C166.92 14.7505 168.546 13.3104 170.618 13.3104H173.088V9.41537H171.236C168.951 9.41537 167.284 11.3629 166.92 12.4944V12.0966V9.68282H163.14V14.1539Z"
                fill="#7000FF"
              ></path>
              <path
                d="M175.325 22.7806H179.105V16.3688L184.978 22.7806H189.437L183.352 16.0534L188.971 9.68967H184.525L179.105 15.8271V5.6369H175.325V22.7806Z"
                fill="#7000FF"
              ></path>
              <path
                d="M193.862 17.2604C193.862 18.7004 194.61 20.1542 197.025 20.1542C199.241 20.1542 199.563 18.8239 199.563 18.8239H203.714C203.714 18.8239 203.33 23.0892 197.025 23.0892C192.634 23.0892 189.883 20.6342 189.883 16.2523C189.883 11.8635 192.634 9.43597 196.984 9.43597C201.272 9.43597 204.037 11.8635 204.037 16.2523C204.037 16.7323 203.954 17.2672 203.954 17.2672H193.862V17.2604ZM193.91 14.9562H199.996C199.996 13.8865 199.378 12.371 196.977 12.371C194.61 12.371 193.91 13.8933 193.91 14.9562Z"
                fill="#7000FF"
              ></path>
              <path
                d="M212.661 19.4959C211.364 19.4959 210.897 18.9198 210.897 17.0957V12.4807H214.993V9.44281H210.897V6.83011H208.853L205.21 10.3137V12.4875H207.117V17.5963C207.117 21.2651 208.908 22.808 212.661 22.808H215V19.5027H212.661V19.4959Z"
                fill="#7000FF"
              ></path>
              <path
                d="M83.6802 16.4854C83.6802 18.5564 82.507 19.5164 80.7644 19.5164C79.0218 19.5164 77.8898 18.577 77.8898 16.4854V9.64166H74.1301V16.6157C74.1301 21.1622 77.9309 22.9383 80.7918 22.9383C83.6527 22.9383 87.4604 21.1554 87.4604 16.6157V9.64166H83.7007L83.6802 16.4854Z"
                fill="#7000FF"
              ></path>
              <path
                d="M70.9468 12.8167V9.64166H58.728V12.8167H65.966L58.4398 19.5233V22.6983H71.4133V19.5233H63.4344L70.9468 12.8167Z"
                fill="#7000FF"
              ></path>
              <path
                d="M106.286 9.39484C103.905 9.39484 102.108 10.3617 101.216 11.8361C100.31 10.3617 98.3414 9.39484 96.2969 9.39484C92.2766 9.39484 90.1841 11.9527 90.1841 15.1208V22.6983H93.9437V15.6489C93.9437 14.1334 94.7395 12.803 96.5645 12.803C96.935 12.7824 97.3054 12.8373 97.6553 12.9676C98.0052 13.0979 98.3208 13.3036 98.5815 13.571C98.8422 13.8316 99.048 14.1539 99.1784 14.5037C99.3088 14.8534 99.3636 15.2237 99.3431 15.594V22.6983H103.103V15.594C103.103 14.0785 103.995 12.803 105.799 12.803C107.603 12.803 108.475 14.1334 108.475 15.6489V22.6983H112.234V15.1277C112.234 11.9664 110.293 9.40169 106.252 9.40169L106.286 9.39484Z"
                fill="#7000FF"
              ></path>
              <path
                d="M52.1966 16.4854C52.1966 18.5564 51.0235 19.5164 49.2946 19.5164C47.5657 19.5164 46.4062 18.577 46.4062 16.4854V9.64166H42.6466V16.6157C42.6466 21.1622 46.4337 22.9383 49.3083 22.9383C52.1829 22.9383 55.9631 21.1554 55.9631 16.6157V9.64166H52.2035L52.1966 16.4854Z"
                fill="#7000FF"
              ></path>
            </svg>
          </a>
          <div className="flex items-center gap-2">
            <motion.button
              onClick={handleKatalog}
              whileHover={{ backgroundColor: "#CECEEF" }}
              transition={{ duration: 0.3 }}
              href="#"
              className="bg-[#E5E5FF] px-5 py-2 rounded-[3px] text-[#7F4DFF] flex items-center gap-1.5 cursor-pointer"
            >
              <motion.span
                key={katalog ? "close" : "menu"}
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ display: "inline-block" }}
              >
                {katalog ? <MdClose size={28} /> : <ImDrawer size={28} />}
              </motion.span>
              Katalog
            </motion.button>
            <div className="flex border border-[#C9CACF] rounded overflow-hidden w-max">
              <input
                type="text"
                placeholder="Mahsulotlar va turkumlar izlash"
                className=" border-[#D7D7D9] py-2 outline px-4 text-[#606063] w-[400px]"
              />
              <button
                type="button"
                className="flex items-center justify-center ml-[-8px] w-[80px] h-[42.2px] bg-[#EDEFF2] cursor-pointer text-[#50525C]"
              >
                <IoSearch size={25} />
              </button>
            </div>
          </div>

          <div className="flex gap-2">
            <motion.a
              whileHover={{ backgroundColor: "#D7D7D9", borderRadius: "3px" }}
              transition={{ duration: 0.3 }}
              href="#"
              className="flex items-center gap-1.5 px-4 py-[0.5rem] "
            >
              <FaRegUser size={20} />
              <span>Kirish</span>
            </motion.a>
            <motion.a
              whileHover={{ backgroundColor: "#D7D7D9", borderRadius: "3px" }}
              transition={{ duration: 0.3 }}
              href="#"
              className="flex items-center gap-1.5 px-4 py-[0.5rem]"
            >
              <FcLikePlaceholder size={25} />
              <span>Sevimlilar</span>
            </motion.a>
            <motion.a
              whileHover={{ backgroundColor: "#D7D7D9", borderRadius: "3px" }}
              transition={{ duration: 0.3 }}
              href="#"
              className="flex items-center gap-1.5 px-4 py-[0.5rem]"
            >
              <LuShoppingCart size={20} />
              <span>Savat</span>
            </motion.a>
          </div>
        </div>

        <div className="max-w-[1230px] m-auto pt-4 flex items-center gap-[52.41px]">
          <a href="#" className="flex items-center justify-center gap-1">
            <img
              className="w-7"
              src="https://static.uzum.uz/fast_categories/Topsales.png"
              alt="This is a picture"
            />
            <span>Hafta tovarlari</span>
          </a>
          <ul className="flex items-center justify-between gap-[26px]">
            {mahsulotKategoriya.map((item, inx) => {
              return (
                <li key={inx}>
                  <motion.a
                    href="#"
                    className="cursor-pointer text-[15px] font-normal text-[gray] hover:text-[#2a2929] transition-all"
                  >
                    <span>{item}</span>
                  </motion.a>
                </li>
              );
            })}
            <li>
              <motion.a
                onClick={handleKatalog}
                href="#"
                className="flex items-center justify-center gap-1 text-[gray] hover:text-[#2A2929] transition-all font-normal"
              >
                Yana
                <motion.span
                  key={katalog ? "close" : "menu"}
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  {katalog ? (
                    <FaChevronUp size={13} />
                  ) : (
                    <FaChevronDown size={13} />
                  )}
                </motion.span>
              </motion.a>
            </li>
          </ul>
        </div>

      </nav>
    </>
  );
};

export default Navbar;