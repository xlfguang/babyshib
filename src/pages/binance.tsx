import {
  BTN,
  Bc1,
  // Bc2,
  // Bc3,
  Bc4,
  // Bc5,
  // Bc6,
  // Birthed,
  Card,
  CardList,
  // H1,
  IlluminatedButton,
  // IlluminatedButtonBox,
  IndexBox,
  Mask,
  Rectangle,
  ScrollBox,
  Title,
  TokenomicsBox,
  TokenomicsBox2,
  TokenomicsItem,
  TokenomicsRectangle,
  TokenomicsRectangle2,
  Value1,
  ValueBox,
  // ValueFlex,
  // ValueItem,
} from "@/style";
// import bc1 from "@/assets/img/mask-group-47@1x.webp";
import bc1 from "@/assets/img/binancelogo.png";
// import bc2 from "@/assets/img/astro_1024x1024.webp";
// import bc3 from "@/assets/img/image-155@1x.webp";
import bc4 from "@/assets/img/mask-group-92@1x.webp";
// import bc5 from "@/assets/img/image-187@1x.webp";
// import bc6 from "@/assets/img/image-222@1x.webp";
import bc7 from "@/assets/img/mask-group-54@1x.webp";
import bc8 from "@/assets/img/Mask_Group_146_bg.webp";
import img1 from "@/assets/img/mask-group-55@1x.webp";
import img2 from "@/assets/img/Image_224_bbd.webp";
// import tw from "@/assets/img/twitter.png";
import tg from "@/assets/img/telegram.png";
import ModuleItem from "@/components/ModuleItem";
import QAitem from "@/components/QAitem";
import MyFooter from "@/components/MyFooter";
import card1 from "@/assets/img/card/1.png";
import card2 from "@/assets/img/card/2.jpg";
import card3 from "@/assets/img/card/3.jpg";
// import card4 from "@/assets/img/card/4.jpg";
// import card5 from "@/assets/img/card/5.jpg";
// import bc3 from "@/assets/img/bc3.png";
// import logo from "@/assets/img/logo.png";
import x from "@/assets/img/x.jpg";
const cardList = [
  {
    img: card1,
    title: "BabyShib Card",
    subTitle:
      "Babyshib was born on Shibarium, a token with a pure-blooded MEME lineage. Babyshib token is set to be one of the hottest topics of the year",
  },
  {
    img: card3,
    title: "BabyShib Card",
    subTitle:
      "BabyShib is a highly promising meme token with a dedicated following. At an extremely low initial market value, this is the meme you should be considering for your next purchase. Please stay tuned for our launch.",
  },
  {
    img: card2,
    title: "BabyShib Card",
    subTitle: ` DEX Avatar
      AVE Avatar
      Massive Marketing
      Listed on CMC & CG with 2000 holders
      Formation of BabyShibArmy with 4000 holders
      Exchange listing with 6000 holders.
      `,
  },
];
// eslint-disable-next-line react-refresh/only-export-components
const QAList = [
  {
    question: "What is BabyShib Coin?",
    answer: `BabyShib is a meme token built on the BSC CHAIN, with the aim of becoming one of the top MEMEs. It has a total supply of 100 trillion. BabyShib has a 5% transaction tax, with 2% allocated to marketing expenses, 2% distributed in $babyshib as holder dividends, and 1% burned`,
  },
  {
    question: "What are the fees?",
    answer: `Each transaction incurs a 5% fee, of which 2% is allocated for marketing expenses, 2% is distributed in $BabyShib tokens as holder dividends, and 1% is burned.`,
  },
  {
    question: "What do you mean by decentralized?",
    answer: `It means you don't have to trust any central organization or person the
    way you would a bank. The developers nor team can seize your funds, but
    they also can't return them if you send them to the wrong address.`,
  },
  {
    question: "How can I help?",
    answer: `Tell your friends & family, about BabyShib. Social media is a wonderful place.
  
    `,
  },
];
function binance() {
  return (
    <>
      <IndexBox>
        <Rectangle>
          <Bc1 src={bc1} />
          {/* <Bc2 src={bc2} /> */}
          {/* <Bc3 src={bc3} /> */}
          {/* <H1>
            The World’s Best
            <br />
            Crypto Community
          </H1>
          <Birthed>
            BabyShib is not affiliated with the official SHIB team,we are a
            group of blockchain enthusiasts with mature technology and marketing
            capabilities. This summer, we are thrilled to join the ShibArmy
            network. We aim to make remarkable contributions to the Shibarium
            ecosystem. The BabyShib Token is set to become one of this year's
            hottest topics.
          </Birthed> */}
        </Rectangle>
        <div id="about"></div>
        <ModuleItem title={"About"} subTitle={"The BabyShib Ecosystem"}>
          <ScrollBox>
            <CardList>
              {cardList.map((item, index) => {
                return (
                  <Card img={item.img} key={index}>
                    <h2>{/* {item.title} */}</h2>
                    <p>{item.subTitle}</p>
                    {/* <IlluminatedButtonBox>
                      <IlluminatedButton>ASDASD</IlluminatedButton>
                    </IlluminatedButtonBox> */}
                  </Card>
                );
              })}
            </CardList>
          </ScrollBox>
        </ModuleItem>
        <ModuleItem title={"Our Values"} subTitle={"The Pillars of BabyShib"}>
          <Value1>
            <Bc4 src={bc4} />
            <ValueBox>
              <h2>Community</h2>
              <p>
                BabyShib, after its development on the Shibarium network, has
                garnered a strong following, which forms the foundation of our
                success. BabyShib is poised to become the new champion on the
                BSC chain.
              </p>
              <a href="https://t.me/babyshib_Shibarium1" target="_black">
                <IlluminatedButton style={{ margin: "40px 0" }}>
                  Join community
                </IlluminatedButton>
              </a>
            </ValueBox>
          </Value1>
          {/* <ValueFlex>
            <ValueItem>
              <Bc5 src={bc5} />
              <ValueBox>
                <h2>Utility</h2>
                <p>
                  BabyShib was created initially as a meme coin with a purpose
                  to help save dogs and spread awareness of animal adoption.
                  After insane success of BabyShib our community has built a
                  swap and aggregator, chess game, NFT collections, partnered
                  with payment and wallet apps, farming as a service, BabyShib
                  Card, exclusive merch discounts for holders, all while
                  donating over $1 million to animal adoption.
                </p>
                <IlluminatedButton style={{ margin: "40px 0" }}>
                  Read Whitepaper
                </IlluminatedButton>
              </ValueBox>
            </ValueItem>
            <ValueItem
              style={{
                backgroundColor: "rgb(222,180,60)",
              }}
            >
              <Bc6 src={bc6} />
              <ValueBox>
                <h2>Charity</h2>
                <p>
                  Saving dogs is a core mission at BabyShib. Our philanthropic
                  endeavors have allowed us to show the world that crypto can be
                  a positive driving force for animals. We have donated over
                  $1.4M USD to our charity partners since we launched in June
                  2021.
                </p>
                <IlluminatedButton style={{ margin: "40px 0" }}>
                  View Impact
                </IlluminatedButton>
              </ValueBox>
            </ValueItem>
          </ValueFlex> */}
        </ModuleItem>
        <div id="tokenomics"></div>
        <Title>Tokenomics</Title>
        <TokenomicsBox>
          <TokenomicsItem>
            <div className="title">Total Supply</div>
            <div className="value">100,000,000,000,000</div>
          </TokenomicsItem>
          <TokenomicsItem>
            <div className="title">Buy & Sell tax on Dex</div>
            <div className="value">
              5% {/* <span className="percentage">0% Fee on ETH</span> */}
            </div>
          </TokenomicsItem>{" "}
          <TokenomicsItem>
            <div className="title">Tax Allocation</div>
            <div className="value">Marketing 2%, Dividends 2%, 1% Burn</div>
          </TokenomicsItem>
        </TokenomicsBox>
        <TokenomicsBox2>
          <TokenomicsRectangle>
            <h3>Rewards in your wallet</h3>
            <p>
              BabyShib may be cute, but it has quite the bite! $BabyShib is a
              dividend meme token designed to continually distribute $BabyShib
              to its holders. All BabyShib holders earn more $Babyshib simply by
              holding BabyShib tokens in their wallets, and these funds are
              automatically sent to your wallet. As BabyShib token holders, you
              automatically receive a 5% fee from every transaction that occurs
              on the BSC chain, which means your $BabyShib holdings in your
              wallet will continue to grow. A minimum of holding 100 billion
              tokens is required to receive dividend payouts
            </p>
          </TokenomicsRectangle>
          <TokenomicsRectangle2>
            <div>
              <p>Presale </p>
              <h3>60%</h3>
            </div>

            <div>
              <p>Liquidity</p>
              <h3>31%</h3>
            </div>
            {/*  */}
            <div>
              <p>Cex Listing</p>
              <h3>9%</h3>
            </div>
          </TokenomicsRectangle2>
        </TokenomicsBox2>
        <TokenomicsItem
          style={{
            width: "100%",
            marginTop: "20px",
          }}
        >
          <div className="title">contract:</div>
          <div className="value">
            0x8c3A5Cd65253e875Ae0a34c59C22A70A04655441{" "}
          </div>
        </TokenomicsItem>
        {/* <img
          style={{
            width: "1200px",
            marginTop: "40px",
            borderRadius: "20px",
          }}
          className="img1"
          src={bc3}
          alt=""
        /> */}
        <Mask background={bc7}>
          <img className="img1" src={img1} alt="" />
          <p className="Mask1text Masktext">Be part of our pack.</p>
          <p className="Mask1text2 Masktext">
            Discover the most powerful crypto community.
          </p>
          <BTN
            onClick={() => {
              window.open(
                "https://app.ball.exchange/?chain=shibarium&outputCurrency=BONE&inputCurrency=0x8c3A5Cd65253e875Ae0a34c59C22A70A04655441"
              );
            }}
          >
            <span>Buy BabyShib Coin</span>
          </BTN>
        </Mask>
        <Mask background={bc8}>
          <img className="img2" src={img2} alt="" />
          <p className="Mask2text Masktext">Get in Touch</p>
          <p className="Mask2text2 Masktext">
            Partner with us, make suggestions, get support!
          </p>
          <div className="iconBox">
            <a href="https://t.me/babyshib_Shibarium1" target="_black">
              <img src={tg} alt="" />
              <p>Telegram</p>
            </a>
            <a href="https://twitter.com/BabyShibarium" target="_black">
              <img src={x} alt="" />
              <p>X</p>
            </a>
          </div>
        </Mask>
        <div id="Contact"></div>
        <ModuleItem title={"Answers"} subTitle={"FAQ"}>
          {QAList.map((item, index) => {
            return (
              <QAitem
                key={index}
                question={item.question}
                answer={item.answer}
              ></QAitem>
            );
          })}
        </ModuleItem>
        <MyFooter
          title="All rights reserved 2023 BabyShib & BSC CHAIN"
          text="BabyShib, after its development on the Shibarium network, has garnered a strong following, which forms the foundation of our success. BabyShib is poised to become the new champion on the BSC CHAIN."
        />
      </IndexBox>
    </>
  );
}

export default binance;
