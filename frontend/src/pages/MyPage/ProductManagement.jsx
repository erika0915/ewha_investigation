import React from 'react';
import {
  Container,
  Sidebar,
  Logo,
  SectionTitle,
  Form,
  Input,
  Textarea,
  Select,
  Button,
} from './ProductManagement.styled';
import { useNavigate } from 'react-router-dom';

const ProductManagement = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/main'); // 로고 클릭 시 메인 페이지로 이동
  };

  const handleSectionTitleClick = () => {
    navigate('/main'); // MY PAGE 클릭 시 메인 페이지로 이동
  };

  return (
    <Container>
      <Sidebar>
        <Logo src="logo.png" alt="Ewha Logo" onClick={handleLogoClick} />
        <SectionTitle onClick={handleSectionTitleClick} style={{ cursor: 'pointer' }}>
          Admin
        </SectionTitle>
      </Sidebar>
      <h1>상품 관리</h1>
      <Form>
        <Input placeholder="상품명" />
        <Select>
          <option value="예금">예금</option>
          <option value="적금">적금</option>
          <option value="대출">대출</option>
          <option value="체크카드">체크카드</option>
        </Select>
        <Select>
          <option value="KB국민은행">KB국민은행</option>
          <option value="NH농협은행">NH농협은행</option>
          <option value="신한은행">신한은행</option>
          <option value="우리은행">우리은행</option>
          <option value="하나은행">하나은행</option>
        </Select>
        <Input placeholder="가입 금액" />
        <Input placeholder="가입 기간" />
        <Input placeholder="상품 링크" />
        <Textarea placeholder="상품 혜택" rows="4" />
        <Textarea placeholder="상품 특징" rows="2" />
        <Textarea placeholder="상세 설명" rows="6" />
        <Button type="submit">등록</Button>
      </Form>
    </Container>
  );
};

export default ProductManagement;
