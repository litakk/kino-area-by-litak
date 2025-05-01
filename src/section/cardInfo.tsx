import { IdInfoContext } from "@/contexts/idInfoContext";
import { options } from "@/exports";
import { useContext, useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiPlay1 } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { BiLike } from "react-icons/bi";
import { AiOutlineDislike } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaVk,
} from "react-icons/fa";

interface Genre {
  id: number;
  name: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface CardInfoType {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: { name: string }[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface PersonsType {
  id: number;
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  known_for_department: string;
  name: string;
  order: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

interface Trailer {
  id: string;
  name: string;
  key: string;
  type: string;
}

interface Images {
  id: number;
  file_path: string;
}

const CardInfo = () => {
  const [infoCard, setInfoCard] = useState<CardInfoType | null>(null);
  const [persons, setPersons] = useState<PersonsType[]>([]);
  const [trailers, setTrailers] = useState<Trailer[]>([]);
  const [images, setImages] = useState<Images[]>([]);

  const context = useContext(IdInfoContext);

  if (!context) throw new Error("Context not found");

  const { params, setBackground } = context;

  useEffect(() => {
    if (!params?.id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${params.id}?language=ru-RU`,
          options
        );
        const data = await res.json();
        setInfoCard(data);
        setBackground(data.backdrop_path);
      } catch (error) {
        console.error("Ошибка при загрузке данных фильма:", error);
      }
    };
    const fetchPerson = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${params.id}/credits?language=ru-RU`,
          options
        );
        const data = await res.json();
        setPersons(data.cast);
      } catch (error) {
        console.log("Ошибка при загрузке данных персон:", error);
      }
    };

    const fetchTrailers = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${params.id}/videos?language=ru-RU`,
          options
        );
        const data = await response.json();
        setTrailers(data.results);
      } catch (error) {
        console.error("Ошибка при загрузке данных трейлеров:", error);
      }
    };

    const fetchImagesMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${params.id}movie_id/images`,
          options
        );
        const data = await response.json();
        setImages(data.posters);
      } catch (error) {
        console.log("Ошибка при загрузке данных изображений фильма:", error);
      }
    };

    fetchData();
    fetchPerson();
    fetchTrailers();
    fetchImagesMovie();
  }, [params.id]);

  if (!infoCard) return <div>Загрузка данных...</div>;

  return (
    <div className="mt-[40px] text-white">
      <div className="md:hidden">
        <div className="flex items-center gap-1 text-[#4F5B7C]">
          Главная <MdKeyboardArrowRight /> Фильмы <MdKeyboardArrowRight />
          <span className="text-white">{infoCard.title}</span>
        </div>

        <p className="font-black text-2xl mt-4">{infoCard.title}</p>
        <p className="font-medium">{infoCard.tagline}</p>

        <div className="flex gap-10 mt-6">
          <img
            src={`https://image.tmdb.org/t/p/w500${infoCard.poster_path}`}
            alt={infoCard.title}
            className="h-[300px] rounded-[13px]"
          />
          <div className="text-xl font-bold">{infoCard.vote_average}</div>
        </div>

        <p className="font-medium text-[15px] mt-4">{infoCard.overview}</p>

        <div className="flex justify-center mt-6">
          <Button className="text-white font-bold border-2 border-white">
            <CiPlay1 />
            Смотреть трейлер
          </Button>
        </div>

        <div className="flex mt-6 gap-6 items-center justify-center text-white text-xl">
          <FaVk />
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
        </div>
      </div>

      <div className="hidden md:block">
        <div className="flex gap-[20px] xl:gap-[16px] xl:justify-start">
          <div className="w-[30%] xl:w-[25%]">
            <img
              src={`https://image.tmdb.org/t/p/w500${infoCard.poster_path}`}
              alt={infoCard.title}
              className="h-auto rounded-[13px]"
            />
          </div>

          <div className="w-[60%] xl:w-[40%]">
            <div>
              <div className="flex items-center gap-1 text-white">
                Главная <MdKeyboardArrowRight /> Фильмы <MdKeyboardArrowRight />
                <span className="text-white">{infoCard.title}</span>
              </div>
            </div>

            <div>
              <p className="font-black text-2xl mt-[3px]">{infoCard.title}</p>
              <p className="font-medium mt-[3px]">{infoCard.tagline}</p>
            </div>

            <div>
              <div className="text-xl font-bold mt-[16px]">
                {infoCard.vote_average}
              </div>
            </div>

            <div>
              <p className="font-medium text-[15px] mt-[16px]">
                {infoCard.overview}
              </p>
            </div>

            <div className="flex items-center gap-[32px] mt-[9px] xl:mt-[30px] xl:gap-[37px]">
              <div className="">
                <Button className="text-white font-bold border-2 bg-border-none border-white md:w-[215px] md:h-[60px]">
                  <CiPlay1 />
                  Смотреть трейлер
                </Button>
              </div>

              <div className="flex items-center gap-5 text-white text-xl xl:gap-8">
                <FaVk />
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex gap-[30px]">
        <div className="flex justify-center md:justify-start gap-2 mt-6 ">
          <div className="bg-[#1B2133] p-2 rounded-[10px] w-[52px] h-[52px] flex items-center justify-center">
            <BiLike className="w-[23px] h-[23px] md:w-[27px] md:h-[27px]" />
          </div>
          <div className="bg-[#1B2133] p-2 rounded-[10px] w-[52px] h-[52px] flex items-center justify-center">
            <AiOutlineDislike className="w-[23px] h-[23px] md:w-[27px] md:h-[27px]" />
          </div>
          <Button className="bg-[#2E6125] text-white md:w-[166px] md:h-[52px]">
            Рейтинг ожиданий 85%
          </Button>
        </div>

        <div className="flex justify-center items-center gap-3 mt-4">
          <div className="bg-[#1B2133] p-2 rounded-[10px] w-[52px] h-[52px] flex items-center justify-center">
            <IoMdHeartEmpty className="w-[23px] h-[23px] md:w-[27px] md:h-[27px]" />
          </div>
          <p>В избранном у {infoCard.vote_count} человек</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-y-1 mt-10">
        <p>
          Год:{" "}
          <span className="text-yellow-500 underline">
            {infoCard.release_date?.slice(0, 4) || "—"}
          </span>
        </p>
        <p>
          Страна:{" "}
          <span className="text-yellow-500 underline">
            {infoCard.production_countries.map((c) => c.name).join(", ") || "—"}
          </span>
        </p>
        <p>
          Слоган:{" "}
          <span className="text-yellow-500 underline">
            {infoCard.tagline || "—"}
          </span>
        </p>
        <p>
          Жанр:{" "}
          <span className="text-yellow-500 underline">
            {infoCard.genres
              .slice(0, 2)
              .map((g) => g.name)
              .join(", ") || "—"}
          </span>
        </p>
        <p>
          Сборы в мире:{" "}
          <span className="text-yellow-500 underline">
            {infoCard.revenue ? `${infoCard.revenue.toLocaleString()} $` : "—"}
          </span>
        </p>
        <p>
          Премьера:{" "}
          <span className="text-yellow-500 underline">
            {infoCard.release_date || "—"}
          </span>
        </p>
        <p>
          Возраст:{" "}
          <span className="text-yellow-500 underline">
            {infoCard.adult ? "18+" : "0+"}
          </span>
        </p>
        <p>
          Время:{" "}
          <span className="text-yellow-500 underline">
            {infoCard.runtime ? `${infoCard.runtime} мин.` : "—"}
          </span>
        </p>
        <p>
          Языки:{" "}
          <span className="text-yellow-500 underline">
            {infoCard.spoken_languages.map((lang) => lang.name).join(", ") ||
              "—"}
          </span>
        </p>
      </div>

      <div>
        <div className="mt-[60px] md:flex md:justify-between">
          <div className="flex justify-center md:justify-start md:items-center">
            <p className="text-3xl font-black text-[#FFFFFF]">
              В главных ролях:
            </p>
          </div>
          <div className="flex justify-center items-center mt-[20px]">
            <p className="text-xl font-bold text-[#FFFFFF]">Все актёры ➡</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[33px] mt-[32px] md:grid-cols-3 xl:grid-cols-5 xl:justify-between">
          {persons.slice(0, 10).map((item) => (
            <div key={item?.id}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  className="w-[166px] h-[168px] md:w-[250px] md:h-[252px] xl:w-full xl:h-[250px] flex items-center rounded-[10px] object-cover mb-[10px]"
                />
                <p className="text-[13px] font-bold text-[#FFFFFF]">
                  {item.name}
                </p>
                <p className="text-[12px] font-normal text-[#FFFFFFB2]">
                  {item.original_name}
                </p>
                <p className="textp[10px] font-normal text-[#F2F60F]">
                  {item.character}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div>
          <div className="flex justify-center mt-[25px] md:mt-[55px]">
            <div className="md:flex md:justify-between md:w-full">
              <p className="text-[#FFFFFF] font-bold text-2xl mb-[8px]">
                Новые трейлеры
              </p>
              <p className="text-[#FFFFFF] ml-[35px] font-bold mb-[18px]">
                Все трейлеры ➡
              </p>
            </div>
          </div>

          <div className="mb-[50px]">
            {trailers.length > 0 &&
              trailers.map((item) => (
                <div key={item.id}>
                  {item.type === "Trailer" && (
                    <div>
                      <iframe
                        src={`https://www.youtube.com/embed/${item.key}`}
                        className="w-full h-[196px] mt-4 rounded-[10px] md:h-[350px] xl:h-[554px] 2xl:h-[754px]"
                      ></iframe>
                      <p className="text-[#FFFFFF] font-bold text-xl mt-[5px]">
                        {item.name}
                      </p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center mt-[25px] md:mt-[55px]">
          <div className="md:flex md:justify-between md:w-full">
            <p className="text-[#FFFFFF] font-bold text-2xl mb-[8px]">
              Постеры к фильму
            </p>
            <p className="text-[#FFFFFF] ml-[55px] font-bold mb-[18px]">
              Все постеры ➡
            </p>
          </div>

        </div>
          <div className="grid grid-cols-2 gap-[12px] md:grid-cols-4 md:gap-[14px] xl:gap-[22px] mb-5">
            {images.slice(0,4).map((items) => (
              <div 
              key={items.id}
              className="relative overflow-hidden group"
              >
              <img src={`https://image.tmdb.org/t/p/w500${items.file_path}`} alt={`${items.file_path}`} className="w-[100%] h-auto rounded-[13px] object-cover" />
              <div className="absolute inset-0 bg-[#3657CBA6] opacity-0 group-hover:opacity-60 duration-300 rounded-[13px]"></div>
              </div>
            ))}
          </div>
      </div>

      <div>
        <div></div>
      </div>
    </div>
  );
};

export default CardInfo;
