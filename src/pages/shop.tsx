import { toast, Toaster } from "sonner";
import { ShoppingCartSimple } from "phosphor-react";
import Fundo from "./shop/components/fundo";
import Nav from "./shop/components/secondnavbar";
import Card from "./shop/components/card";
import CardImage from "../assets/image 1.svg";
import Footer from "../components/footer";

interface Produto {
  img: string;
  titulo: string;
  descricao: string;
  valor: string;
}

interface ShopProps {
  handleAddToCart: (produto: Produto) => void;
}

function Shop({ handleAddToCart }: ShopProps) {
  const cardArray: Produto[] = [
    {
      img: CardImage,
      titulo: "Syltherine",
      descricao: "Stylish cafe chair",
      valor: "R$ 2.500,00",
    },
    {
      img: CardImage,
      titulo: "Leviosa",
      descricao: "Modern table",
      valor: "R$ 3.200,00",
    },
    {
      img: CardImage,
      titulo: "Lolito",
      descricao: "Luxury sofa",
      valor: "R$ 7.000,00",
    },
    {
      img: CardImage,
      titulo: "Respira",
      descricao: "Outdoor bar table",
      valor: "R$ 5.000,00",
    },
    {
      img: CardImage,
      titulo: "Grifo",
      descricao: "Dining chair",
      valor: "R$ 1.500,00",
    },
    {
      img: CardImage,
      titulo: "Muggo",
      descricao: "Small mug",
      valor: "R$ 150,00",
    },
    {
      img: CardImage,
      titulo: "Pingky",
      descricao: "Cute bed",
      valor: "R$ 6.500,00",
    },
    {
      img: CardImage,
      titulo: "Potty",
      descricao: "Minimalist flower pot",
      valor: "R$ 450,00",
    },
    {
      img: CardImage,
      titulo: "Origo",
      descricao: "Sleek office desk",
      valor: "R$ 4.000,00",
    },
    {
      img: CardImage,
      titulo: "Vento",
      descricao: "Modern lounge chair",
      valor: "R$ 3.800,00",
    },
    {
      img: CardImage,
      titulo: "Alto",
      descricao: "High-end bookshelf",
      valor: "R$ 6.200,00",
    },
    {
      img: CardImage,
      titulo: "Luna",
      descricao: "Elegant coffee table",
      valor: "R$ 2.800,00",
    },
    {
      img: CardImage,
      titulo: "Vega",
      descricao: "Contemporary floor lamp",
      valor: "R$ 1.200,00",
    },
    {
      img: CardImage,
      titulo: "Solace",
      descricao: "Luxury armchair",
      valor: "R$ 5.500,00",
    },
    {
      img: CardImage,
      titulo: "Tera",
      descricao: "Outdoor lounge set",
      valor: "R$ 9.000,00",
    },
    {
      img: CardImage,
      titulo: "Astra",
      descricao: "Minimalist coffee mug",
      valor: "R$ 250,00",
    },
  ];

  const handleAdd = (produto: Produto) => {
    handleAddToCart(produto);
    toast.success(
      <div className="flex flex-col ">
        <span className="font-bold">{`${produto.titulo} adicionado ao carrinho!`}</span>
        <span>{`Preço: ${produto.valor}`}</span>
      </div>,
      {
        icon: <ShoppingCartSimple weight="bold" />,
      }
    );
  };

  return (
    <div>
      <Fundo />
      <Nav />

      
      <Toaster
        position="top-right" 
        richColors
        toastOptions={{
          className:
            "bg-green-100 text-green-900 rounded-lg shadow-lg px-5 py-3 flex items-center gap-3",
        }}
      />

      <div className="mt-6 md:mt-10 z-10 px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold pt-3 md:pt-5 pb-4 md:pb-7 animate-fade-in">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 place-items-center max-w-screen-xl mx-auto z-10">
          {cardArray.map((produto, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{
                animationDelay: `${0.1 + index * 0.07}s`,
                animationFillMode: "both",
              }}
            >
              <Card produto={produto} addToCart={handleAdd} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 0.8s cubic-bezier(.4,0,.2,1) both;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  );
}

export default Shop;
