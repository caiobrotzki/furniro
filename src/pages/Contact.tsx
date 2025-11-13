import Fundo from "./contact/components/fundo";
import Content from "./contact/components/content";
import Inputs from "./contact/components/inputs";
import Footer from "../components/footer";
import { toast, Toaster } from "sonner";

function Contact() {
  const handleFormSuccess = () => {
    toast.success("Sua mensagem foi enviada!");
  };

  return (
    <div className="bg-[#FFFFF] min-h-screen relative">
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          className:
            "bg-green-100 text-green-900 rounded-lg shadow-lg px-5 py-3 flex items-center gap-3",
        }}
      />

      <Fundo />

      <div className="max-w-6xl mx-auto px-4">
        <div className="mt-5 flex flex-col items-center animate-fade-in">
          <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl drop-shadow px-2">
            Get In Touch With Us
          </h1>
          <p className="text-center text-xs sm:text-sm md:text-base max-w-[644px] mt-4 text-[#9F9F9F] mb-12 md:mb-20 px-2">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-20 md:space-y-0">
          <div
            className="w-full md:w-auto animate-fade-in"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            <Content />
          </div>
          <div
            className="w-full md:w-auto flex justify-center md:justify-start animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            <Inputs onSuccess={handleFormSuccess} />
          </div>
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

export default Contact;
