import styled from 'styled-components';

export const Container = styled.div`
  display: flex;  /* 사이드바와 폼을 수평으로 배치 */
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
  cursor: pointer; /* 클릭 가능하도록 스타일 추가 */
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex: 1;  /* 남은 공간을 폼이 차지하도록 */
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Select = styled.select`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Button = styled.button`
  background-color: #5fa446;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px; /* 폼의 마지막 요소와 여백 추가 */
`;
