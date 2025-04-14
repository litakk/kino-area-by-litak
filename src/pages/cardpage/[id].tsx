import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";
import { IdInfoContext } from "@/contexts/idInfoContext";
import CardInfo from "@/section/cardInfo";
import { useParams } from "next/navigation";
import { useState } from "react";

const CardPage: React.FC<CardPageProps> = () => {
  const [background, setBackground] = useState<string>("/trailer.png");
  const params = useParams() as { id: string };

  return (
    <>
      <>
        <div className="bg-[#1E2538]">
          <div className="absolute w-full bg">
            <img
              alt="background-info-card"
              src={`https://image.tmdb.org/t/p/original${background}`}
              className="h-[120vh] md:h-[83vh] xl:h-[110vh] w-[100%] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-[#1E2538] to-transparent" />
          </div>

          <div className="relative  z-10 p-3 xl:py-4 lg:px-20">
            <Header />
            <IdInfoContext.Provider value={{ params, setBackground }}>
              <CardInfo />
            </IdInfoContext.Provider>
            <Footer />
          </div>
        </div>
      </>
    </>
  );
};

export default CardPage;
