import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";
import Recomendation from "@/components/custom/Recomendation";
import Trailer from "@/components/custom/Trailer";

export default function Home() {
  return (
    <div>
      <div className="absolute w-full">
        <img
          src="/background.png"
          alt=""
          className="w-full h-[1500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#121622bb] "></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1e2538d5] to-transparent"></div>
      </div>

      <div className="relative z-10 p-3 md:p-5 lg:p-7">
        <Header />
        {/* <Link href={"/cardFilm"}>GO</Link> */}
        <Recomendation />
        <Trailer/>
        <Footer />
      </div>
    </div>
  );
}
