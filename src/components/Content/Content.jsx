import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import CheckIconPoint from "../../assets/mobile/checkpoint.svg"
const Content = () => {
  return (
    <section className="">
      <div className="ml-[70px] mr-[54px] flex flex-col items-center  text-bold  bg-gradient-to-b shadow-md from-white/40 rounded-[24px] to-transparent">
        <div className="mt-16 gap-8 flex items-start">
          <FaUser size={"22px"} className="mt-[12px]" />
          <p className="text-26 ">
            1007
            <p className="text-13 font-semibold mb-[36px]">Customers</p>
          </p>
        </div>
        <div className="gap-8 flex items-start mb-16">
          <BsFillCreditCardFill size={"22px"} className="mt-[12px]" />
          <p className="text-26">
            1007
            <p className="text-13 font-semibold">Card Issued</p>
          </p>
        </div>
      </div>
      <div className="text-13 flex flex-col w-[100%] font-semibold mt-[90px]">
          <p className="check-content">
             <img src={CheckIconPoint} alt="icon check" />
             <p>Card reports send to your phone every weeks</p>
          </p>
          <p className="check-content">
             <img src={CheckIconPoint} alt="icon check" />
             <p>No external fees</p>
          </p>
          <p className="check-content">
             <img src={CheckIconPoint} alt="icon check" />
             <p>Set spanding limits and restrictions</p>
          </p>
      </div>
    </section>
  );
};

export default Content;
