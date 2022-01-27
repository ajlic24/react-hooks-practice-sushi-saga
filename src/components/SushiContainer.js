import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";
import { useState } from "react";
import Table from "./Table";


function SushiContainer({sushis}) {
  const [indexNum, setIndexNum] = useState({
    min: 0,
    max: 4,
  })
  const [plateNum, setPlateNum] = useState([])
  const [Money, setMoney] = useState(200000)

  const only4 = [...sushis].filter((sushi, index) => {
    return (index < indexNum.max && index >= indexNum.min)
  })

  function handleMoreButton() {
    setIndexNum({min: indexNum.min + 4, max: indexNum.max + 4})
  }

  function determineSushi(sushi) {
    setPlateNum([...plateNum, sushi.price])
    setMoney(Money - sushi.price)
  }

  return (
    <>
    <div className="belt">
      {only4.map(sushi => {
        return <Sushi key={sushi.id} sushi={sushi} determineSushi={determineSushi} Money={Money}/>
      })}
      <MoreButton onClick={handleMoreButton} />
    </div>
    <Table plates={plateNum} Money={Money}/>
    </>
  );
}

export default SushiContainer;
