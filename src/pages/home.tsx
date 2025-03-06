import ImagemHome from "../assets/scandinavian-interior-mockup-wall-decal-background 1.svg";
import Button from "../componentes/Button";

function Home() {
  return (
    <div>
      <div className="flex">
        <img src={ImagemHome} alt="Imagem" className="w-full" />
        <div className="absolute bottom-20 right-7  bg-orange-100 p-10 w-2/6">
          <p className="font-semibold -tracking-tighter">New Arrival</p>
          <h2 className="text-yellow-600 text-4xl font-bold pb-1">
            Discover Our
          </h2>
          <h2 className="text-yellow-600 text-4xl font-bold pb-2">
            New collection
          </h2>
          <p className="pb-8 w-5/6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            facilis architecto consequuntu
          </p>
          <Button
            className="bg-yellow-600 pt-6 pb-6 pr-12 pl-12"
            title={"BUY NOW"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
