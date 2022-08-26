import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar";
import Perksprogram from "./Components/Perksprogram";
import Consultant from "./Components/Consultant";
import UpperNavbar from "./Components/UpperNavbar";

function App() {
  return (
    <div className="App">
      <UpperNavbar />
      <Navbar />
      <Consultant />
      {/* <LandingPage /> */}
      <Footer />
    </div>
  );
}

export default App;
