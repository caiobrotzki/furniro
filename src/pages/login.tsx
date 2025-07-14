// Login.tsx
import React from "react";
import img from "../assets/scandinavian-interior-mockup-wall-decal-background 1.svg";
import Screen from "./Login/screen";

const Login: React.FC = () => {
  return (
    <div className="relative min-h-screen h-screen">
      <img
        src={img}
        alt="Plano de fundo de uma sala de estar"
        className="w-full h-full object-cover fixed inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Este container centraliza o card e garante a "bordinha" com p-4 */}
      <div className="relative z-20 flex items-center justify-center h-full p-4">
        <Screen />
      </div>
    </div>
  );
};

export default Login;
