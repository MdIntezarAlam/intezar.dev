// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";
// import { Home, About, Skills, Portfolio } from "./component/Container";
// import Header from "./component/Reusbale/Header";
// import Footer from "./component/Reusbale/Footer";

// function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./component/Container";
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
