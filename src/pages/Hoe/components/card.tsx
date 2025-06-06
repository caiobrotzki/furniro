import ImagemHome from "../../../assets/scandinavian-interior-mockup-wall-decal-background 1.svg";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="relative flex ">
      <img src={ImagemHome} alt="Imagem" className="w-full mt-7  z-0 " />
      <div className="absolute top-1/3 right-10 w-full md:w-2/6 bg-[#FFF3E3] p-10 z-20 ">
        <p className="font-semibold tracking-tight text-sm">New Arrival</p>
        <h2 className="text-[#B88E2F] text-4xl font-bold pb-1">Discover Our</h2>
        <h2 className="text-[#B88E2F] text-4xl font-bold pb-2">
          New collection
        </h2>
        <p className="pb-8 w-5/6 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          facilis architecto consequuntur.
        </p>
        <Link to="/shop">
          <Button
            className="bg-[#B88E2F] w-[222px] h-[74px] text-white"
            title={"BUY NOW"}
          />
        </Link>
      </div>
    </div>
  );
}

export default Card;
