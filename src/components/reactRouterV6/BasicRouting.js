import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "../component/Home";
import Login from "../component/Login";
import Product from "../component/Product";


function BasicRouting(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Product" element={<Product/>} />
            
        
        </Routes>
            
    </BrowserRouter>

}

export default BasicRouting;