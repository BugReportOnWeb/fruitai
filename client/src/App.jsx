import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import FAQPage from "./pages/FAQPage";

const App = () => {
    const location = useLocation();

    return (
        <div className={`
            h-screen p-5
            ${(location.pathname === '/' || location.pathname === '/faq') && 'bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] text-white'}
        `}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path='/faq' element={<FAQPage />} />
            </Routes>
        </div>
    )
}

export default App;
