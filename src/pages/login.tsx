import img from "../assets/scandinavian-interior-mockup-wall-decal-background 1.svg";
import Screen from "./Login/screen";
export default function Login() {
  return (
    <div>
      <div>
        <img src={img} alt="" className="w-full z-0 blur-sm" />
      </div>
      <div>
        <Screen />
      </div>
    </div>
  );
}
