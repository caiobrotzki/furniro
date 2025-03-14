import Fundo from "./shop/components/fundo";
import Nav from "./shop/components/secondnavbar";
import Card from "./shop/components/card";

function Shop() {
  return (
    <div>
      <Fundo />
      <div>
        <Nav />
      </div>
      <div className="mt-10">
        <Card />
      </div>
    </div>
  );
}

export default Shop;
