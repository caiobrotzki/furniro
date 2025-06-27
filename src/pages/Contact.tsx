import Fundo from "./contact/components/fundo";
import Content from "./contact/components/content";
import Inputs from "./contact/components/inputs";
import Footer from "../components/footer";

function Contact() {
  return (
    <div className="bg-[#FFFFF] min-h-screen">
      <Fundo />
      <div className="max-w-6xl mx-auto px-4">
        <div className="mt-5 flex flex-col items-center animate-fade-in">
          <h1 className="text-center font-bold text-3xl md:text-4xl drop-shadow">
            Get In Touch With Us
          </h1>
          <p className="text-center text-base max-w-[644px] mt-4 text-[#9F9F9F] mb-20">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start md:space-x-20 space-y-10 md:space-y-0">
          <div
            className="animate-fade-in"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            <Content />
          </div>
          <div
            className="w-full md:w-auto flex justify-center animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            <Inputs />
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
