import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import Signup from "./Components/LoginSignup/Signup";
import Navbar from "./Components/Navbar";
import UpperNavbar from "./Components/UpperNavbar";

function App() {

  return (
    <div className="App">
      <UpperNavbar />
      <Navbar />
      <LandingPage />
      <Footer />

    </div>
  );
}

export default App;
