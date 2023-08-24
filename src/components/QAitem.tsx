import { QAitemBox } from "@/style";
// 箭头图片
import arrow from "@/assets/img/path-4674-1@1x.png";
import { useState } from "react";
interface QAitemProps {
  question: string;
  answer: string;
}
function QAitem(props: QAitemProps) {
  const [isShow, setIsShow] = useState(false);
  return (
    <QAitemBox>
      <div>
        <h3>{props.question}</h3>
        <img
          onClick={() => {
            setIsShow(!isShow);
          }}
          className={
            isShow
              ? "rotate-180 transform duration-500"
              : "transform duration-500"
          }
          src={arrow}
          alt=""
        />
      </div>
      {isShow && <p>{props.answer}</p>}
    </QAitemBox>
  );
}

export default QAitem;
