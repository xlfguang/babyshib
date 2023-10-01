import { IndexBox, Rectangle, Bc1, Merge } from "@/style";
import bc1 from "@/assets/img/binancelogo.png";
import bc2 from "@/assets/img/bc1.png";
import { Link } from "react-router-dom";

function check() {
  return (
    <IndexBox>
      <Link to={"/index"}>
        <Rectangle
          style={{
            margin: "0px",
          }}
        >
          <Bc1 src={bc2} />
        </Rectangle>
      </Link>
      <Merge>&</Merge>
      <Link to={"/binance"}>
        <Rectangle
          style={{
            margin: "0px",
            height: "675px",
          }}
        >
          <Bc1 src={bc1} />
        </Rectangle>
      </Link>
    </IndexBox>
  );
}

export default check;
