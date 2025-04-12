import React, { useEffect, useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import { options } from "@/exports";

interface movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  genre_ids: number[];
}

const Recomendation: React.FC = () => {
  const [movie, setMovie] = useState<movie[]>([]);
  const [genre, setGenre] = useState<{ [key: number]: string }>({});

  const [showMore, setShowMore] = useState<number>(8);

  const movieUrl =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const genreUrl = "https://api.themoviedb.org/3/genre/movie/list?language=en";

  useEffect(() => {
    Promise.all([fetch(movieUrl, options), fetch(genreUrl, options)])
      .then(([moviesRes, genreRes]) => {
        if (!moviesRes.ok || !genreRes.ok) {
          throw new Error("Ошибка при получении данных с API");
        }
        return Promise.all([moviesRes.json(), genreRes.json()]);
      })
      .then(([moviesData, genresData]) => {
        setMovie(moviesData.results);

        const genreMap: { [key: number]: string } = {};
        genresData.genres.forEach((g: any) => {
          genreMap[g.id] = g.name;
        });
        setGenre(genreMap);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных:", error);
      });
  }, []);

  return (
    <>
      <div className="flex items-center justify-center md:justify-start gap-3 xl:mt-[51px] mt-[26px] mb-[21px]">
        <div className="xl:flex  xl:justify-between xl:w-full items-center">
          <div>
            <h1 className="text-2xl font-extrabold text-[#FFFFFF] md:text-3xl xl:text-4xl">
              Сейчас в кино
            </h1>
          </div>

          <div>
            <img
              src="line.png"
              alt="line-logo"
              className="hidden xl:flex w-[51px]"
            />
          </div>

          <div>
            <ul className="hidden md:flex flex-row items-center gap-5 xl:gap-7 text-white mt-[10px] font-bold text-[15px] xl:text-[18px]">
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
          </div>
        </div>

        <div>
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
                  <ul className="flex flex-col gap-5 text-white ">
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
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 mt-[28px] gap-4 justify-between w-full">
          {movie.slice(0, showMore).map((item) => (
            <Link href={`/cardpage/${item.id}`} key={item.id}>
              <div
                key={item.id}
                className="relative w-full overflow-hidden group cursor-pointer"
              >
                <div className="relative group-hover:opacity-80">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                    className="w-full h-auto transition duration-300 group-hover:bg-[#2766E5] rounded-[15px]"
                  />
                  <div className="absolute inset-0 bg-[#2766E5]/40 opacity-0 group-hover:opacity-100 transition duration-300 rounded-[20px]"></div>
                </div>
                <div className="absolute top-2 right-2 bg-[#89CB36] text-white text-sm font-bold rounded-[8px] px-2 py-[2px] z-10">
                  {item.vote_average.toFixed(1)}
                </div>

                <div className="px-2 pb-3 pt-2 z-10">
                  <p className="text-white text-[16px] font-bold leading-[20px]">
                    {item.title}
                  </p>
                  <p className="text-[#F2F60F] text-[14px] truncate">
                    {item.genre_ids
                      .map((id) => genre[id])
                      .filter(Boolean)
                      .join(", ") || "Жанр не указан"}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-[25px] md:mt-[51px]">
        <Button
          onClick={() => setShowMore((prev) => prev + 12)}
          className="border-white border-2 bg-[#1E2538] px-[30] py-[15] font-bold md:py-[25] md:px-[40]"
        >
          Все новинки
        </Button>
      </div>
    </>
  );
};

export default Recomendation;
