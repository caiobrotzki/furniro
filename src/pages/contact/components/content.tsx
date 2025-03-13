import icon from "../../../assets/Vector.svg";
import icon2 from "../../../assets/Vector (1).svg";
import icon3 from "../../../assets/Vector (2).svg";

function Content() {
  return (
    <div className="flex flex-col space-y-20">
      <div className="flex items-start">
        <img src={icon} alt="" className="w-[23px] h-[23px] mr-5 mt-2" />
        <div className="w-[180px] h-[72px]">
          <h2 className="text-[24px] font-semibold">Address</h2>
          <p className="text-[16px]">
            236 5th SE Avenue, New York NY10000, United States
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <img src={icon2} alt="" className="w-[23px] h-[23px] mr-5 mt-2" />
        <div className="w-[212px] h-[72px]">
          <h2 className="text-[24px] font-semibold">Phone</h2>
          <p className="text-[16px]">Mobile: +(84) 546-6789 </p>
          <p className="text-[16px]">Hotline: +(84) 456-6789</p>
        </div>
      </div>
      <div className="flex items-start">
        <img src={icon3} alt="" className="w-[23px] h-[23px] mr-5 mt-2" />
        <div className="w-[150px] h-[72px]">
          <h2 className="text-[24px] font-semibold">Working Time</h2>
          <p className="text-[16px]">Monday-Friday: 9:00 - 22:00</p>
          <p className="text-[16px]"> Saturday-Sunday: 9:00 - 21:00</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
