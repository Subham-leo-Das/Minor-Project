import DoctorList from "./pages/Department/DoctorList";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Registration" element={<Registration/>}/>
        <Route path="/DoctorList" element={<DoctorList/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;




