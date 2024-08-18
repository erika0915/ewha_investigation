import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Table, Th, Td, Button } from './Admin.styled';

const Admin = () => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/product-management');
  };

  return (
    <Container>
      <h1>상품 목록</h1>
      <Table>
        <thead>
          <tr>
            <Th>번호</Th>
            <Th>상품명</Th>
            <Th></Th>
          </tr>
        </thead>
        <tbody>
          {[...Array(10)].map((_, index) => (
            <tr key={index}>
              <Td>{index + 1}</Td>
              <Td>상품명</Td>
              <Td>
                <Button onClick={handleEditClick}>수정</Button>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Admin;
