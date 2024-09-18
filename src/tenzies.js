import React from "react";
import Confetti from 'react-confetti'




export default function Tenzies() {

  const [gridNum, setGridNum] = React.useState([
    {
      num: 1,
      locked: false,
      id: 1
    },
    {
      num: 2,
      locked: false,
      id: 2
    },
    {
      num: 3,
      locked: false,
      id: 3
    },
    {
      num: 4,
      locked: false,
      id: 4
    },
    {
      num: 5,
      locked: false,
      id: 5
    },
    {
      num: 6,
      locked: false,
      id: 6
    },
    {
      num: 1,
      locked: false,
      id: 7
    },
    {
      num: 2,
      locked: false,
      id: 8
    },
    {
      num: 3,
      locked: false,
      id: 9,
    },
    {
      num: 4,
      locked: false,
      id: 0,
    },
  ])

  const [win, setWin] = React.useState(false);

  let counter = {};
  let countLock = {};
  React.useEffect(() => {
    let currentArray = [];
    let currentLock = [];
    gridNum.map((x) => {
      currentArray.push(x.num)
      currentLock.push(x.locked)
    })
    currentArray.forEach(ele => {
      if (counter[ele]) {
          counter[ele] += 1;
      } else {
          counter[ele] = 1;
      }
  });
    
  console.log(currentLock)


    Object.keys(counter).length === 1 ? setWin(true) : setWin(false);
  }, [gridNum]);

  const tenziesGrid = gridNum.map((x) => {
    return <div className={x.locked ? "numBox locked": "numBox"} onClick={() => Lock(x.id)}>
      {CreateDiceFace(x.num)}
    </div>
  })

function getRandom(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}


  function Roll() {
    win ? 
    setGridNum((preVal) => {
      return preVal.map((x) => {
        return {
          ...x, ["locked"]: false, ["num"]:getRandom(1, 6)
        }
      })
    })
    :
    setGridNum((preVal) => {
      return preVal.map((x) => x.locked ? x :{...x, ["num"]:getRandom(1, 6)})
    })
  }

  function Lock(id) {
    setGridNum((preVal) => {
      return preVal.map((x) => x.id === id ? {...x, ['locked']: !x.locked}: x)
    })
  }

  let currentRoll;
  function Button() {
    currentRoll = win ? "Reset": "Roll";
    return   <button className="roll" onClick={Roll}>
    {currentRoll}
   </button>
  }

  function CreateDiceFace(number) {
    function diceDots(number) {
      let box = [];
      for (let i = 0; i < number; i++) {
        box.push(i)
      }
      return box.map((x) => 
      <div className="diceDotsContainer">
        <div className="diceDots" key={x}>
        </div>
      </div>
      )
    }

    return <div className={number === 1 ? "diceFace singular" : "diceFace multiple"}>
      {diceDots(number)}
    </div>
  }
 

  return <>
  {win && <Confetti width={"2400px"} height={"2400px"} />}
  <div className="tenziesBody">
    {tenziesGrid}
  </div>
  <Button />
  </>
}