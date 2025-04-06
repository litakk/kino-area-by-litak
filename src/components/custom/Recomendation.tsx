import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";

export default function Recomendation() {
  return (
    <>
      <div className="flex justify-center items-center gap-3 mt-[26px] mb-[21px]">
        <div>
          <h1 className="text-2xl font-bold text-white">Сейчас в кино</h1>
        </div>

        {/* <div><img src="/line.png" alt="line-logo" /></div> */}

        {/* Burger Menu */}
        <div>
          <Sheet>
            <SheetTrigger>
              <img src="/burger.png" alt="beugermenu-logo" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#1e2538b5]">
              <SheetHeader>
                <SheetTitle>
                  <img src="/logo.png" alt="logo" />
                </SheetTitle>
                <SheetDescription>
                  <ul className="flex flex-col items-center gap-5 text-white ">
                    <li>
                      <a href="#">Все</a>
                    </li>
                    <li>
                      <a href="#">Боевики</a>
                    </li>
                    <li>
                      <a href="#">Приключения</a>
                    </li>
                    <li>
                      <a href="#">Комедии</a>
                    </li>
                    <li>
                      <a href="#">Фантастика</a>
                    </li>
                    <li>
                      <a href="#">Триллеры</a>
                    </li>
                    <li>
                      <a href="#">Драма</a>
                    </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* фулл карточка */}

      <div className="flex flex-wrap gap-2">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="relative w-[170px] rounded-[20px] overflow-hidden  group cursor-pointer "
          >
            <div className="relative  group-hover:opacity-80">
              <img
                src="/example.png"
                alt="example-card"
                className="w-full h-auto transition duration-300 group-hover:bg-[#2766E5] rounded-[20px] "
              />

              <div className="absolute inset-0 bg-[#2766E5]/40 opacity-0 group-hover:opacity-100 transition duration-300 rounded-[20px] "></div>
            </div>
            <div className="absolute top-2 right-2 bg-[#89CB36] text-white text-sm font-bold rounded-[8px] px-2 py-[2px] z-10">
              6.70
            </div>

            <div className="px-2 pb-3 pt-2 z-10">
              <p className="text-white text-[16px] font-bold leading-[20px]">
                Побег из Претории
              </p>
              <p className="text-[#F2F60F] text-[14px]">Триллер</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-[25px]">
        <Button className="border-white border-2 bg-[#1E2538] px-[30] py-[15]">Все новинки</Button>
      </div>
    </>
  );
}
