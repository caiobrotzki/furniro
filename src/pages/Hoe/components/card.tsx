import ImagemHome from "../../../assets/scandinavian-interior-mockup-wall-decal-background 1.svg";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="relative flex items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[420px] px-4 md:px-0">
      <img
        src={ImagemHome}
        alt="Imagem"
        className="w-full mt-4 sm:mt-7 object-cover rounded-2xl md:rounded-3xl shadow-xl transition-all duration-500"
      />
      <div className="absolute right-0 md:right-10 -translate-y-1/2 w-full sm:w-3/4 md:w-2/6 bg-[#FFF3E3] bg-opacity-95 p-6 sm:p-8 md:p-10 rounded-lg md:rounded-2xl z-20 shadow-2xl border border-[#f3e9d7] flex flex-col items-start animate-fade-in mx-4 sm:mx-0">
        <p className="font-semibold tracking-widest text-xs sm:text-sm text-[#B88E2F] mb-2 uppercase">
          New Arrival
        </p>
        <h2 className="text-[#B88E2F] text-2xl sm:text-3xl md:text-4xl font-extrabold pb-1 drop-shadow">
          Discover Our
        </h2>
        <h2 className="text-[#B88E2F] text-2xl sm:text-3xl md:text-4xl font-extrabold pb-3 drop-shadow">
          New collection
        </h2>
        <p className="pb-6 sm:pb-8 w-full text-gray-700 text-xs sm:text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          facilis architecto consequuntur.
        </p>
        <Link to="/shop" className="w-full flex justify-start">
          <Button
            className="bg-[#B88E2F] w-full sm:w-[200px] md:w-[222px] h-12 md:h-[54px] text-white rounded-xl font-bold text-sm md:text-lg shadow-lg hover:scale-105 transition-all"
            title={"BUY NOW"}
          />
        </Link>
      </div>
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1s cubic-bezier(.4,0,.2,1) both;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  );
}

export default Card;
