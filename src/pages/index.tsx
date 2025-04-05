import { IoIosSearch } from "react-icons/io";
import { Button } from "@/components/ui/button"
import { useState } from "react";

export default function Home() {
  const [modal, setModal] = useState(false)
  return (
    <>

      <div className=" flex justify-between items-center px-2 mt-[11px] ml-[29px] bg-black">
        <div className="flex justify-between items-center gap-1">
          <img src="burger-menu.png" alt="burger-menu" className="bg-white text-blue-500 rounded w-5 h-5" onClick={()=> setModal(!modal)}/>
          <IoIosSearch className="bg-white text-blue-500 p-1 rounded w-5 h-5" />
        </div>

        <div>
          <img src="/logo.png" alt="header-logo" className="h-6" />

        </div>

        <div>
        <Button className="bg-blue-500 text-white w-[66px] h-[27px] px-4 py-2">Войти</Button>
        </div>
      </div>


    {modal && (
      <div className="text-white font-bold shadow-md w-full px-4 py-2 fixed inset-0 z-50 bg-blue-950 bg-opacity-90">
          <div className="flex justify-center w-full items-center mb-6">
          <img src="/logo.png" alt="header-logo" className="h-6" />
          <span onClick={()=> setModal(!modal)} className="absolute top-0 right-5">&times;</span>
          </div>
        <ul className="flex flex-col items-center gap-5">

          <li><a href="#">Афиша</a></li>
          <li><a href="#">Медиа</a></li>
          <li><a href="#">Фильмы</a></li>
          <li><a href="#">Актёры</a></li>
          <li><a href="#">Новости</a></li>
          <li><a href="#">Подборки</a></li>
          <li><a href="#">Категории</a></li>
        </ul>
      </div>
    )}
    </>
  );
}
