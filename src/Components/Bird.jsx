import React from "react";
import Birdimg from "../Image/bird.png";
const Bird = ({ size }) => {
  return (
    <div className="Bird">
      <img src={Birdimg} width={size} alt="" />
    </div>
  );
};

export default Bird;
