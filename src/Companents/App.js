import { Route, Routes } from "react-router-dom";
import Details from "./Details";
import Basket from "./Basket";
import HomePage from "./HomePage"

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/basket" element={<Basket />}/>
                <Route path="/details" element={<Details />}/>
            </Routes>

            
            
        </div>
    )
}