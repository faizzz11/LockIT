import "./App.css";
import Navbar from "./Components/Navbar";
import Manager from "./Components/Manager";
import Footer from "./Components/Footer";

function App() {

  return (
    <>
      <Navbar />
      <div className="w-full min-h-[80vh] [background:radial-gradient(125%_125%_at_50%_10%,#1a1a1a_40%,#63e_100%)]">
        <div className="container mx-auto mb-20">
          <Manager />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
