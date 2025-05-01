import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { options } from "@/exports";

interface KnownFor {
  id: number;
  title?: string;
  name?: string;
  overview?: string;
}

interface PopularPersonProps {
  adult: boolean;
  gender: number;
  id: number;
  known_for: KnownFor[];
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

const PopularPerson = () => {
  const [person, setPerson] = useState<PopularPersonProps[]>([]);

  const personUrl =
    "https://api.themoviedb.org/3/person/popular?language=en-US&page=1";

  useEffect(() => {
    fetch(personUrl, options)
      .then((res) => res.json())
      .then((res) => {
        setPerson(res.results);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-start items-center md:flex-col md:items-start xl:flex-row xl:justify-between xl:items-center">
        <div className="flex gap-2">
          <div>
            <p className="font-black text-2xl text-white text-nowrap md:text-4xl">
              Популярные персоны
            </p>
            <div className="hidden md:flex justify-between w-[60%] text-white mt-[8px]">
              <p>За год</p>
              <p>За месяц</p>
              <p>За неделю</p>
            </div>
          </div>

          <Sheet>
            <SheetTrigger className="md:hidden">
              <img src="/burger.png" alt="beugermenu-logo" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#1e2538b5]">
              <SheetHeader>
                <SheetTitle>
                  <img src="/logo.png" alt="logo" />
                </SheetTitle>
                <SheetDescription>
                  <ul className="flex flex-col items-center gap-5 text-white">
                    <li>
                      <a href="#">За год</a>
                    </li>
                    <li>
                      <a href="#">За месяц</a>
                    </li>
                    <li>
                      <a href="#">За неделю</a>
                    </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="mt-6 flex flex-col xl:flex-row xl:items-start xl:gap-6">
        <div className="flex flex-wrap justify-center gap-4 w-full xl:w-[70%]">
          {person.slice(1, 3).map((item) => (
            <div
              key={item.id}
              className="w-[150px] md:w-[200px] lg:w-[250px] xl:w-[calc(50%-12px)] relative"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt={item.name}
                className="w-full xl:rounded-[13px] xl:h-[450px] rounded-[13px] mb-2 object-cover h-full"
              />
            </div>
          ))}
        </div>

        <div className="bg-[#1B2133] w-full rounded-[10px] p-5 mt-4 xl:mt-0 xl:w-[30%]">
          {person.slice(2, 7).map((item, index) => {
            const randomAge = Math.floor(Math.random() * (70 - 20 + 1)) + 20;
            return (
              <div key={item.id} className="mb-4 last:mb-0">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-[15px] text-white">
                      {item.name}
                    </p>
                    <p className="font-semibold text-[11px] text-[#3B486B]">
                      {item.original_name}
                    </p>
                    <p className="text-[#F2F60F] font-normal text-[11px]">
                      {randomAge} лет
                    </p>
                  </div>
                  <p className="font-semibold text-[15px] text-[#F2F60F]">
                    {index + 1}-место
                  </p>
                </div>
                <hr className="border-0 h-[2px] w-full bg-[#1E2538] mt-2" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularPerson;
