import React from "react";
import fecharshooping from "../assets/closeshooping.svg";
import ButtonProp from "./Button";

interface PopUpProps {
  onClose: () => void;
}

function PopUP({ onClose }: PopUpProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex">
      <div className="bg-white p-4 rounded-lg shadow-lg ml-auto w-[250px] flex flex-col justify-between mb-20">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">ShoppingCar</h2>
            <img
              src={fecharshooping}
              alt="Fechar popup"
              className="w-5 h-5 cursor-pointer"
              onClick={onClose}
            />
          </div>
          <p className="text-[12px] text-center mt-4">O carrinho está vazio.</p>
        </div>
        <ButtonProp
          title="Continue comprando"
          className="text-[12px] text-white w-full bg-[#B88E2F] pt-3 pb-3 rounded-[5px]"
        />
      </div>
    </div>
  );
}

export default PopUP;
