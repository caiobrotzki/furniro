import img from "../assets/scandinavian-interior-mockup-wall-decal-background 1.svg";
import Screen from "./Login/screen";
export default function Login() {
  return (
    <div className="relative min-h-screen h-screen">
      <img
        src={img}
        alt=""
        className="w-full h-full object-cover fixed inset-0 z-0 blur-sm"
      />
      <div className="relative z-10">
        <Screen />
      </div>
    </div>
  );
}
