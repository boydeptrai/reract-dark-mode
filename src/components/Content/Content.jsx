import { FaUser } from "react-icons/fa";
import { animated, useSpring } from "@react-spring/web";
import { BsFillCreditCardFill } from "react-icons/bs";
import CheckIconPoint from "../../assets/mobile/checkpoint.svg";
const Content = () => {
  const customer = useSpring({ customers: 10073, from: { customers: 0 } });
  const card = useSpring({ cards: 10073, from: { cards: 0 } });
  return (
    <section className="md:flex md:flex-row">
      <div className="ml-[70px] mr-[54px] flex flex-col items-center  text-bold  bg-gradient-to-b shadow-md from-white/40 rounded-[24px] to-transparent md:w-[20%]">
        <div className="mt-16 gap-8 flex items-start">
          <FaUser size={"22px"} className="mt-[12px]" />
          <div className="text-26 ">
            <animated.div>
              {customer.customers.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold mb-[36px] md:text-16">Customers</p>
          </div>
        </div>
        <div className="gap-8 flex items-start mb-16">
          <BsFillCreditCardFill size={"22px"} className="mt-[12px]" />
          <div className="text-26">
            <animated.div>
              {card.cards.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold md:text-16">Card Issued</p>
          </div>
        </div>
      </div>
      <div className="text-13 flex flex-col w-[100%] font-semibold mt-[90px] md:mt-0 md:w-[30%] md:text-16 md:ml-[20%]">
        <div className="check-content ">
          <img src={CheckIconPoint} alt="icon check" />
          <p>Card reports send to your phone every weeks</p>
        </div>
        <div className="check-content">
          <img src={CheckIconPoint} alt="icon check" />
          <p>No external fees</p>
        </div>
        <div className="check-content">
          <img src={CheckIconPoint} alt="icon check" />
          <p>Set spanding limits and restrictions</p>
        </div>
      </div>
    </section>
  );
};

export default Content;
