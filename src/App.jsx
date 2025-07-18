import { useState } from "react";
import "./App.css";

function App() {
  // 定義號碼與顏色的對應
  const redNumbers = [
    1, 2, 7, 8, 12, 13, 18, 19, 23, 24, 29, 30, 34, 35, 40, 45, 46,
  ];
  const blueNumbers = [
    3, 4, 9, 10, 14, 15, 20, 25, 26, 31, 36, 37, 41, 42, 47, 48,
  ];
  const greenNumbers = [
    5, 6, 11, 16, 17, 21, 22, 27, 28, 32, 33, 38, 39, 43, 44, 49,
  ];

  // 根據號碼返回顏色類別
  const getNumberColorClass = (num) => {
    if (redNumbers.includes(num)) return "number-ball red";
    if (blueNumbers.includes(num)) return "number-ball blue";
    if (greenNumbers.includes(num)) return "number-ball green";
    return "number-ball"; // 預設類別（不應發生）
  };

  // 隨機生成 1-49 的號碼
  const generateNumbers = (count) => {
    const numbers = new Set();
    while (numbers.size < count) {
      const randomNum = Math.floor(Math.random() * 49) + 1;
      numbers.add(randomNum);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  };

  // 初始狀態
  const [numbers6, setNumbers6] = useState(generateNumbers(6));
  const [numbers7, setNumbers7] = useState(generateNumbers(7));

  // 重新抽選按鈕的處理函數
  const handleRedraw = () => {
    setNumbers6(generateNumbers(6));
    setNumbers7(generateNumbers(7));
  };

  return (
    <div className="container">
      <h1>六合彩隨機號碼</h1>
      <div className="number-section">
        <h2>6 個號碼</h2>
        <div className="number-row">
          {numbers6.map((num, index) => (
            <div key={index} className={getNumberColorClass(num)}>
              {num}
            </div>
          ))}
        </div>
      </div>
      <div className="number-section">
        <h2>7 個號碼</h2>
        <div className="number-row">
          {numbers7.map((num, index) => (
            <div key={index} className={getNumberColorClass(num)}>
              {num}
            </div>
          ))}
        </div>
      </div>
      <button className="redraw-button" onClick={handleRedraw}>
        重新抽選
      </button>
    </div>
  );
}

export default App;
