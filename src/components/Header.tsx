import {
  // CetrikLogo,
  HeaderBox,
  HeaderButton,
  Logo,
  NavItem,
  NavList,
} from "@/style";
import logo from "@/assets/img/logo.png";
// import cetrikLogo from "@/assets/img/hd-cetrik.svg";

const navs = [
  {
    text: "About",
    link: "about",
  },
  {
    text: "Tokenomics",
    link: "tokenomics",
  },
  {
    text: "Charity",
    link: "Charity",
  },
  {
    text: "Documents",
    link: "Documents",
  },
  // {
  //   text: "Buy BabyShib Coin",
  //   link: "Swap",
  // },
  {
    text: "Contact",
    link: "Contact",
  },
];
function Header() {
  return (
    <HeaderBox>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Logo src={logo} />
        <span className="logoname">BabyShib</span>
      </div>
      <NavList>
        {navs.map((item, i) => {
          return (
            <NavItem key={i} href={`#${item.link}`}>
              {item.text}
            </NavItem>
          );
        })}
      </NavList>
      {/* <CetrikLogo src={cetrikLogo}></CetrikLogo> */}
      <HeaderButton
        onClick={() => {
          window.open(
            "https://app.ball.exchange/?chain=shibarium&outputCurrency=BONE&inputCurrency=0x8c3A5Cd65253e875Ae0a34c59C22A70A04655441"
          );
        }}
      >
        Buy BabyShib Coin
      </HeaderButton>
    </HeaderBox>
  );
}

export default Header;
