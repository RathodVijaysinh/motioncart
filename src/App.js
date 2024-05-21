import "./App.css";
import Navabar from "./components/Navabar";
import Homepage from "./components/Homepage";
import Reviewspage from "./components/Reviewspage";
import Selectionpage from "./components/Selectionpage"
import Browsepage from "./components/Browsepage";
import Footer from "./components/Footer";
import Pluginlast from "./components/Pluginlast";
function App() {
  
  return (
   
    <div className="w-full h-full bg-[#0D051F]">
     <Navabar/>
     <Homepage/>
     <Reviewspage/>
     <Selectionpage/>
     <Browsepage/>
     <Pluginlast/>
     <Footer/>
    </div>
  );
}

export default App;
