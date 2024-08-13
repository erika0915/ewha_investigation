import React from 'react';
import {
  AdminPageContainer,
  Sidebar,
  Content,
  SectionTitle,
  UserInfo,
  UserInfoRow,
  UserInfoLabel,
  UserInfoValue,
  UserList,
  UserItem,
  UserItemName,
  UserItemEmail,
  ScrapSection,
  ScrapItems,
  ScrapItem,
  ScrapItemIcon,
  ScrapItemText,
  Button,
} from './AdminPage.styled';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/main'); 
  };

  // 예시 데이터: 여러 사용자의 정보와 스크랩된 상품 리스트
  const users = [
    {
      name: '김이화',
      email: 'myname@ewha.ac.kr',
      id: 'makemoney',
      scrapItems: [
        { bank: '은행명1', product: '상품명1', url: 'https://example.com/product1' },
        { bank: '은행명2', product: '상품명2', url: 'https://example.com/product2' },
      ],
    },
    {
      name: '이화연',
      email: 'hername@ewha.ac.kr',
      id: 'ewhain',
      scrapItems: [
        { bank: '은행명3', product: '상품명3', url: 'https://example.com/product3' },
      ],
    },
    // 추가 사용자 정보 입력 받기
  ];

  const handleUserClick = (userId) => {
    // 사용자 정보 클릭 시 상세 페이지로 이동 (필요시 구현)
    console.log(`User ID: ${userId}`);
  };

  const handleItemClick = (url) => {
    window.open(url, '_blank'); // 상품명 클릭 시 새 탭에서 상품 홈페이지로 이동
  };

  const handleDeleteUser = (userId) => {
    // 사용자 삭제 기능 (필요시 구현)
    console.log(`Delete User ID: ${userId}`);
  };

  return (
    <AdminPageContainer>
      <Sidebar>
        <img src="logo.png" alt="Ewha Logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }} />
        <SectionTitle>ADMIN PAGE</SectionTitle>
      </Sidebar>
      <Content>
        <SectionTitle>사용자 목록</SectionTitle>
        <UserList>
          {users.map((user, index) => (
            <UserItem key={index} onClick={() => handleUserClick(user.id)} style={{ cursor: 'pointer' }}>
              <UserItemName>{user.name}</UserItemName>
              <UserItemEmail>{user.email}</UserItemEmail>
              <Button onClick={() => handleDeleteUser(user.id)} style={{ marginLeft: 'auto' }}>삭제</Button>
            </UserItem>
          ))}
        </UserList>
        <SectionTitle>스크랩 목록</SectionTitle>
        <ScrapSection>
          <ScrapItems>
            {users.map((user) =>
              user.scrapItems.map((item, index) => (
                <ScrapItem key={index} onClick={() => handleItemClick(item.url)} style={{ cursor: 'pointer' }}>
                  <ScrapItemIcon />
                  <ScrapItemText>{user.name} - {item.bank} {item.product}</ScrapItemText>
                </ScrapItem>
              ))
            )}
          </ScrapItems>
        </ScrapSection>
      </Content>
    </AdminPageContainer>
  );
};

export default AdminPage;
