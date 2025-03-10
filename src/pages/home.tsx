import CardHome from "../pages/Hoe/components/card";
import Section from "./Hoe/components/section";

function Home() {
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
      <div>
        <h2 className="text-center mt-9 text-3xl  font-bold">Our Products</h2>
      </div>
    </div>
  );
}

export default Home;
