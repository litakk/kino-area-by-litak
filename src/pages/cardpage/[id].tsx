import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";
import { IdInfoContext } from "@/contexts/idInfoContext";
import CardInfo from "@/section/cardInfo";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

interface CardPageProps {}

const CardPage: React.FC<CardPageProps> = () => {

const [background, setBackground] = useState<string>("/trailer.png")
const params = useParams() as {id:string}

  return (
    <>
      <>
        <div className="bg-[#1E2538]">
          <div className="absolute w-full ">
            <img
              alt="background-info-card"
              src={`https://image.tmdb.org/t/p/w500${background}`}
              className="h-[100vh] w-[100%] bg object-fill"
            />
          </div>

          <div className="relative  z-10 p-3 xl:py-4 lg:px-20">
            <Header />
          <IdInfoContext value={{params, setBackground}}>
          <CardInfo/>
          </IdInfoContext>
            <Footer />
          </div>
        </div>
      </>
    </>
  );
};

export default CardPage;
