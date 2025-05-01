import React, { useEffect, useRef, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { RxHamburgerMenu } from "react-icons/rx";
import { options } from "@/exports";
import { FaArrowLeftLong } from "react-icons/fa6";

interface PopularFilmProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const timesArr: string[] = [
  "Всё время",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
];

const PopularFilm: React.FC<PopularFilmProps> = () => {
  const [actText, setActText] = useState<null | string | number>(0);
  const [popular, setPopular] = useState<PopularFilmProps[]>([]);
  const [hoverStates, setHoverStates] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [activeSlide, setActiveSlide] = useState(0);

  const popularUrl =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const generesUrl =
    "https://api.themoviedb.org/3/genre/movie/list?language=en";

  useEffect(() => {
    fetch(popularUrl, options)
      .then((res) => res.json())
      .then((res) => {
        setPopular(res.results);
      });

    fetch(generesUrl, options)
      .then((res) => res.json())
      .then((res: { genres: { id: number; name: string }[] }) => {
        const allGenres = res.genres;

        const genresMap: { [key: number]: string[] } = {};
        popular.forEach((movie) => {
          genresMap[movie.id] = movie.genre_ids
            .map((id) => allGenres.find((genre) => genre.id === id)?.name)
            .filter(Boolean) as string[];
        });
      });
  }, [popularUrl, generesUrl]);

  const handleMouseEnter = (id: number) => {
    setHoverStates((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id: number) => {
    setHoverStates((prev) => ({ ...prev, [id]: false }));
  };
  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.activeIndex);
  };

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className="mt-8">
        <div className="flex flex-row justify-center  md:flex-col xl:flex-row xl:justify-between xl:items-center gap-2 xl:gap-4 mb-6">
          {/* Слева — Заголовок */}
          <p className="font-black text-2xl md:text-4xl text-white whitespace-nowrap">
            Популярные фильмы
          </p>

          {/* Центр — Линия (только XL) */}
          <img src="/line.png" alt="line" className="hidden xl:block" />

          {/* Справа — Список годов (только от md и выше) */}
          <div className="hidden md:flex gap-8 xl:w-auto">
            {timesArr.map((str, indx) => (
              <p
                key={indx}
                onClick={() => setActText(indx)}
                className={`font-bold text-[15px] cursor-pointer transition-all duration-200 ease-in
          ${
            actText === indx
              ? "text-white"
              : "text-[#818181c5] hover:text-white"
          }`}
              >
                {str}
              </p>
            ))}
          </div>

          {/* Мобильное меню (бургер) — только для md и ниже */}
          <div className="mb-[4px] md:hidden">
            <Sheet>
              <SheetTrigger className="h-7 w-7 flex items-center justify-center rounded-[5px] cursor-pointer transition-all ease-in">
                <RxHamburgerMenu
                  color="white"
                  size={20}
                  className="mt-2 cursor-pointer"
                />
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#1e2538c9]">
                <SheetHeader>
                  <SheetTitle className="text-center mx-auto">
                    <img src="/line.png" alt="line" />
                  </SheetTitle>
                  <SheetDescription className="text-center mx-auto mt-3 pb-5">
                    <ul className="flex flex-col items-center text-sm leading-10 font-semibold text-white">
                      {timesArr.map((str, indx) => (
                        <li
                          key={indx}
                          onClick={() => setActText(indx)}
                          className="relative group w-fit cursor-pointer"
                        >
                          {str}
                          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </li>
                      ))}
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="relative mt-[50px]">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSlideChange={handleSlideChange}
            spaceBetween={20}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1000: {
                slidesPerView: 4,
              },
              1224: {
                slidesPerView: 4,
              },
            }}
          >
            {popular.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={() => handleMouseLeave(item.id)}
                  className="w-[100%] h-[250px] relative bg-cover bg-no-repeat bg-center rounded-lg md:h-[286px] lg:h-[297px] xl:h-[420px] 2xl:h-[480px]"
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.poster_path})`,
                  }}
                >
                  <div
                    className={`
                                        absolute cursor-grab  top-2 z-10 right-2 w-[38px] h-[21px] text-center text-[12px] flex items-center justify-center font-bold rounded-[5px] text-white
                                        ${
                                          (item.vote_average > 6 &&
                                            "bg-[#34EA16]") ||
                                          (item.vote_average === 6 &&
                                            "bg-[#89CB36]") ||
                                          (item.vote_average < 6 &&
                                            "bg-[#CB6C36]")
                                        }`}
                  >
                    {item.vote_average.toFixed(1)}
                  </div>

                  <div
                    className={`absolute top-0 left-0 z-[3] bg-[#3657CBA6] w-full h-full rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer
                                        ${
                                          hoverStates[item.id]
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-2 pointer-events-none"
                                        }`}
                  ></div>
                </div>
                <p className="font-semibold text-white text-[15px] truncate-text">
                  {item.title}
                </p>
                {/*    <p className="text-[#F2F60F]  text-[12px] truncate-text">{genres[item.id] ? genres[item.id].join(", ") : "Жанры не доступны("}</p>
                 */}
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center mt-5 gap-4 cursor-pointer ">
            <div ref={prevRef}>
              <FaArrowLeftLong color="white" size={20} />
            </div>
            <p className="font-medium text-[17px] text-white no-select no-select-context">
              {" "}
              {activeSlide + 1} / {popular.length}
            </p>
            <div ref={nextRef}>
              <FaArrowLeftLong
                color="white"
                size={20}
                className="rotate-180 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularFilm;
