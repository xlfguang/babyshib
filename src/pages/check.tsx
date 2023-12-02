import {
  Bc1,
  Rectangle1,
  Rectangle3,
  Rectangle2,
  RectangleHeader,
  IndexBox2,
} from "@/style";
import bc1 from "@/assets/img/binancelogo.png";
import bc2 from "@/assets/img/bc1.png";
import bc3 from "@/assets/img/bc2.png";
import { Link } from "react-router-dom";

function check() {
  return (
    <IndexBox2>
      <Link to={"/index"}>
        <Rectangle1>
          <RectangleHeader />
          <Bc1
            style={{
              height: "404px",
            }}
            src={bc2}
          />
        </Rectangle1>
      </Link>

      <Link to={"/binance"}>
        <Rectangle2>
          <RectangleHeader
            style={{
              background: "#000",
            }}
          />
          <Bc1
            style={{
              height: "444px",
            }}
            src={bc1}
          />
        </Rectangle2>
      </Link>

      <Link to={"/home"}>
        <Rectangle3
          style={{
            margin: "0px",
          }}
        >
          <RectangleHeader
            style={{
              background: "RGB(93,162,189)",
            }}
          />
          <Bc1 src={bc3} />
        </Rectangle3>
      </Link>
    </IndexBox2>
  );
}

export default check;
