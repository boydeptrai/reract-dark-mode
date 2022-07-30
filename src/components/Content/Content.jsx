import {FaUser} from "react-icons/fa"
const Content = () => {
    return ( 
        <section className="">
           <div className="ml-[70px] mr-[54px] text-bold bg-purple-500 bg-gradient-to-b shadow-md from-white/40 to-transparent">
               <div className="mt-16 flex items-center">
                  <FaUser size={"22px"} className=""/>
                  <p className="text-26">
                      1007
                  </p>
               </div>
           </div>
        </section>
     );
}
 
export default Content;