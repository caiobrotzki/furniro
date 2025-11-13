import icon from "../../../assets/Vector.svg";
import icon2 from "../../../assets/Vector (1).svg";
import icon3 from "../../../assets/Vector (2).svg";

function Content() {
  return (
    <div className="flex flex-col space-y-8 md:space-y-20 px-4 md:px-0">
      <div className="flex items-start gap-4 md:gap-5">
        <img src={icon} alt="" className="w-[20px] md:w-[23px] h-[20px] md:h-[23px] mt-1 md:mt-2 flex-shrink-0" />
        <div className="flex-1 md:w-[180px]">
          <h2 className="text-lg md:text-[24px] font-semibold">Address</h2>
          <p className="text-sm md:text-base">
            236 5th SE Avenue, New York NY10000, United States
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4 md:gap-5">
        <img src={icon2} alt="" className="w-[20px] md:w-[23px] h-[20px] md:h-[23px] mt-1 md:mt-2 flex-shrink-0" />
        <div className="flex-1 md:w-[212px]">
          <h2 className="text-lg md:text-[24px] font-semibold">Phone</h2>
          <p className="text-sm md:text-base">Mobile: +(84) 546-6789 </p>
          <p className="text-sm md:text-base">Hotline: +(84) 456-6789</p>
        </div>
      </div>
      <div className="flex items-start gap-4 md:gap-5">
        <img src={icon3} alt="" className="w-[20px] md:w-[23px] h-[20px] md:h-[23px] mt-1 md:mt-2 flex-shrink-0" />
        <div className="flex-1 md:w-[150px]">
          <h2 className="text-lg md:text-[24px] font-semibold">Working Time</h2>
          <p className="text-sm md:text-base">Monday-Friday: 9:00 - 22:00</p>
          <p className="text-sm md:text-base">Saturday-Sunday: 9:00 - 21:00</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
