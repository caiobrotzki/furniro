import Footer from "../../components/footer";
import ImagemFundo from "../../assets/Rectangle 1.svg";

function AboutScreen() {
  return (
    <div className="min-h-screen bg-white animate-fade-in">
      <div className="">
        <div className="pt-16 relative">
          <img
            src={ImagemFundo}
            alt="Imagem de fundo desfocada para a seção About"
            className="w-full blur-[50%]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="mt-4 font-bold text-5xl">About Us</h1>
            <div className="flex items-center mt-8">
              <h2 className="font-bold text-[16px] mr-1">Home &gt;</h2>
              <h2 className="text-[16px] ">About</h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-16">
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-transparent hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-full flex justify-start mb-4">
              <span className="h-1 w-16 bg-[#B88E2F] rounded-full" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-[#B88E2F]">Our Mission</h3>
              <p className="text-[#666666]">To offer timeless furniture that elevates everyday life — built to last and designed for living.</p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg border border-transparent hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-full flex justify-start mb-4">
              <span className="h-1 w-16 bg-[#B88E2F] rounded-full" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-[#B88E2F]">Our Craft</h3>
              <p className="text-[#666666]">We work with artisans and trusted manufacturers to create pieces with attention to detail and responsible sourcing.</p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg border border-transparent hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-full flex justify-start mb-4">
              <span className="h-1 w-16 bg-[#B88E2F] rounded-full" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-[#B88E2F]">Sustainability</h3>
              <p className="text-[#666666]">We prioritise sustainable materials and packaging to reduce our environmental footprint.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#B88E2F]">Come visit our showroom</h2>
          <p className="text-[#9F9F9F] max-w-lg mx-auto">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
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

export default AboutScreen;
