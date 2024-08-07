import React from 'react';
import './MyPage.css';

const MyPage = () => {
  // 더미 데이터 (회원가입 시 기입했던 정보와 스크랩된 상품)
  const userInfo = {
    name: '김이화',
    email: 'ewha@example.com',
    userId: 'ewha123',
  };

  const scrappedItems = [
    { id: 1, name: '상품 1', link: 'https://example.com/product1' },
    { id: 2, name: '상품 2', link: 'https://example.com/product2' },
    { id: 3, name: '상품 3', link: 'https://example.com/product3' },
    { id: 4, name: '상품 4', link: 'https://example.com/product4' },
  ];

  return (
    <div className="my-page">
      <header>
        <img
          src="logo.png"
          alt="EWHA INVESTIGATION"
          className="logo"
          onClick={() => window.location.href = '/'}
        />
      </header>
      <main>
        <section className="user-info">
          <h2>내 정보</h2>
          <p><strong>이름:</strong> {userInfo.name}</p>
          <p><strong>이메일:</strong> {userInfo.email}</p>
          <p><strong>아이디:</strong> {userInfo.userId}</p>
        </section>
        <section className="scrap">
          <h2>내 스크랩</h2>
          <div className="scrap-items">
            {scrappedItems.map(item => (
              <div key={item.id} className="scrap-item">
                <a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyPage;
