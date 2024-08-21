import React, { useState, useEffect } from "react";
import * as S from "../styles/BankSearchSection.styles.js";
import kbLogo from "../assets/logos/kb.png";
import nhLogo from "../assets/logos/nh.png";
import shLogo from "../assets/logos/sh.png";
import wooriLogo from "../assets/logos/woori.png";
import hanaLogo from "../assets/logos/hana.png";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

const logoMap = {
  kb: kbLogo,
  nh: nhLogo,
  sh: shLogo,
  woori: wooriLogo,
  hana: hanaLogo,
};

const BankSearchSection = ({ bank }) => {
  const [bookmarkedItems, setBookmarkedItems] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const logoPath = logoMap[bank.logokey];

  const userCode = window.sessionStorage.getItem("userCode");

  useEffect(() => {
    const fetchScrapList = async () => {
      try {
        const response = await fetch(
          `http://43.202.58.11:8080/api/users/${userCode}/scraps`
        );
        const result = await response.json();
        if (result.data) {
          const bookmarkState = {};
          result.data.forEach((item) => {
            bookmarkState[item.productCode] = true;
          });
          setBookmarkedItems(bookmarkState);
        }
      } catch (error) {
        console.error("Error fetching scrap list:", error);
      }
    };

    fetchScrapList();
  }, [userCode]);

  const handleBookmarkToggle = (productCode) => {
    setBookmarkedItems((prevBookmarks) => {
      const isBookmarked = prevBookmarks[productCode];
      setPopupMessage(
        isBookmarked
          ? "MY 스크랩에서 삭제되었습니다."
          : "MY 스크랩에 저장되었습니다."
      );

      return {
        ...prevBookmarks,
        [productCode]: !isBookmarked,
      };
    });
    setShowPopup(true);
  };

  const handleConfirmClick = () => {
    setShowPopup(false);
  };

  const { data } = bank.products;

  return (
    <S.BankSectionContainer>
      {showPopup && (
        <S.Popup>
          <p>{popupMessage}</p>
          <S.ConfirmButton onClick={handleConfirmClick}>확인</S.ConfirmButton>
        </S.Popup>
      )}
      <S.BankLogo src={logoPath} alt={`${bank.name} 로고`} />
      <S.ProductCategory>
        {Object.keys(data).map((category, index) => (
          <div key={index}>
            <S.CategoryTitle>{category}</S.CategoryTitle>
            <S.CategoryColumn>
              {data[category].map((product, idx) => (
                <React.Fragment key={idx}>
                  <S.ProductItem>
                    <S.ProductName>
                      <S.BookmarkIcon
                        onClick={() =>
                          handleBookmarkToggle(product.productCode)
                        }
                      >
                        {bookmarkedItems[product.productCode] ? (
                          <FaBookmark />
                        ) : (
                          <FaRegBookmark />
                        )}
                      </S.BookmarkIcon>
                      {product.productName}
                    </S.ProductName>
                    <S.ProductDescription>
                      {product.productFeat.map((feat, i) => (
                        <li key={i}>{feat}</li>
                      ))}
                    </S.ProductDescription>
                    <S.BuyButton to="/detailed">자세히 보기</S.BuyButton>
                  </S.ProductItem>
                  {idx < data[category].length - 1 && <S.ProductSeparator />}
                </React.Fragment>
              ))}
            </S.CategoryColumn>
          </div>
        ))}
      </S.ProductCategory>
    </S.BankSectionContainer>
  );
};

export default BankSearchSection;
