import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";
//import Aboutus from "./components/aboutus/Aboutus"
import Formdonate from "./components/donationpage/Formdonate";
import Aboutuspage from "./pages/aboutuspage/Aboutuspage";
import Shop from "./components/shop/Shop";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import ContactPage from "./pages/Contactuspage/ContactPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/Formdonate" element={<Formdonate/>} />
          <Route path="/Aboutus" element={<Aboutuspage/>} />
          <Route path="/Contact" element={<ContactPage/>} />
          <Route path="/Shop" element={<Shop/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

