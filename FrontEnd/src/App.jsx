
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import Accueil from "./pages/Accueil";
import User from "./pages/User";
import Editname from "./pages/Editname";


const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/User" element={<User />} />
      <Route path="/Editname" element={<Editname />} />
     
      </Routes>
      
    </BrowserRouter>
    
  )
 
}

export default App