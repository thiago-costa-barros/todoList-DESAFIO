import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "../pages/Home";

export const RoutesComponent = () => {

    const navigate = useNavigate()
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}