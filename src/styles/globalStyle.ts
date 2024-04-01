import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
  }
  body{
    font-family : 'Pretendard';
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
    --main-Border_medium : #A7696B;
    --bg-Color: #F8F8E0;
    --box-Color: #FFFFF5;
    --base-Color: #1C1C1C;
    --base-Border: #DCDCDC;
    --light-Color: #FFFFFF;
  }

`;