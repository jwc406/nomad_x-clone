import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    display: flex;
    justify-content: center;
    font-family: 'Pretendard', sans-serif;
    background: var(--bg-Color);
  }
  /* 변수 */
  :root {
    // 폰트 사이즈
    --title-Size: 32px;
    --main-Size: 20px;
    --basic-Size: 16px;
    --lite-Size: 14px;
    --noti-Size: 12px;

    // 컬러칩
    --main-Color: #81282C;
    --main-Border_lite: #F2E9EA;
    --main-Border_medium: #A7696B;
    --bg-Color: #F8F8E0;
    --box-Color: #FFFFF5;
    --dark-Color: #1C1C1C;
    --dark-Border: #DCDCDC;
    --light-Color: #FFFFFF;

    // hover
    --main_hover: #6C2326;
    --social_hover: #EEEEEE;
    --box_hover: #FFF8C6;
    --dark_hover:#3B3B3B;
  }

  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: normal;
    src: url("src\assets\fonts\Pretendard-Medium.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: bold;
    src: url("src\assets\fonts\Pretendard-Bold.woff") format("woff");
  }
`;
