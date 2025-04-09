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
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaVk,
} from "react-icons/fa";

interface cardInfoProps {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection | null;
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
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const CardInfo: React.FC<cardInfoProps> = () => {
  const [infoCard, setInfoCard] = useState<cardInfoProps | null>(null);
  const context = useContext(IdInfoContext);
  if (!context) {
    throw new Error("error");
  }
  const { params, setBackground } = context;

  if (!params || !params.id) {
    return <div>getting....</div>;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
          options
        );
        const data = await res.json();
        setInfoCard(data);
        setBackground(data.poster_path);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [params.id]);
  return (
    <>
      <div className="mt-[40px]">
        <div className="flex">
          <p className="flex items-center gap-1 text-[#4F5B7C]">
            Главная <MdKeyboardArrowRight /> Фильмы <MdKeyboardArrowRight />{" "}
            <span className="text-[#FFFFFF]">{infoCard?.title} </span>
          </p>
        </div>

        <div>
          <p className="font-black text-2xl text-[#FFFFFF]">
            {infoCard?.title}
          </p>
          <p className="font-medium text-[#FFFFFF]">{infoCard?.tagline}</p>
        </div>

        <div className="flex gap-[39px]">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${infoCard?.poster_path}`}
              alt={infoCard?.title}
              className="h-[300px] rounded-[13px]"
            />
          </div>

          <div className="w-[52px] h-[71] ">
            <p>{infoCard?.vote_average}</p>
          </div>
        </div>
        <div>
          <p className="font-medium text-[15px] text-[#FFFFFF]">
            {infoCard?.overview}
          </p>
        </div>
        <div className="flex justify-center mt-[46px]">
          <Button className="text-white font-bold bg-opacity-[100% ] border-2 border-white">
            <CiPlay1 />
            Смотреть трейлер
          </Button>
        </div>
        <div className="flex mt-[20px] gap-6 items-center justify-center text-white">
          <FaVk />
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
        </div>

        <div className="">
          <div>
            <div className="flex justify-center gap-2 mt-[28px]">
              <div className="text-white bg-[#1B2133] p-2 rounded-[10px] w-[52px] h-[52px] flex items-center justify-center">
                <BiLike className="w-[23px] h-[23px]" />
              </div>

              <div className="text-white bg-[#1B2133] p-2 rounded-[10px] w-[52px] h-[52px] flex items-center justify-center">
                <AiOutlineDislike className="w-[23px] h-[23px]" />
              </div>

              <div className="flex items-center justify-center">
                <Button className="bg-[#2E6125] text-white">
                  Рейтинг ожиданий 85%
                </Button>
              </div>
            </div>
          </div>

          <div className=" flex justify-center text-white items-center gap-3 mt-[19px]">
            <div className="text-white bg-[#1B2133] p-2 rounded-[10px] w-[52px] h-[52px] flex items-center justify-center">
              <IoMdHeartEmpty className="w-[23px] h-[23px]" />
            </div>
            <p>В избранном у {infoCard?.vote_count} человек</p>
          </div>
        </div>

        <div className="flex  text-white">

          <div>

          <p>Год: </p>
          <p>Страна:</p>
          <p>Слоган:</p>
          <p>Режиссер:</p>
          <p>Сценарий:</p>
          <p>Продюсер:</p>
          <p>Оператор:</p>
          <p>Композитор:</p>
          <p>Художник:</p>
          <p>Монтаж:</p>
          <p>Жанр:</p>
          <p>Сборы в мире:</p>
          <p>Премьера (мир):</p>
          <p>Премьера (РФ):</p>
          <p>Возраст:</p>
          <p>Время:</p>

          </div>

          <div className="text-yellow-500 underline">
          <p>{infoCard?.release_date}</p>
          <p>{infoCard?.production_countries?.[1]?.name}</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          </div>


        </div>
      </div>
    </>
  );
};

export default CardInfo;
