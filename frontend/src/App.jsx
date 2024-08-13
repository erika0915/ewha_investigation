import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import DepositPage from "./pages/ProductPage/DepositPage";
import SavingPage from "./pages/ProductPage/SavingPage";
import LoanPage from "./pages/ProductPage/LoanPage";
import CheckCardPage from "./pages/ProductPage/CheckCardPage";
import { GlobalStyle } from "./pages/ProductPage/styles";
import DetailedPage from "./pages/DetailedPage/DetailedPage";
import MyPage from "./pages/MyPage/MyPage";
import Main from "./pages/Main/Main";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/deposit" element={<DepositPage />} />
        <Route path="/saving" element={<SavingPage />} />
        <Route path="/loan" element={<LoanPage />} />
        <Route path="/checkcard" element={<CheckCardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
