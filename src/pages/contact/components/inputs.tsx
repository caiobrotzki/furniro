import Form from "../../../components/form";
import ButtonProp from "../../../components/Button";

function inputs() {
  return (
    <div>
      <h2 className="mb-8 text-[16px]"> Your name</h2>
      <Form
        type="text"
        name="text"
        className="w-[240pxx] h-[40px] border border-[#9F9F9F] rounded-[10px] text-sl pl-5 mb-8 text-[16px]"
        placeholder="Abc"
        required
      />
      <h2 className="mb-8 text-[16px]"> Email address</h2>
      <Form
        type="email"
        name="text"
        className="w-[240pxx] h-[40px] border border-[#9F9F9F] rounded-[10px] text-sl pl-5 mb-8 text-[16px]"
        placeholder="Abc@def.com"
        required
      />
      <h2 className="mb-8 text-[16px]"> Subject</h2>
      <Form
        type="text"
        name="text"
        className="w-[240pxx] h-[40px] border border-[#9F9F9F] rounded-[10px] text-sl pl-5 mb-8 text-[16px]"
        placeholder="This is an optional"
        required
      />
      <h2 className="mb-8 text-[16px]"> Message</h2>
      <Form
        type="text"
        name="text"
        className="w-[240pxx] h-[90px] border border-[#9F9F9F] rounded-[10px] text-sl pl-5 mb-8 text-[16px]"
        placeholder="Hi! i’d like to ask about"
        required
      />
      <ButtonProp
        title="Submit"
        className="mt-5 w-[137px] h-[37.5px] bg-[#B88E2F] text-white border border-[B88E2F] rounded-[5px] "
      />
    </div>
  );
}

export default inputs;
