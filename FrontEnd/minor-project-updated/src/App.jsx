import DoctorList from "./pages/Department/DoctorList";
import HomePage from "./pages/HomePage/HomePage";
import UserLogin from "./pages/LoginPage/UserLogin";
import UserRegistration from "./pages/Registration/UserRegistration";
import AdminLogin from "./pages/AdminLoginPage/Login"
import AdminRegistration from "./pages/AdminLoginPage/Registration"
import AdminNavbar from "./pages/AdminPanel/AdminNavbar";
import Patients from "./pages/AdminPanel/Patients";
import Doctors from "./pages/AdminPanel/Doctors";
import DoctorRegistration from "./pages/DoctorRegistration/DoctorRegistration";
import DoctorLogin from "./pages/DoctorLogin/DoctorLogin";
import Footer from "./components/Footer/Footer";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/UserLogin" element={<UserLogin/>}/>
        <Route path="/UserRegistration" element={<UserRegistration/>}/>
        <Route path="/DoctorList" element={<DoctorList/>}/>
        <Route path="/DoctorRegistration" element={<DoctorRegistration/>}/>
        <Route path="/DoctorLogin" element={<DoctorLogin/>}/>
        <Route path="/AdminLogin" element={<AdminLogin/>}/>
        <Route path="/AdminRegistration" element={<AdminRegistration/>}/>
        <Route path="/AdminNavbar" element={<AdminNavbar/>}/>
        <Route path="/Patients" element={<Patients/>}/>
        <Route path="/Doctors" element={<Doctors/>}/>
        <Route path="/Footer" element={<Footer/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;




