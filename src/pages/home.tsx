import CardHome from "../pages/Hoe/components/card";
import Section from "./Hoe/components/section";
import Card from "../components/card_home";
import CardImage from "../assets/image 1.svg";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

interface Produto {
  img: string;
  titulo: string;
  descricao: string;
  valor: number; // Agora é número
}

function Home() {
  const cardArray: Produto[] = [
    {
      img: CardImage,
      titulo: "Syltherine",
      descricao: "Stylish cafe chair",
      valor: 2500,
    },
    {
      img: CardImage,
      titulo: "Leviosa",
      descricao: "Modern table",
      valor: 3200,
    },
    {
      img: CardImage,
      titulo: "Lolito",
      descricao: "Luxury sofa",
      valor: 7000,
    },
    {
      img: CardImage,
      titulo: "Respira",
      descricao: "Outdoor bar table",
      valor: 5000,
    },
    {
      img: CardImage,
      titulo: "Grifo",
      descricao: "Dining chair",
      valor: 1500,
    },
    {
      img: CardImage,
      titulo: "Muggo",
      descricao: "Small mug",
      valor: 150,
    },
    {
      img: CardImage,
      titulo: "Pingky",
      descricao: "Cute bed",
      valor: 6500,
    },
    {
      img: CardImage,
      titulo: "Potty",
      descricao: "Minimalist flower pot",
      valor: 450,
    },
  ];

  return (
    <div>
      <CardHome />
      <div className="z-10">
        <h2 className="pt-10 text-center font-bold text-2xl">
          Browse The Range
        </h2>
        <p className="text-center text-[#666666] pt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
        <Section />
      </div>
      <div className="z-10">
        <h2 className="text-center mt-9 text-3xl font-bold pt-5 pb-7">
          Our Products
        </h2>
        <div className="grid grid-cols-4 gap-10 place-items-center max-w-screen-xl mx-auto z-10">
          {cardArray.map((produto, index) => (
            <Card
              key={index}
              img={produto.img}
              titulo={produto.titulo}
              descricao={produto.descricao}
              valor={produto.valor.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
              
            />
          ))}
        </div>
        <div className="flex justify-center mt-6 mb-10 z-10">
          <Link to="/shop">
            <Button
              title="Show More"
              className="text-[#B88E2F] font-bold pl-16 pr-16 pt-3 pb-3 border-2 border-[#B88E2F]"
            />
          </Link>
        </div>
      </div>
      <Footer />
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 0.9s cubic-bezier(.4,0,.2,1) both;
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

export default Home;
