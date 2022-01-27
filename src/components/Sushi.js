import React, { useState } from "react";

function Sushi({sushi, determineSushi, startingMoney}) {
  const {name, price, img_url, id} = sushi
  const [isEaten, setIsEaten] = useState(false)

  function handleClick() {
    determineSushi(sushi)
    setIsEaten(true)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={startingMoney < price ? null : handleClick}>
        {isEaten ? null : (
          <img
            src={img_url}
            alt={name + "Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
