import Fundo from "./contact/components/fundo";

function Contact() {
  return (
    <div>
      <Fundo />
      <div>
        <div className="mt-10 flex flex-col items-center">
          <h1 className="text-center font-bold text-2xl">
            Get In Touch With Us
          </h1>
          <p className="text-center text-sm max-w-[644px] mt-4 text-[#9F9F9F]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
