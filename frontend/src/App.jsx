// 최상단에 위치해야 하는 import 문들
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from './pages/MyPage/Admin';
import ProductManagement from './pages/MyPage/ProductManagement';
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import DepositPage from "./pages/ProductPage/DepositPage";
import SavingPage from "./pages/ProductPage/SavingPage";
import LoanPage from "./pages/ProductPage/LoanPage";
import CheckCardPage from "./pages/ProductPage/CheckCardPage";
import DetailedPage from "./pages/DetailedPage/DetailedPage";
import MyInfo from "./pages/MyPage/MyInfo"; 
import Main from "./pages/Main/Main";

// App 컴포넌트 정의
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="/admin" element={<Admin />} />
        <Route path="/product-management" element={<ProductManagement />} />
        <Route path="/myinfo" element={<MyInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/deposit" element={<DepositPage />} />
        <Route path="/saving" element={<SavingPage />} />
        <Route path="/loan" element={<LoanPage />} />
        <Route path="/checkcard" element={<CheckCardPage />} />
        <Route path="/detailedpage" element={<DetailedPage />} />
      </Routes>
    </Router>
  );
};

// 파일의 마지막에 export 문을 위치시킴
export default App;
