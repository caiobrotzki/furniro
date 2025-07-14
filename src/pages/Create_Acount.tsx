// CreateAcount.tsx
import React from "react";
import img from "../assets/scandinavian-interior-mockup-wall-decal-background 1.svg";
import Screen from "./CreateAcount/screen"; // Ajuste o caminho se necessário

const CreateAcount: React.FC = () => {
  return (
    <div className="relative min-h-screen h-screen">
      <img
        src={img}
        alt="Plano de fundo de uma sala de estar"
        className="w-full h-full object-cover fixed inset-0 z-0"
      />
      {/* Sobreposição escura para contraste */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Container que centraliza e adiciona padding ao redor do card */}
      <div className="relative z-20 flex items-center justify-center h-full p-4">
        <Screen />
      </div>
    </div>
  );
};

export default CreateAcount;
