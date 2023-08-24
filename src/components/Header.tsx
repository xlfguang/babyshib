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
  {
    text: "Swap",
    link: "Swap",
  },
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
      <HeaderButton>Launch App</HeaderButton>
    </HeaderBox>
  );
}

export default Header;