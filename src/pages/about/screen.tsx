import Footer from "../../components/footer";
import ImagemFundo from "../../assets/Rectangle 1.svg";
import logo from "../../assets/Meubel House_Logos-05 (1).svg";
import Image1 from "../../assets/image 1.svg";
import Scandi from "../../assets/scandinavian-interior-mockup-wall-decal-background 1.svg";

function AboutScreen() {
  return (
    <div className="min-h-screen bg-white animate-fade-in">
      <div className="">
        <div className="pt-12 md:pt-16 relative">
          <img
            src={ImagemFundo}
            alt="Imagem de fundo desfocada para a seção About"
            className="w-full blur-[50%]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <img src={logo} alt="Logo" className="w-10 md:w-12" />
            <h1 className="mt-3 md:mt-4 font-bold text-3xl md:text-5xl">About Us</h1>
            <div className="flex items-center mt-4 md:mt-8 text-sm md:text-base">
              <h2 className="font-bold mr-1">Home &gt;</h2>
              <h2>About</h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto px-4 py-8 md:py-16">
          <div className="p-4 md:p-6 bg-white rounded-lg md:rounded-2xl shadow-lg border border-transparent hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-full flex justify-start mb-4">
              <span className="h-1 w-16 bg-[#B88E2F] rounded-full" />
            </div>
            <div className="">
              <h3 className="font-semibold text-base md:text-xl mb-2 text-[#B88E2F]">Our Mission</h3>
              <p className="text-[#666666] text-sm md:text-base">To offer timeless furniture that elevates everyday life — built to last and designed for living.</p>
            </div>
          </div>

          <div className="p-4 md:p-6 bg-white rounded-lg md:rounded-2xl shadow-lg border border-transparent hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-full flex justify-start mb-4">
              <span className="h-1 w-16 bg-[#B88E2F] rounded-full" />
            </div>
            <div>
              <h3 className="font-semibold text-base md:text-xl mb-2 text-[#B88E2F]">Our Craft</h3>
              <p className="text-[#666666] text-sm md:text-base">We work with artisans and trusted manufacturers to create pieces with attention to detail and responsible sourcing.</p>
            </div>
          </div>

          <div className="p-4 md:p-6 bg-white rounded-lg md:rounded-2xl shadow-lg border border-transparent hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-full flex justify-start mb-4">
              <span className="h-1 w-16 bg-[#B88E2F] rounded-full" />
            </div>
            <div>
              <h3 className="font-semibold text-base md:text-xl mb-2 text-[#B88E2F]">Sustainability</h3>
              <p className="text-[#666666] text-sm md:text-base">We prioritise sustainable materials and packaging to reduce our environmental footprint.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-16 text-center px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#B88E2F]">Come visit our showroom</h2>
          <p className="text-[#9F9F9F] max-w-lg mx-auto text-sm md:text-base">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>

        {/* Our Story section */}
        <section className="max-w-6xl mx-auto px-4 py-8 md:py-16">
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#B88E2F]">Our Story</h2>
              <p className="text-[#666666] mb-4 text-sm md:text-base">
                Founded with a love for timeless design, Furniro began as a small
                studio crafting furniture that balances form and function. Over
                the years we expanded our network of artisans and partners,
                always focusing on quality materials and thoughtful details.
              </p>
              <p className="text-[#666666] text-sm md:text-base">
                Today, our pieces are present in homes and public spaces where
                comfort and elegance are valued. We design to last, and we
                design to be lived in.
              </p>
            </div>
            <div className="md:w-1/2 hover:scale-110 transition-all duration-300">
              <img
                src={Scandi}
                alt="Our story image"
                className="w-full rounded-lg md:rounded-2xl shadow-md object-cover"
              />
            </div>
          </div>
        </section>

        {/* Meet the team */}
        <section className="max-w-7xl mx-auto px-4 py-8 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-[#B88E2F]">Meet the team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
            <div className="bg-white p-4 md:p-6 rounded-lg md:rounded-2xl shadow-lg text-center hover:scale-110 transition-all duration-300">
              <img
                src={Image1}
                alt="Team member"
                className="w-24 md:w-32 h-24 md:h-32 object-cover rounded-full mx-auto"
              />
              <h3 className="text-lg md:text-xl font-semibold mt-3 md:mt-4">Ana Silva</h3>
              <p className="text-[#9F9F9F] text-sm md:text-base">Head of Design</p>
              <p className="text-[#666666] mt-2 md:mt-3 text-xs md:text-sm">
                Ana leads our design team with a focus on craftsmanship and
                material selection. She drives the aesthetic vision behind our
                collections.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg md:rounded-2xl shadow-lg text-center hover:scale-110 transition-all duration-300">
              <img
                src={Image1}
                alt="Team member"
                className="w-24 md:w-32 h-24 md:h-32 object-cover rounded-full mx-auto"
              />
              <h3 className="text-lg md:text-xl font-semibold mt-3 md:mt-4">Marco Pereira</h3>
              <p className="text-[#9F9F9F] text-sm md:text-base">Production Manager</p>
              <p className="text-[#666666] mt-2 md:mt-3 text-xs md:text-sm">
                Marco manages our production and works closely with artisans to
                ensure every piece meets our quality standards.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg md:rounded-2xl shadow-lg text-center hover:scale-110 transition-all duration-300">
              <img
                src={Image1}
                alt="Team member"
                className="w-24 md:w-32 h-24 md:h-32 object-cover rounded-full mx-auto"
              />
              <h3 className="text-lg md:text-xl font-semibold mt-3 md:mt-4">Laura Gomes</h3>
              <p className="text-[#9F9F9F] text-sm md:text-base">Sustainability Lead</p>
              <p className="text-[#666666] mt-2 md:mt-3 text-xs md:text-sm">
                Laura drives our sustainability initiatives, sourcing and
                packaging efforts to reduce environmental impact.
              </p>
            </div>
          </div>
        </section>
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

export default AboutScreen;
