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
            "https://gempad.app/presale/0x6ee87f027f8d83d862C7dDCbd495C3f35D2A978e?chainId=109"
          );
        }}
      >
        Persale
      </HeaderButton>
    </HeaderBox>
  );
}

export default Header;
