import Activities from "./components/Activities";
import Booking from "./components/Booking";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Hero />
      <Activities />
      <Booking />
    </div>
  );
}

export default App;
