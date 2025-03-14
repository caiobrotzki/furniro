import IconFilter from "../../../assets/icon-filter.svg";
import IconNav from "../../../assets/icon-nav.svg";
import IconNav2 from "../../../assets/icon-nav2.svg";

function Nav() {
  return (
    <div className="w-full h-[85px] bg-[#F9F1E7] flex justify-between items-center px-4">
      <div className="flex items-center ml-20 space-x-5">
        <img src={IconFilter} alt="" className="w-[19px] h-[16px]" />
        <p className="text-[16px]">Filter</p>
        <img src={IconNav} alt="" className="w-[19px] h-[16px]" />
        <img src={IconNav2} alt="" className="w-[19px] h-[16px]" />
        <div className="border-l border-black h-6 mx-5"></div>{" "}
        <p>Showing 1–16 of 32 results</p>
      </div>
      <div className="flex items-center mr-20 space-x-5  ">
        <p>Show</p>
        <p className="bg-white text-[#9F9F9F] w-[55px] h-[55px] flex justify-center items-center">
          16
        </p>
        <p>Short by</p>
        <p className="bg-white text-[#9F9F9F] w-[188px] h-[55px] flex justify-center items-center">
          Default
        </p>
      </div>
    </div>
  );
}

export default Nav;
