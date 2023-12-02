import styled, { keyframes } from "styled-components";
// float 动画
const float = keyframes` 
    0% {
        transform: translatey(0px);
    }
    50% {
        transform: translatey(-20px);
    }
    100% {
        transform: translatey(0px);
    }
`;
// float 动画
const float2 = keyframes` 
    0% {
        transform: translatey(-20px);
    }
    50% {
        transform: translatey(0px);
    }
    100% {
        transform: translatey(-20px);
    }
`;
interface CardProps {
  img: string;
}
interface MaskPorps {
  background: string;
}
export const HeaderBox = styled.header`
  align-items: center;
  background-color: #fff;
  border-radius: 38px;
  display: flex;
  height: 58px;
  justify-content: center;
  align-items: center;
  min-width: 976px;
  padding: 0 6px;
  position: fixed;
  top: 13px;
  z-index: 26;
  left: 50%;
  transform: translate(-50%);
  overflow: hidden;
  align-items: center;
  .logoname {
    font-size: 20px;
    font-weight: 700;
  }
`;
export const Logo = styled.img`
  height: 70px;
  object-fit: cover;
  width: 70px;
`;
export const NavList = styled.div`
  align-items: flex-end;
  display: flex;
  height: 15px;
  min-width: 478px;
`;
export const Merge = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  font-size: 40px;
  font-weight: 600;
`;
export const NavItem = styled.a`
  text-decoration: none;
  color: black;
  letter-spacing: 0;
  line-height: 10px;
  margin-bottom: -4.5px;
  min-height: 17px;
  white-space: nowrap;
  padding-left: 38px;
  font-size: 12px;
  font-weight: 600;
`;
export const CetrikLogo = styled.img`
  width: 100px;
  margin-left: 35px;
`;
export const HeaderButton = styled.button`
  align-items: center;
  background-color: #158de8;
  border-radius: 24px;
  display: flex;
  height: 48px;
  justify-content: center;
  margin-left: 32px;
  min-width: 160px;
  padding: 11px 35px;
  color: #fff;
  border: none;
  font-weight: 600;
  font-size: 14px;
`;

export const IndexBox = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: auto;
  min-height: 100vh;
`;
export const IndexBox2 = styled.div`
  width: 100vw;
  margin: 0 auto;
  height: auto;
  min-height: 100vh;
  position: relative;
`;
export const Rectangle = styled.div`
  background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 37.75%);
  border-radius: 25px;
  height: 404px;
  width: 1200px;
  margin-top: 80px;
  position: relative;
`;
export const RectangleHeader = styled.div`
  width: 100%;
  height: 40px;
  background-color: rgb(0, 102, 142);
`;
export const Rectangle1 = styled.div`
  background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 37.75%);
  border-radius: 25px;
  height: 444px;
  width: 1200px;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  &:hover {
    z-index: 100;
  }
`;
export const Rectangle2 = styled.div`
  background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 37.75%);
  border-radius: 25px;
  height: 484px;
  width: 1200px;
  position: absolute;
  top: 25vh;
  right: 0;
  overflow: hidden;
  &:hover {
    z-index: 100;
  }
`;
export const Rectangle3 = styled.div`
  background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 37.75%);
  border-radius: 25px;
  height: 404px;
  width: 1200px;
  position: absolute;
  bottom: 0;
  left: 10vw;
  overflow: hidden;
  &:hover {
    z-index: 100;
  }
`;
export const Bc1 = styled.img`
  width: 100%;
  height: 100%;
`;
export const Bc2 = styled.img`
  height: 532px;
  left: 655px;
  object-fit: cover;
  position: absolute;
  top: 89px;
  width: 415px;
  animation: ${float} 3s ease-in-out infinite;
`;
export const Bc3 = styled.img`
  height: 294px;
  left: 23px;
  object-fit: cover;
  position: absolute;
  top: 4px;
  width: 257px;
  animation: ${float2} 3s ease-in-out infinite;
`;
export const H1 = styled.h1`
  font-family: "Poppins", Helvetica;
  font-size: 56px;
  font-weight: 700;
  left: 63px;
  letter-spacing: 0;
  line-height: 54px;
  position: absolute;
  top: 4px;
  white-space: nowrap;
  color: #fff;
`;
export const Birthed = styled.p`
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  left: 63px;
  letter-spacing: 0;
  line-height: 30px;
  position: absolute;
  top: 240px;
  width: 548px;
`;
export const ScrollBox = styled.div`
  align-items: flex-end;
  overflow-x: auto;
  white-space: nowrap;
  gap: 16px;
  justify-content: space-around;
  margin-top: 13px;
  z-index: 25;
  overflow: auto;
`;
export const CardList = styled.div`
  height: 389px;
  display: flex;
`;
export const Card = styled.div<CardProps>`
  border-radius: 20px;
  background: url(${(props) => props.img}) no-repeat;
  background-size: 100%;
  position: relative;
  width: 389px;
  height: 389px;
  display: inline-block;
  margin: 0 10px;
  color: #fff;

  h2 {
    letter-spacing: 0;
    line-height: 26px;
    margin-top: 30px;
    min-height: 38px;
    white-space: nowrap;
    mix-blend-mode: initial;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    text-align: center;
  }
  p {
    letter-spacing: 0;
    text-align: center;
    line-height: 23px;
    margin-top: 6px;
    min-height: 25px;
    white-space: nowrap;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    mix-blend-mode: initial;
    white-space: pre-line;
  }
`;
export const IlluminatedButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
export const IlluminatedButton = styled.button`
  background-color: #158de8;
  align-items: center;
  border-radius: 11px;
  display: flex;
  height: 48px;
  justify-content: center;
  min-width: 149px;
  padding: 10.5px 27px;
  transition: all 0.5s;
  border: none;
  color: #fff;
  font-weight: 700;
  margin: 50px auto 0;
  &:hover {
    box-shadow: 0 0 40px #158de8, 0 0 70px #158de8, 0 0 90px #158de8;
  }
`;
export const Value1 = styled.div`
  width: 1197px;
  height: 470px;
  position: relative;
  background-image: linear-gradient(90deg, #000000 0%, #158de8 100%);
  border-radius: 20px;
`;
export const Bc4 = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`;
export const ValueBox = styled.div`
  position: absolute;
  left: 60px;
  bottom: 50px;
  width: 477px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h2 {
    letter-spacing: 0;
    line-height: 30px;
    margin-top: 6px;
    min-height: 45px;
    white-space: nowrap;
    color: #fff;
    font-size: 30px;
    font-style: normal;
  }
  p {
    color: #fff;
    line-height: 30px;
  }
`;
export const ValueFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;
export const ValueItem = styled.div`
  background: linear-gradient(1.12deg, #000000 11.13%, rgba(0, 0, 0, 0) 79.47%);
  background-color: #158de8;
  border-radius: 25px;
  height: 610px;
  width: 593px;
  position: relative;
`;
export const Bc5 = styled.img`
  height: 329px;
  width: 319px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;
export const Bc6 = styled.img`
  height: 426px;
  position: absolute;
  width: 467px;
  top: -100px;
  left: 170px;
  bottom: 0;
  right: 0;
  margin: auto;
`;
export const Title = styled.h2`
  letter-spacing: 0;
  line-height: 40px;
  margin-left: 4px;
  margin-top: 39px;
  min-height: 58px;
  min-width: 254px;
  white-space: nowrap;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
`;
export const TokenomicsBox = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 15px;
`;
export const TokenomicsItem = styled.div`
  align-items: flex-start;
  background-color: #f0f0f0;
  border-radius: 41px;
  display: flex;
  flex-direction: column;
  gap: -4px;
  min-height: 82px;
  padding: 10px 34px;
  width: 388px;
  box-sizing: border-box;
  justify-content: space-around;
  position: relative;
  .title {
    font-size: 12px;
  }
  .value {
    color: #158de8;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
  }
  .percentage {
    color: #00344c;
    font-size: 0.8rem;
    position: absolute;
    right: 50px;
    bottom: 20px;
  }
`;

export const TokenomicsBox2 = styled.div`
  margin-top: 15px;
  height: 270px;
  position: relative;
  width: 1200px;
`;
export const TokenomicsRectangle = styled.div`
  background-color: #f0f0f0;
  border-radius: 41px;
  height: 270px;
  left: 0;
  position: absolute;
  top: 0;
  width: 805px;
  z-index: 3;
  h3 {
    color: #158de8;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 20px;
    left: 57px;
    letter-spacing: 0;
    line-height: 20px;
    position: absolute;
    top: 45px;
    white-space: nowrap;
  }
  p {
    color: #00344c;
    font-size: 13px;
    font-weight: 400;
    height: 143px;
    left: 57px;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    top: 86px;
    width: 621px;
  }
`;
export const TokenomicsRectangle2 = styled.div`
  align-items: flex-end;
  background-color: #158de8;
  border-radius: 41px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  right: 0;
  min-height: 270px;
  position: absolute;
  top: 0;
  width: 793px;
  transition: all 0.3s ease-in-out, width 0.3s ease-in-out,
    left 0.3s ease-in-out;
  z-index: 2;
  color: #fff;
  padding: 30px;
  box-sizing: border-box;
  &:hover {
    background-color: #000;
    width: 387px;
    h3 {
      color: #00f;
    }
  }
  div {
    margin-right: 80px;
    display: flex;
    align-items: center;
    width: 220px;
  }

  h3 {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    transition: all 0.3s ease-in-out, width 0.3s ease-in-out,
      left 0.3s ease-in-out;
  }
  p {
    width: 174px;
    font-size: 13px;
  }
`;
export const Mask = styled.div<MaskPorps>`
  background: url(${(props) => props.background});
  background-position: 50% 50%;
  background-size: cover;
  height: 182px;
  margin-top: 47px;
  position: relative;
  width: 1200px;
  overflow: hidden;
  color: #fff;
  .img1 {
    height: 182px;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 1200px;
  }
  .img2 {
    position: relative;
    left: 13px;
    top: 12px;
    /* width: 200px; */
    transition: transform 0.2s ease-in-out;
    &:hover {
      /* 往上移动 */
      transform: translateY(-10px);
    }
  }
  .Mask1text {
    left: 247px;
    letter-spacing: 0;
    line-height: 40px;
    position: absolute;
    top: 53px;
    white-space: nowrap;
    font-size: 40px;
  }
  .Mask1text2 {
    left: 247px;
    letter-spacing: 0;
    line-height: 17px;
    top: 110px;
    white-space: nowrap;
    font-size: 20px;
  }
  .Masktext {
    position: absolute;
    font-style: normal;
    font-weight: 700;
    color: #fff;
  }
  .Mask2text {
    left: 327px;
    letter-spacing: 0;
    line-height: 40px;
    top: 53px;
    white-space: nowrap;
    font-size: 40px;
  }
  .Mask2text2 {
    left: 327px;
    letter-spacing: 0;
    line-height: 17px;
    top: 110px;
    white-space: nowrap;
    font-size: 20px;
  }
  .iconBox {
    position: absolute;
    display: flex;
    top: 37%;
    right: 130px;
    img {
      width: 46px;
      height: 46px;
      border-radius: 50%;
    }
    a {
      color: #fff;
      text-decoration: none;
      font-size: 12px;
      margin-left: 20px;
    }
    p {
      text-align: center;
    }
  }
`;
export const BTN = styled.button`
  display: flex;
  height: 48px;
  left: 949px;
  position: absolute;
  top: 67px;
  width: 185px;
  align-items: center;
  background-color: #fff;
  border-radius: 24px;
  display: flex;
  flex: 1;
  min-width: 185px;
  padding: 11px 19px;
  font-size: 14px;
  color: #000;
  font-weight: 700;
`;
export const QAitemBox = styled.div`
  background-color: #f0f0f0;
  border-radius: 25px;
  display: flex;
  min-height: 77px;
  flex-direction: column;
  width: 1200px;
  padding: 33px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  height: auto;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      height: 11.79px;
      width: 17.93px;
      transition: all 0.5s ease-in-out;
    }
  }
  h3 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    color: #158de8;
  }
  p {
    width: 400px;
    color: #00344c;
    font-weight: 700;
    padding-top: 15px;
    line-height: 21px;
    font-size: 12px;
  }
  .rotate-180 {
    transform: rotate(180deg);
  }
`;

export const FooterBox = styled.footer`
  display: flex;
  height: 308px;
  width: 1200px;
  margin-top: 71px;

  padding: 33.1px 0;
  box-sizing: border-box;
  justify-content: space-evenly;
`;
export const FooterLeft = styled.div`
  width: 346px;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .logoname {
    font-size: 20px;
    font-weight: 700;
  }
`;
export const FooterLogo = styled.img`
  width: 60px;
  height: 60px;
`;
export const FooterIconBox = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
`;

export const FooterIcon = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
  margin-right: 20px;
`;
export const FooterCenter = styled.div``;
export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    color: #158de8;
  }
  a {
    color: #000;
    font-size: 14px;
    margin: 20px 0;
    display: block;
  }
  .hui {
    width: 400px;
    color: #c6c6c6;
    font-size: 9px;
  }
`;
export const Image1 = styled.img`
  width: 1200px;
`;
