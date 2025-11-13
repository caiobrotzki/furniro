import fecharshooping from "../assets/closeshooping.svg";
import ButtonProp from "./Button";
import { Link } from "react-router-dom";

interface Produto {
  img: string;
  titulo: string;
  descricao: string;
  valor: string;
}

interface ShoppingCartProps {
  cartItems: Produto[];
  onClose: () => void;
  onRemoveItem: (index: number) => void;
}

function ShoppingCart({ cartItems, onClose, onRemoveItem }: ShoppingCartProps) {
  const total = cartItems.reduce((sum: number, item: Produto) => {
    const rawValue = item.valor
      .replace("R$", "")        // Remove "R$"
      .replace(/\./g, "")       // Remove pontos (milhar)
      .replace(",", ".")        // Troca vírgula por ponto decimal
      .trim();                  // Remove espaços extras

    const numericValue = parseFloat(rawValue);
    return sum + (isNaN(numericValue) ? 0 : numericValue);
  }, 0);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex z-50">
      <div className="bg-white p-3 md:p-4 rounded-lg shadow-lg ml-auto w-[85vw] sm:w-[400px] flex flex-col justify-between mb-16 md:mb-20 max-h-[80vh] overflow-hidden">
        <div>
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <h2 className="text-base md:text-lg font-semibold">Shopping Cart</h2>
            <img
              src={fecharshooping}
              alt="Fechar popup"
              className="w-4 h-4 md:w-5 md:h-5 cursor-pointer"
              onClick={onClose}
            />
          </div>

          {cartItems.length > 0 ? (
            <ul className="mt-2 md:mt-4 overflow-y-auto max-h-[45vh]">
              {cartItems.map((item: Produto, index: number) => (
                <li
                  key={index}
                  className="flex items-center justify-between mb-2 p-2 hover:bg-gray-50 rounded"
                >
                  <div className="flex items-center space-x-2 flex-1 min-w-0">
                    <img
                      src={item.img}
                      alt={item.titulo}
                      className="w-8 md:w-10 h-8 md:h-10 flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-xs md:text-sm truncate">{item.titulo}</p>
                      <p className="text-xs text-gray-500">{item.valor}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(index)}
                    className="text-red-500 text-xs hover:underline ml-2 flex-shrink-0"
                    aria-label={`Remover ${item.titulo} do carrinho`}
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs md:text-sm text-center mt-3 md:mt-4">
              O carrinho está vazio.
            </p>
          )}
        </div>

        <div className="mt-3 md:mt-4">
          <p className="font-bold text-right text-xs md:text-sm mb-2">
            Total:{" "}
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <Link to="/shop">
            <ButtonProp
              title="Keep shopping"
              className="w-full text-center bg-[#B88E2F] rounded-[3px] text-white py-2 md:py-2 text-xs md:text-sm font-semibold hover:bg-[#a17b28] transition-all"
              onClick={onClose}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
