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
      valor: "Rp 2.500.000",
    },
    {
      img: CardImage,
      titulo: "Leviosa",
      descricao: "Modern table",
      valor: "Rp 3.200.000",
    },
    {
      img: CardImage,
      titulo: "Lolito",
      descricao: "Luxury sofa",
      valor: "Rp 7.000.000",
    },
    {
      img: CardImage,
      titulo: "Respira",
      descricao: "Outdoor bar table",
      valor: "Rp 5.000.000",
    },
    {
      img: CardImage,
      titulo: "Grifo",
      descricao: "Dining chair",
      valor: "Rp 1.500.000",
    },
    {
      img: CardImage,
      titulo: "Muggo",
      descricao: "Small mug",
      valor: "Rp 150.000",
    },
    {
      img: CardImage,
      titulo: "Pingky",
      descricao: "Cute bed",
      valor: "Rp 6.500.000",
    },
    {
      img: CardImage,
      titulo: "Potty",
      descricao: "Minimalist flower pot",
      valor: "Rp 450.000",
    },
    {
      img: CardImage,
      titulo: "Origo",
      descricao: "Sleek office desk",
      valor: "Rp 4.000.000",
    },
    {
      img: CardImage,
      titulo: "Vento",
      descricao: "Modern lounge chair",
      valor: "Rp 3.800.000",
    },
    {
      img: CardImage,
      titulo: "Alto",
      descricao: "High-end bookshelf",
      valor: "Rp 6.200.000",
    },
    {
      img: CardImage,
      titulo: "Luna",
      descricao: "Elegant coffee table",
      valor: "Rp 2.800.000",
    },
    {
      img: CardImage,
      titulo: "Vega",
      descricao: "Contemporary floor lamp",
      valor: "Rp 1.200.000",
    },
    {
      img: CardImage,
      titulo: "Solace",
      descricao: "Luxury armchair",
      valor: "Rp 5.500.000",
    },
    {
      img: CardImage,
      titulo: "Tera",
      descricao: "Outdoor lounge set",
      valor: "Rp 9.000.000",
    },
    {
      img: CardImage,
      titulo: "Astra",
      descricao: "Minimalist coffee mug",
      valor: "Rp 250.000",
    },
  ];

  return (
    <div>
      <Fundo />
      <div>
        <Nav />
      </div>
      <div className="mt-10 z-10">
        <h2 className="text-center text-3xl font-bold pt-5 pb-7 animate-fade-in">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center max-w-screen-xl mx-auto z-10">
          {cardArray.map((produto, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{
                animationDelay: `${0.1 + index * 0.07}s`,
                animationFillMode: "both",
              }}
            >
              <Card produto={produto} addToCart={handleAddToCart} />
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
