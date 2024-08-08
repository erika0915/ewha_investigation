import {
  MyPageContainer,
  Logo,
  Sidebar,
  Content,
  SectionTitle,
  UserInfo,
  UserInfoRow,
  UserInfoLabel,
  UserInfoValue,
  ScrapSection,
  ScrapItems,
  ScrapItem,
  ScrapItemIcon,
  ScrapItemText,
} from './styled.js';

const MyPage = () => {
  return (
    <MyPageContainer>
      <Sidebar>
        <img src="logo.png" alt="Ewha Logo" />
        <SectionTitle>MY PAGE</SectionTitle>
      </Sidebar>
      <Content>
        <SectionTitle>내 정보</SectionTitle>
        <UserInfo>
          <UserInfoRow>
            <UserInfoLabel>NAME</UserInfoLabel>
            <UserInfoValue>김이화</UserInfoValue>
          </UserInfoRow>
          <UserInfoRow>
            <UserInfoLabel>e-mail</UserInfoLabel>
            <UserInfoValue>myname@ewha.ac.kr</UserInfoValue>
          </UserInfoRow>
          <UserInfoRow>
            <UserInfoLabel>ID</UserInfoLabel>
            <UserInfoValue>makemoney</UserInfoValue>
          </UserInfoRow>
        </UserInfo>
        <SectionTitle>MY 스크랩</SectionTitle>
        <ScrapSection>
          <ScrapItems>
            <ScrapItem>
              <ScrapItemIcon />
              <ScrapItemText>은행명 상품명</ScrapItemText>
            </ScrapItem>
            <ScrapItem>
              <ScrapItemIcon />
              <ScrapItemText>은행명 상품명</ScrapItemText>
            </ScrapItem>
            <ScrapItem>
              <ScrapItemIcon />
              <ScrapItemText>은행명 상품명</ScrapItemText>
            </ScrapItem>
            <ScrapItem>
              <ScrapItemIcon />
              <ScrapItemText>은행명 상품명</ScrapItemText>
            </ScrapItem>
          </ScrapItems>
        </ScrapSection>
      </Content>
    </MyPageContainer>
  );
};

export default MyPage;


