import {
  FooterBox,
  // FooterCenter,
  FooterIcon,
  FooterIconBox,
  FooterLeft,
  FooterLogo,
  FooterRight,
} from "@/style";
import logo from "@/assets/img/logo.png";
import tw from "@/assets/img/TW.png";
import tg from "@/assets/img/TG.png";

const iconList = [
  {
    icon: tw,
    link: "https://twitter.com/BabyShib2024",
  },
  {
    icon: tg,
    link: "https://t.me/babyshib_Shibarium1",
  },
  // {
  //   icon: re,
  //   link: "https://www.reddit.com/r/BitMartExchange/",
  // },
  // {
  //   icon: fb,
  //   link: "https://www.facebook.com/bitmartexchange",
  // },
  // {
  //   icon: ins,
  //   link: "https://www.instagram.com/bitmartexchange/",
  // },
  // {
  //   icon: di,
  //   link: "https://discord.com/invite/bitmart",
  // },
];

export default function MyFooter(props: {
  showLink?: boolean;
  title?: string;
  text?: string;
}) {
  return (
    <FooterBox>
      <FooterLeft>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <FooterLogo src={logo} />
          <span className="logoname">BabyShib</span>
        </div>
        <FooterIconBox>
          {iconList.map((item, index) => {
            return (
              <a href={item.link}>
                <FooterIcon key={index} src={item.icon}></FooterIcon>
              </a>
            );
          })}
        </FooterIconBox>
      </FooterLeft>
      <FooterRight>
        {props.showLink && (
          <div>
            <h2>USEFUL LINKS</h2>
            <p>
              <a href="https://shibatoken.com/" target="_black">
                ShibasSwap DEX
              </a>
            </p>
            <p>
              <a href="https://blog.shib.io/" target="_black">
                Shiba lun Blog
              </a>
            </p>
          </div>
        )}
        <div>
          <p className="hui">
            {props.title ? props.title : "Copyright 2023 BabyShib ＆ Shibarium"}
          </p>
          <p className="hui">
            {props.text
              ? props.text
              : ` As the first meme token on the Shibarium network, BabyShib holds
            great appeal in China and is currently the most anticipated
            Shibarium meme token in the country. We are fully prepared for
            everything.`}
          </p>
        </div>
      </FooterRight>
    </FooterBox>
  );
}
