import React, { useState } from "react";
import Form from "../../../components/form";
import ButtonProp from "../../../components/Button";

interface InputsProps {
  onSuccess?: () => void;
}

function Inputs({ onSuccess }: InputsProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Chama a função para mostrar mensagem no topo
    if (onSuccess) {
      onSuccess();
    }

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-2 text-[16px]">Your name</h2>
      <Form
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-[240px] h-[40px] border border-[#9F9F9F] rounded-[10px] text-sm pl-5 mb-8 text-[16px]"
        placeholder="Abc"
        required
      />
      <h2 className="mb-2 text-[16px]">Email address</h2>
      <Form
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-[240px] h-[40px] border border-[#9F9F9F] rounded-[10px] text-sm pl-5 mb-8 text-[16px]"
        placeholder="Abc@def.com"
        required
      />
      <h2 className="mb-2 text-[16px]">Subject</h2>
      <Form
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        className="w-[240px] h-[40px] border border-[#9F9F9F] rounded-[10px] text-sm pl-5 mb-8 text-[16px]"
        placeholder="This is optional"
      />
      <h2 className="mb-2 text-[16px]">Message</h2>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="w-[240px] h-[90px] border border-[#9F9F9F] rounded-[10px] text-sm pl-5 pt-2 mb-8 text-[16px] resize-none"
        placeholder="Hi! I’d like to ask about"
        required
      />
      <div className="w-full flex justify-center">
        <ButtonProp
          title="Submit"
          type="submit"
          className="mt-7 px-10 py-3 bg-[#B88E2F] text-white border border-[#B88E2F] rounded-[5px] hover:scale-110 hover:bg-[#8f6f25] transition-all duration-00"
        />
      </div>
    </form>
  );
}

export default Inputs;
