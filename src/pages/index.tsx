import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";
import News from "@/components/custom/News";
import PopularMovie from "@/components/custom/PopularMovie";
import PopularPerson from "@/components/custom/PopularPerson";
import Recomendation from "@/components/custom/Recomendation";
import Trailer from "@/components/custom/Trailer";

export default function Home() {
  return (
    <div className="bg-[#1E2538]">
      <div className="absolute w-full z-0">
        <img src="/bg.png" alt="" className="w-full h-[100vh] object-cover" />
      </div>

      <div className="relative z-10 p-3  xl:py-4 lg:px-20">
        <Header />
        {/* <Link href={"/cardFilm"}>GO</Link> */}
        <Recomendation />
        <Trailer />
        <PopularMovie />
        <PopularPerson/>
        <News/>
        <Footer />
      </div>
    </div>
  );
}
