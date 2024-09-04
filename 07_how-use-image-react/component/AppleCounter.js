import Buttons from "./Buttons";
import leftArrow from "../assets/arrow.png";
import rightArrow from "../assets/right-arrow.png";
import Basket from "./Basket";
import "./AppleCounter.css";

import {createRoot} from 'react-dom/client';

const root=createRoot(document.getElementById('root'));


let totalApple = 10;
let secondBacketApple = 0;
let firstBacketApple = totalApple - secondBacketApple;

const AppleCounter = () => {
 

  const leftEventHandler = () => {
    if (secondBacketApple > 0) {
      secondBacketApple--;
      firstBacketApple++;
      root.render(<AppleCounter/>);  //  this method is not recommended it is only for learning purpose
    }
  };

  const rightEventHandler = () => {
    if (firstBacketApple > 0) {
      firstBacketApple--;
      secondBacketApple++;
      root.render(<AppleCounter/>);
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
