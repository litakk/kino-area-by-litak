import { IoIosSearch } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { FaVk } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div className="flex justify-between items-start lg:items-center">
        <div className="flex justify-between items-center gap-1 lg:hidden">
          <Sheet>
            <SheetTrigger className="md:hidden">
              <img
                src="/burger-menu.png"
                alt="burger-menu"
                className="bg-white text-blue-500 rounded w-5 h-5"
              />
            </SheetTrigger>
            <SheetContent side="top" className="bg-[#1e2538b5]">
              <SheetHeader>
                <SheetTitle>
                  <img
                    src="/logo.png"
                    alt="header-logo"
                    className="h-5 mx-auto"
                  />
                </SheetTitle>
                <SheetDescription>
                  <ul className="flex flex-col items-center gap-5 text-white">
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
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <div className="md:w-[66px] lg:hidden">
            <IoIosSearch className="bg-white text-blue-500 p-1 rounded w-5 h-5 md:w-[43px] md:h-[32px] md:rounded md:p-2" />
          </div>
        </div>

        <div>
          <Link href={"/"}>
            <img src="/logo.png" alt="header-logo" className="h-6" />
          </Link>

          <div className="flex justify-between mt-[5px] text-[#686868]">
            <FaVk />
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
          </div>
        </div>

        <div className="hidden lg:flex">
          <ul className="w-full flex flex-row items-center gap-5 justify-between text-white font-semibold text-[17px] ">
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

        <div className="lg:flex lg:gap-3">
          <IoIosSearch className="bg-white text-blue-500 p-3 rounded-xl w-[60px] h-[50px]  hidden lg:block" />
          <Button className="bg-[#3657CB] h-8 w-[66px] text-sm font-light md:font-semibold cursor-pointer transition-all duration-500 shadow-[0px_0px_15px_0px_#4871FFCC] hover:bg-gray-300 hover:text-black md:h-10 md:w-[100px] lg:w-[120px] lg:h-[50px]">
            Войти
          </Button>
        </div>
      </div>

      <div className="hidden md:flex ">
        <ul className="w-[75%] mx-auto flex flex-row items-center justify-between mt-[25px]  text-white font-semibold text-[13px] lg:hidden">
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
    </div>
  );
}
