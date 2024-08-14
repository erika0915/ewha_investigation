import React from 'react';
import {
  Container,
  Form,
  Input,
  Textarea,
  Select,
  Button,
} from './ProductManagement.styled';

const ProductManagement = () => {
  return (
    <Container>
      <h1>상품 관리</h1>
      <Form>
        <Input placeholder="상품명" />
        <Select>
          <option value="예금">예금</option>
          <option value="적금">적금</option>
        </Select>
        <Select>
          <option value="KB국민은행">KB국민은행</option>
          <option value="신한은행">신한은행</option>
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
