import CardHome from "../pages/Hoe/components/card";
import Section from "./Hoe/components/section";
import Card from "../componentes/card_home";
import CardImage from "../assets/image 1.svg";
import Button from "../componentes/Button";

function Home() {
  const cardArray = Array.from({ length: 8 }, (_, index) => index + 1);
  return (
    <div>
      <CardHome />
      <div>
        <h2 className="pt-10 text-center font-bold text-2xl ">
          Browse The Range
        </h2>
        <p className="text-center text-[#666666] pt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
        <Section />
      </div>
      <div className="">
        <h2 className="text-center mt-9 text-3xl font-bold pt-5 pb-7">
          Our Products
        </h2>
        <div className="grid grid-cols-4 gap-10 place-items-center max-w-screen-xl mx-auto ">
          {cardArray.map((_, index) => (
            <Card
              key={index}
              img={CardImage}
              titulo="Syltherine"
              descricao="Stylish cafe chair"
              valor="Rp 2.500.000"
            />
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <Button
            title="Show More"
            className="text-[#B88E2F] font-bold pl-16 pr-16 pt-3 pb-3 border border-[#B88E2F] border-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
