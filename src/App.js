// import { useEffect, useState } from "react";
import Sections from "./pages/Sections";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // // Function to update the screen width state
  // const updateScreenWidth = () => {
  //   setScreenWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //   // Add an event listener to track screen width changes
  //   window.addEventListener("resize", updateScreenWidth);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("resize", updateScreenWidth);
  //   };
  // }, []);
  return (
    <ChakraProvider>
      <ToastContainer />
      <div>
        {/* <p>Current Screen Width: {screenWidth}px</p> */}
        <Sections />
      </div>
    </ChakraProvider>
  );
}

export default App;
