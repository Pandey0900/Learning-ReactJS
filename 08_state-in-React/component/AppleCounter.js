import Buttons from "./Buttons";
import leftArrow from "../assets/arrow.png";
import rightArrow from "../assets/right-arrow.png";
import Basket from "./Basket";
import "./AppleCounter.css";

import {createRoot} from 'react-dom/client';
import { useState } from "react";

// const root=createRoot(document.getElementById('root'));

const AppleCounter = () => {

let totalApple = 10;
const [secondBacketApple,setsecondBacketApple] =useState(0);
const [firstBacketApple,setfirstBacketApple] = useState(totalApple - secondBacketApple);

  const leftEventHandler = () => {
    if (secondBacketApple > 0) {
      setsecondBacketApple(firstBacketApple +1)
      setfirstBacketApple(secondBacketApple -1)
//    root.render(<AppleCounter/>);  //  this method is not recommended it is only for learning purpose
    }
  };

  const rightEventHandler = () => {
    if (firstBacketApple > 0) {
      setsecondBacketApple(firstBacketApple -1)
      setfirstBacketApple(secondBacketApple +1)
 //     root.render(<AppleCounter/>);
    }

  };

  return (
    <section>
      <Basket appleCount={firstBacketApple} BasketNo="1" />
      <Buttons
        clickHandler={leftEventHandler}
        imageUrl={leftArrow}
        Arrows="Left Arrow"
      />
      <Buttons
        clickHandler={rightEventHandler}
        imageUrl={rightArrow}
        Arrows="Right Arrow"
      />
      <Basket appleCount={secondBacketApple} BasketNo="2" />
    </section>
  );
};

export default AppleCounter;
