import React, { useEffect, useState } from 'react';
import {
  Container,
  Sidebar,
  Logo,
  SectionTitle,
  TableContainer,
  Table,
  Th,
  Td,
  Button,
} from "../styles/Admin.styles";
import { useNavigate } from 'react-router-dom';

export const Admin = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]); // 상품 목록 상태 정의
  const [error, setError] = useState(null); // 에러 상태 정의
  const [loading, setLoading] = useState(true); // 로딩 상태 정의

  const handleLogoClick = () => {
    navigate('/'); // 로고 클릭 시 메인 페이지로 이동
  };

  const handleSectionTitleClick = () => {
    navigate('/');
  };

  const handleEditClick = () => {
    navigate('/productmanagement'); // 수정 버튼 클릭 시 상품 관리 페이지로 이동
  };

  useEffect(() => {
    // API 호출 함수 정의
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products/admin/{productType}'); // API 호출 (엔드포인트 확인 필요)
        const result = await response.json();
        
        if (response.ok) {
          setProducts(result.data); // 성공적으로 데이터를 가져오면 products 상태에 저장
        } else {
          setError(result.msg || '상품 목록을 불러오는 중 오류가 발생했습니다.');
        }
      } catch (err) {
        setError('상품 목록을 불러오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false); // 로딩 상태 해제
      }
    };

    fetchProducts();
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  if (loading) {
    return <Container>Loading...</Container>; // 로딩 중일 때 표시할 내용
  }

  if (error) {
    return <Container>Error: {error}</Container>; // 에러 발생 시 표시할 내용
  }

  return (
    <Container>
      <Sidebar>
        <Logo src={`${process.env.PUBLIC_URL}/logo.dark.png`} 
        alt="Ewha Logo" onClick={handleLogoClick} />  {/* src 경로 확인 */}
        <SectionTitle onClick={handleSectionTitleClick} style={{ cursor: 'pointer' }}>
          Admin
        </SectionTitle>
      </Sidebar>
      <TableContainer>
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
            {products.map((product, index) => (
              <tr key={`product-${index}`}>
                <Td>{index + 1}</Td>
                <Td>{product.productName}</Td>
                <Td>
                  <Button onClick={handleEditClick}>수정</Button>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

