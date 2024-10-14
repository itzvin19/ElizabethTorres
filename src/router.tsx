import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./layouts/Navbar"
import Index from "./views/Index"


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Navbar/>}>
                    <Route path='/' element={<Index />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter
