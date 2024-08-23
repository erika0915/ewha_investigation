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
} from "../styles/Admin.styles"
import { useNavigate } from 'react-router-dom';

export const Admin = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]); // 상품 목록을 저장할 상태 추가

  useEffect(() => {
    const role = window.sessionStorage.getItem("role");
    const token = window.sessionStorage.getItem("token");

    if (role !== "admin") {
      alert("관리자만 접근할 수 있는 페이지입니다.");
      navigate('/'); // 관리자가 아니면 홈 페이지로 이동
    } else {
      // 토큰을 이용하여 상품 목록을 API에서 불러옴
      fetch("http://43.202.58.11:8080/api/products", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`, // Authorization 헤더에 토큰 추가
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setProducts(data.data); // 상품 데이터를 상태에 저장
        })
        .catch((error) => {
          console.error("상품 목록을 가져오는 중 오류 발생:", error);
        });
    }
  }, [navigate]);

  const handleLogoClick = () => {
    navigate('/'); // 로고 클릭 시 메인 페이지로 이동
  };

  const handleSectionTitleClick = () => {
    navigate('/'); // MY PAGE 클릭 시 메인 페이지로 이동
  };

  const handleEditClick = () => {
    navigate('/productmanagement'); // 수정 버튼 클릭 시 상품 관리 페이지로 이동
  };

  return (
    <Container>
      <Sidebar>
        <Logo src={`${process.env.PUBLIC_URL}/logo.dark.png`} 
        alt="Ewha Logo" onClick={handleLogoClick} />  {/* src 경로 확인 */}
        <SectionTitle onClick={handleSectionTitleClick} style={{ cursor: 'pointer' }}>
          MY PAGE
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
            {[...Array(10)].map((_, index) => (
              <tr key={`product-${index}`}>  {/* key 값에 고유한 값 사용 */}
                <Td>{index + 1}</Td>
                <Td>상품명</Td>
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


    </Container>
  );
};

