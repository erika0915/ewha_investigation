import styled from 'styled-components';
import { FaBookmark } from 'react-icons/fa';

export const AdminContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const Sidebar = styled.div`
  width: 250px;
  background-color: #186915;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;


export const Logo = styled.img`
  width: 100px;
  cursor: pointer;
`;


export const SectionTitle = styled.h2`
  font-size: 23px;
  margin: 50px 0;
  font-weight: bold;
`;

// 메인 콘텐츠 영역 스타일
export const Content = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  padding: 40px;
`;

// 사용자 정보 목록
export const UserList = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 40px;
  max-height: 300px;
  overflow-y: auto;
`;

// 개별 사용자 아이템 
export const UserItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;


export const UserItemName = styled.div`
  width: 150px;
  font-weight: bold;
  font-family: "Pretendard", sans-serif;
  color: #333;
`;


export const UserItemEmail = styled.div`
  flex: 1;
  color: #666;
  font-family: "Pretendard", sans-serif;
`;

// 버튼 스타일 (예: 삭제 버튼)
export const Button = styled.button`
  background-color: #186915;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #145212;
  }
`;


export const ScrapSection = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;


export const ScrapItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;


export const ScrapItem = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;


export const ScrapItemIcon = styled(FaBookmark)`
  color: #186915;
  margin-right: 10px;
`;


export const ScrapItemText = styled.div`
  font-size: 16px;
  color: #333;
  font-family: "Pretendard", sans-serif;
  font-weight: bold;
`;
