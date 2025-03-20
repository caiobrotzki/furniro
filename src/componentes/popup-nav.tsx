import fecharshooping from "../assets/closeshooping.svg";

interface Produto {
  img: string;
  titulo: string;
  valor: string;
}

interface ShoppingCartProps {
  cartItems: Produto[];
  onClose: () => void;
}

function ShoppingCart({ cartItems, onClose }: ShoppingCartProps) {
  const total = cartItems.reduce(
    (sum: number, item: Produto) =>
      sum + parseFloat(item.valor.replace(/\D/g, "")),
    0
  );

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex">
      <div className="bg-white p-4 rounded-lg shadow-lg ml-auto w-[250px] flex flex-col justify-between mb-20">
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
            <ul className="mt-4">
              {cartItems.map((item: Produto, index: number) => (
                <li key={index} className="flex justify-between mb-2">
                  <img src={item.img} alt={item.titulo} className="w-10 h-10" />
                  <p className="text-sm">{item.titulo}</p>
                  <p className="text-sm">{item.valor}</p>
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
            Total: Rp {total.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
