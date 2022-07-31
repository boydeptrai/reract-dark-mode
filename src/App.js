import { useEffect, useState } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import NavBar from "./components/Navbar/NavBar";
import Slogan from "./components/Slogan/Slogan";

function App() {
  const [windowSize,setWindowSize] = useState({
    width: undefined,
    height: undefined
  });
  const [isMobile,setMobile] = useState(false);

  useEffect(() => {
      const handleSize = () =>{
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
      window.addEventListener("resize",handleSize);
      handleSize();
      window.removeEventListener("resize",handleSize);
  },[]);
  useEffect(() =>{
    if (windowSize.width < 500) {
      setMobile(true);
    } else {
      setMobile(false);
    }

  },[windowSize])
  return (
    <div className="font-sora h-screen overflow-y-auto overflow-x-hidden px-4 py-8 bg-gradient-to-b from-purple-900 to-purple-700 text-white">
      <NavBar isMobile={isMobile}/>
      <Slogan />
      <Content />
    </div>
  );
}

export default App;
