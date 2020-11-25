
import Navbar from "./components/Navbar/index"
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleLineGridList from "./components/Gridlist";
import Home from "./pages/Home";
// import { Navbar } from "react-bootstrap";
import Guitars from "./pages/Guitars";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Artists from "./pages/Artists"


function App() {
  return (
    <>
      {/* <MyNavbar/>
   <Home/> */}
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/guitars" component={Guitars} />
        <Route exact path="/artists" component={Artists} />
      </Router>

    </>
  );
}

export default App;
