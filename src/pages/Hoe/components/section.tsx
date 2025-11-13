import ImagemQuadros from "../../../assets/Mask Group.svg";

function section() {
  return (
    <div className="flex flex-col sm:flex-row center justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:-space-x-16 pt-10 md:pt-20 px-4">
      <div className="w-full sm:w-auto">
        <img className="w-full sm:w-80 md:w-96 h-80 md:h-96 hover:scale-105 transform transition-all duration-300 rounded-lg" src={ImagemQuadros} alt="" />
        <h2 className="text-center font-semibold mt-4 md:mt-5 text-lg md:text-base">Dining</h2>
      </div>
      <div className="w-full sm:w-auto">
        <img className="w-full sm:w-80 md:w-96 h-80 md:h-96 hover:scale-105 transform transition-all duration-300 rounded-lg" src={ImagemQuadros} alt="" />
        <h2 className="text-center font-semibold mt-4 md:mt-5 text-lg md:text-base">Living</h2>
      </div>
      <div className="w-full sm:w-auto">
        <img className="w-full sm:w-80 md:w-96 h-80 md:h-96 hover:scale-105 transform transition-all duration-300 rounded-lg" src={ImagemQuadros} alt="" />
        <h2 className="text-center font-semibold mt-4 md:mt-5 text-lg md:text-base">Bedroom</h2>
      </div>
    </div>
  );
}

export default section;
