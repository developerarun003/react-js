import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "../component/Home";
import Login from "../component/Login";
import Product from "../component/Product";
import Navbar from "../component/Navbar";
import About from "../component/About";
import AddToCart from "../component/AddToCart";

function NestedRouting(){
    return <BrowserRouter>
        <Routes>
            <Route path="/navbar" element={<Navbar/>}> 
                <Route path="/navbar/about" element ={<About/>}/>
                <Route path="/navbar/addtocart" element ={<AddToCart/>}/>
                
             </Route>


           
        
        </Routes>
            
    </BrowserRouter>

}

export default NestedRouting;