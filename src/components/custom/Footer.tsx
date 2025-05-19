import { Button } from "../ui/button";
import { FaVk } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div
        className="w-full flex flex-col items-center px-6 rounded-[8px]"
        style={{
          backgroundImage: "url('/footerBackground.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <img className="mt-[26px]" src="/footerLogo.png" alt="footer-logo" />
        </div>

        <div className="mt-[16px] text-center lg:mt-[30]">
          <h2 className="text-[25px] font-bold text-[#FFFFFF]">
            Подпишитесь на E-mail рассылку
          </h2>
        </div>

        <div className="w-full">
          <p className="text-[#FFFFFF] text-[15px] mt-[21px] text-center lg:mt-[26px]">
            Если хотите быть в курсе последних новостей и новинок кино -
            заполните форму ниже и оформите бесплатную E-mail рассылку!{" "}
          </p>
        </div>

        <div className="flex flex-col items-center w-full mt-[21px] md:flex-row md:gap-3 md:justify-center md:mb-[20px] lg:mt-[34px]">
          <div>
            <input
              type="text"
              placeholder="Введите свой E-mail адрес"
              className="bg-white text-gray-500 py-[19px] px-[47px] h-[60px] mb-[9px] border-none underline-none rounded-xl md:mb-[0px]"
            />
          </div>
          <div>
            <Button className="p-1 bg-[#F2F60F] text-black text-[15px] py-[19px] px-[95px] h-[60px] font-bold rounded-xl md:px-[50px]">
              Подписаться
            </Button>
          </div>
        </div>

        <div className="flex items-start gap-2 lg:mt-6">
          <input
            type="checkbox"
            className="w-5 h-5 border-gray-300 rounded-sm checked:bg-yellow-500 focus:ring-0"
          />
          <p className="text-white mb-[43px] lg:mb-[80px]">
            Соглашаюсь на условия
            <span className="text-yellow-300 underline">
              политики конфиденциальности
            </span>
          </p>
        </div>
      </div>

      <div>
        <div className="flex flex-col w-full">
          <div className="flex justify-center w-full gap-5 mx-auto mb-[20px] text-[#3C4767] mt-[34px] lg:mt-[50px]">
            <FaVk />
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
          </div>

          <div className="flex justify-center font-semibold text-[#FFFFFF] lg:mt-[34px] mx-auto">
            <ul className="space-y-[10px] text-center md:flex md:gap-5">
              <li>
                <a href="#">Афиша</a>
              </li>
              <li>
                <a href="#">Медиа</a>
              </li>
              <li>
                <a href="#">Фильмы</a>
              </li>
              <li>
                <a href="#">Актёры</a>
              </li>
              <li>
                <a href="#">Новости</a>
              </li>
              <li>
                <a href="#">Подборки</a>
              </li>
              <li>
                <a href="#">Категории</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col mx-auto font-medium text-[#E3E6F0B8] mt-[14px] lg:mt-[40px]">
            <p>2025 © Kinoarea. Все права защищены</p>
            <p className="underline lg:mt-[26px] mb-[50px]">
              Политика конфиденциальности
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
