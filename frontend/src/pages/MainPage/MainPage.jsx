import './styled.js';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <img src="/logo.png" alt="EWHA Investigation Logo" className="logo" />
        <div className="search-container">
          <input type="text" placeholder="은행 명 입력" className="search-input" />
          <button className="search-button">🔍</button>
        </div>
        <nav className="nav">
          <a href="#deposit">예금</a>
          <a href="#savings">적금</a>
          <a href="#loan">대출</a>
          <a href="#card">체크카드</a>
        </nav>
        <button className="login-button">LOGIN / SIGN UP</button>
      </header>
      <main className="main-content">
        <img src="/Campus.jpg.png" alt="Campus" className="main-image" />
      </main>
    </div>
  );
};

export default App;



