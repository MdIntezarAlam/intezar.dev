import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home, } from "./component/Container";
import Header from "./component/Reusbale/Header";
import Footer from "./component/Reusbale/Footer";
import Particl from "./component/Patricles/Particle";

function App () {
  return (
    <div className="app bg-dark bg-gradient">
      <Header />
      <Home />
      <Footer />
      <Particl />
    </div>
  );
}

export default App;
