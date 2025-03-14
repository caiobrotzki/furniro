import CardProp from "../../../componentes/card_home";
import CardImage from "../../../assets/image 1.svg";

function Card() {
  const cardArray = Array.from({ length: 8 }, (_, index) => index + 1);
  return (
    <div className="grid grid-cols-4 gap-10 place-items-center max-w-screen-xl mx-auto z-10">
      {cardArray.map((_, index) => (
        <CardProp
          key={index}
          img={CardImage}
          titulo="Syltherine"
          descricao="Stylish cafe chair"
          valor="Rp 2.500.000"
        />
      ))}
    </div>
  );
}

export default Card;
