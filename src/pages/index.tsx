import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";
import News from "@/components/custom/News";
import PopularMovie from "@/components/custom/PopularMovie";
import PopularPerson from "@/components/custom/PopularPerson";
import Recomendation from "@/components/custom/Recomendation";
import Trailer from "@/components/custom/Trailer";
import { useState } from "react";

export default function Home() {
  const [mainBg] = useState<string>("/bg.png")
  return (
    <div className="bg-[#1E2538]">
      <div className="absolute w-full z-0">
        <div
          className="h-[100vh] bg object-cover"
          style={{
            backgroundImage: `url(${mainBg})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      <div className="relative z-10 p-3  xl:py-4 lg:px-20">
        <Header />
        <Recomendation />
        <Trailer />
        <PopularMovie />
        <PopularPerson />
        <News />
        <Footer />
      </div>
    </div>
  );
}
