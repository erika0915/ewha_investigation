import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPage from "./pages/MyPage/Mypage";
import MainPage from "./pages/MainPage/MainPage";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import DepositPage from "./pages/ProductPage/DepositPage";
import SavingPage from "./pages/ProductPage/SavingPage";
import LoanPage from "./pages/ProductPage/LoanPage";
import CheckCardPage from "./pages/ProductPage/CheckCardPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mypage" element={<MyPage />} /></Route>
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/deposit" element={<DepositPage />} />
        <Route path="/saving" element={<SavingPage />} />
        <Route path="/loan" element={<LoanPage />} />
        <Route path="/checkcard" element={<CheckCardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
