import { useState, useEffect } from "react";
import Testimonials from "./Testimonials";
import { Icon } from "@iconify/react";
import ProductItemAndIndicator from "./ProductItemAndIndicator";
import { AnimatePresence, motion } from "framer-motion";

import hero1 from "@/assets/images/scooter1.png";
import hero2 from "@/assets/images/scooter2.png";
import hero3 from "@/assets/images/scooter3.png";
import hero from "@/assets/images/heroImage.png";

const HeroSection = () => {
  const products = [
    { name: "Velozip", model: "DB50QT", imageName: hero1 },
    { name: "SpeedX", model: "RS80", imageName: hero2 },
    { name: "Zoomster", model: "ZX90", imageName: hero3 },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-[16px] xl:px-30 lg:px-5 md:mt-20 relative">
      <div className="flex md:justify-between w-full md:mb-5">
        <div>
          <h1 className="w-3/5 2xl:text-7xl lg:text-5xl md:text-4xl text-2xl font-bold mb-4 font-Playfair xl:tracking-wider">
            Super Fast Electric Moped
          </h1>
        </div>
        <Testimonials />
      </div>
      <div className="relative w-full h-fit left-0 lg:-top-5 ">
        {/* image */}
        <div className="absolute z-50 left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="2xl:w-[910.573px] 2xl:h-[688.299px] xl:h-[721px] xl:w-[670.195px] lg:w-[521px] lg:h-[570px] md:h-[410px] md:w-[400px] w-[200px] h-[280px] -rotate-30 ">
            <AnimatePresence mode="wait">
              <motion.img
                key={products[activeIndex].imageName}
                src={products[activeIndex].imageName}
                alt={products[activeIndex].name}
                className="h-full w-full object-contain object-center scale-120"
                initial={{ x: -100, opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1,x:0 }}
                exit={{ x: 100, opacity: 0, scale: 0.95 }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>

            {/* <img src={hero} alt="" className="w-full h-auto object-contain" /> */}
          </div>
        </div>

        <div className="relative w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 1280 649"
            fill="none"
          >
            <path
              d="M960.717 58.8802H57.9265C42.6216 58.8802 27.9387 64.9371 17.0852 75.7279C6.14915 86.6007 0 101.385 0 116.807V295.691C0 313.386 7.2558 330.306 20.0741 342.504C32.0878 353.936 48.0367 360.311 64.6204 360.311H168.05C184.835 360.311 200.905 367.104 212.601 379.143C223.865 390.736 230.166 406.264 230.166 422.428V577.511C230.166 596.81 237.968 615.288 251.799 628.747C265.145 641.734 283.033 649 301.655 649H1256.45C1264.51 649 1272.01 644.882 1276.33 638.083C1278.73 634.308 1280 629.927 1280 625.453V21.7692C1280 17.5972 1278.8 13.513 1276.55 10.0029C1272.54 3.76888 1265.64 0 1258.23 0H1005.17C1003.97 0 1002.77 0.119051 1001.59 0.355417L1000.81 0.510092C998.168 1.03947 995.709 2.25692 993.685 4.03968C992.103 5.43271 990.825 7.13679 989.931 9.04559L988.102 12.9487C985.861 17.7327 984.7 22.951 984.7 28.234V29.8687C984.7 31.921 984.489 33.9679 984.071 35.9771L983.091 40.6847C981.189 49.8194 973.925 56.8806 964.74 58.5232C963.412 58.7607 962.066 58.8802 960.717 58.8802Z"
              fill="#00C853"
            />
          </svg>
          <div className="absolute bottom-0 w-[80%] right-0 flex gap-5 items-end py-5">
            <button className="p-4 rounded-full bg-black h-20 w-20 hidden lg:block ">
              <Icon
                icon="iconamoon:arrow-top-right-1-light"
                color="white"
                width="50"
                height="50"
              />
            </button>
            <h1 className="uppercase 2xl:text-[180px] xl:text-9xl lg:text-8xl md:text-[80px]  font-Playfair text-center opacity-[0.05]">
              Electric.
            </h1>
          </div>
          {/* Product Details */}
          <div className="absolute left-0 2xl:bottom-9 -bottom-30 md:-bottom-20 lg:-bottom-4 xl:bottom-3 2xl:w-60 xl:w-50 lg:w-40 w-full">
            <h1 className="font-Poppins 2xl:text-6xl lg:text-4xl text-[30px] font-[700]">
              C45
            </h1>
            <p className="self-stretch text-[#8C8C8C] font-Poppins lg:text-lg text-md 2xl:text-2xl lg:my-2 2xl:my-5">
              Classic Model
            </p>
            <p className="self-stretch text-[#444] font-Poppins text-[16px] lg:text-sm xl:text-base 2xl:text-xl text-justify font-[400]">
              C45 Classic is a stylish, lightweight scooter built for smooth
              city rides, blending retro design with modern comfort and
              efficiency.
            </p>
          </div>

          {/* Slider Product container */}
          <div className="absolute bottom-10 right-3 hidden lg:block">
            <ProductItemAndIndicator
              products={products}
              activeIndex={activeIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
