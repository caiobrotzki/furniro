import ImagemQuadros from "../../../assets/Mask Group.svg";

function section() {
  return (
    <div className="flex center justify-center -space-x-16 pt-20">
      <div>
        <img className="w-96 h-96" src={ImagemQuadros} alt="" />
        <h2 className="text-center font-semibold mt-5">Dining</h2>
      </div>
      <div>
        <img className="w-96 h-96" src={ImagemQuadros} alt="" />
        <h2 className="text-center font-semibold mt-5">Living</h2>
      </div>
      <div>
        <img className="w-96 h-96" src={ImagemQuadros} alt="" />
        <h2 className="text-center font-semibold mt-5">Bedroom</h2>
      </div>
    </div>
  );
}

export default section;
