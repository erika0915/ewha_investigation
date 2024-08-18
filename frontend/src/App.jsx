import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Admin from './pages/MyPage/Admin';
import ProductManagement from './pages/MyPage/ProductManagement';
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import DepositPage from "./pages/ProductPage/DepositPage";
import SavingPage from "./pages/ProductPage/SavingPage";
import LoanPage from "./pages/ProductPage/LoanPage";
import CheckCardPage from "./pages/ProductPage/CheckCardPage";
import { GlobalStyle } from "./pages/ProductPage/styles";
import DetailedPage from "./pages/DetailedPage/DetailedPage";
import MyInfo from "./pages/MyPage/MyInfo"; 
import Main from "./pages/Main/Main";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Main</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/product-management">Product Management</Link></li>
          <li><Link to="/myinfo">MyInfo</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/deposit">Deposit</Link></li>
          <li><Link to="/saving">Saving</Link></li>
          <li><Link to="/loan">Loan</Link></li>
          <li><Link to="/checkcard">Check Card</Link></li>
        </ul>
      </nav>
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

export default App;