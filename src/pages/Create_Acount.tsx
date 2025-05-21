import img from "../assets/scandinavian-interior-mockup-wall-decal-background 1.svg";
import Screen from "./CreateAcount/screen";
export default function CreateAcount() {
  return (
    <div>
      <div>
        <img src={img} alt="" className="w-full z-0 " />
      </div>
      <div>
        <Screen />
      </div>
    </div>
  );
}
