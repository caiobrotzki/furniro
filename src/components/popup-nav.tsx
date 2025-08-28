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
    const numericValue = parseFloat(
      item.valor.replace(/[^\d,.-]/g, "").replace(",", ".")
    );
    return sum + (isNaN(numericValue) ? 0 : numericValue);
  }, 0);

  // ...

  <p className="font-bold text-right">
    Total:{" "}
    {total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
  </p>;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex">
      <div className="bg-white p-4 rounded-lg shadow-lg ml-auto w-[300px] flex flex-col justify-between mb-20 max-h-[80vh]">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <img
              src={fecharshooping}
              alt="Fechar popup"
              className="w-5 h-5 cursor-pointer"
              onClick={onClose}
            />
          </div>

          {cartItems.length > 0 ? (
            <ul className="mt-4 overflow-y-auto max-h-[50vh]">
              {cartItems.map((item: Produto, index: number) => (
                <li
                  key={index}
                  className="flex items-center justify-between mb-2"
                >
                  <div className="flex items-center space-x-2">
                    <img
                      src={item.img}
                      alt={item.titulo}
                      className="w-10 h-10"
                    />
                    <div>
                      <p className="text-sm">{item.titulo}</p>
                      <p className="text-xs text-gray-500">{item.valor}</p>
                    </div>
                  </div>

                  {/* Botão Remover */}
                  <button
                    onClick={() => onRemoveItem(index)}
                    className="text-red-500 text-xs hover:underline ml-2"
                    aria-label={`Remover ${item.titulo} do carrinho`}
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[12px] text-center mt-4">
              O carrinho está vazio.
            </p>
          )}
        </div>

        <div className="mt-4">
          <p className="font-bold text-right">
            Total:{" "}
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <Link to="/shop">
            <ButtonProp
              title="Keep shopping"
              className="w-full text-center bg-[#B88E2F] rounded-[3px] text-white"
              onClick={onClose}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
