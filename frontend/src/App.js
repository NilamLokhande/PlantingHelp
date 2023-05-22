import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Signin from "./pages/user/Signin";
import Signup from "./pages/user/Signup";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import UserRoutes from "./Routes/userRoutes";
import AdminRoute from "./Routes/adminRoute";
import UserRequest from "./pages/admin/userRequest";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home";
import Ngo from "./pages/ngo";
import NgoDetails from "./pages/ngo/ngoDetails";
import NgoTrees from "./pages/ngo/ngoTrees";

function App() {
  const type = localStorage.getItem("type");
  return (
    <div className="App">
      <ToastContainer className="toastsContainer" autoClose={1000} />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
            <Route exact path="/admin-home" element={<UserRequest />} />
              <Route path="/home" element={<Home />} />
              <Route path="/ngo" element={<Ngo />} />
              <Route path="/ngo/details" element={<NgoDetails />} />
              <Route path="/ngo/details/trees" element={<NgoTrees />} />
        </Routes>
        <div className="footer bg-dark mt-3 text-white p-3">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
