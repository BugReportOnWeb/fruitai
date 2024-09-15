import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import FAQPage from "./pages/FAQPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <div className={`
            ${(
                /* Used for gradient background on certain pages */
                path === '/' ||
                path === '/faq' ||
                path === '/about'
            ) && 'bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] text-white'}
            min-h-screen p-5
        `}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path='/faq' element={<FAQPage />} />
                <Route path='/about' element={<AboutPage />} />
            </Routes>
        </div>
    )
}

export default App;
