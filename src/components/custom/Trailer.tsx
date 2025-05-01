import React, { useEffect, useState } from "react";
import { FaVk } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { options } from "@/exports";

interface Trailer {
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
  key: string;
}

interface Video {
  key: string;
  value: string;
}

const Trailer = () => {
  const [trailers, setTrailers] = useState<Trailer[]>([]);
  const [saveVideo, setSaveVideo] = useState<Video | null>(null);

  const changeVideo = (id: number) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, options)
      .then((res) => res.json())
      .then((res) => {
        const selectedVideo = res.results[0];
        setSaveVideo(selectedVideo || null);
      })
      .catch((error) => console.error("Ошибка при загрузке видео:", error));
  };

  useEffect(() => {
    const fetchTrailers = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
          options
        );
        const data = await response.json();
        setTrailers(data.results);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchTrailers();
  }, []);

  return (
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

      <div>
        <iframe
          src={
            saveVideo
              ? `https://www.youtube.com/embed/${saveVideo.key}`
              : "https://www.youtube.com/embed/8B1EtVPBSMw?si=r-Iq1UD9aYmGYCOq"
          }
          className="w-full h-[196px] mt-4 rounded-[10px] md:h-[350px] xl:h-[554px] 2xl:h-[754px]"
        ></iframe>
      </div>

      <div>
        <div className="flex justify-between">
          <div>
            <p className="text-[#FFFFFF] font-bold text-xl mt-[5px]">
              A Minecraft Movie
            </p>
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

      <div className="flex gap-[10px] w-full overflow-y-auto scrollbar-hidden">
        {trailers.map((item) => (
          <div
            key={item.id}
            className="mt-[18px]"
            onClick={() => changeVideo(item?.id)}
          >
            <div
              className="group w-[178px] h-[127px] relative cursor-grab bg-no-repeat bg-center bg-cover rounded-[10px] md:w-[200px] md:h-[130px] xl:w-[260px] xl:h-[180px]"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.backdrop_path})`,
              }}
            ></div>
            <p className="text-[#FFFFFF] font-bold mt-[5px] text-[13px]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trailer;