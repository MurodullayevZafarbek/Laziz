import { Routes, Route } from "react-router-dom"
import About from "./Components/About"
import Admin from "./Components/Admin"
function Router() {

   return (
      <Routes>
         <Route path="/" element={<About/>} />        
         <Route path="/admin" element={<Admin />} />
         <Route path="*" element={<Admin/>} />
      </Routes>
      )
}

export default Router
