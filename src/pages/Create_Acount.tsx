import img from "../assets/scandinavian-interior-mockup-wall-decal-background 1.svg";
import Screen from "./CreateAcount/screen";
export default function CreateAcount() {
  return (
    <div className="relative min-h-screen h-screen">
      <img
        src={img}
        alt=""
        className="fixed inset-0 w-full h-full object-cover z-0 blur-sm"
      />
      <div className="relative z-10">
        <Screen />
      </div>
    </div>
  );
}
