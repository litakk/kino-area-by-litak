import React from "react";
import { FaVk } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

function Trailer() {
  return (
    <div>
      <div className="flex justify-center mt-[25px]">
        <div>
          <p className="text-[#FFFFFF] font-bold text-2xl mb-[8px]">
            Новые трейлеры
          </p>
          <p className="text-[#FFFFFF] ml-[35px] font-bold mb-[18px]">
            Все трейлеры ➡
          </p>
        </div>
      </div>

      <div>
        <img src="/trailer.png" alt="" />
      </div>

      <div className="flex justify-between">
        <div>
          <p className="text-[#FFFFFF] font-bold text-2xl mt-[5px]">Форсаж 9</p>
          <div className="flex justify-between text-[#6D7792] mt-[3px]">
            <FaVk />
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
          </div>
        </div>

        <div className="flex justify-between gap-3 text-white mt-[7px]">
          <AiOutlineLike className="w-[30px] h-[30px]" />
          <AiOutlineDislike className="w-[30px] h-[30px]" />
        </div>

        
      </div>


    </div>
  );
}

export default Trailer;
