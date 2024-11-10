import { useState } from "react";
import sumValues from "../sumValues";

function App() {
  const [result, setResult] = useState(null);
  const [values, setValues] = useState("");

  const handleInputValues = (e) => {
    const values = e.currentTarget.value;
    setValues(values);
  };

  const handleSubmitValues = (e) => {
    e.preventDefault();
    const valuesArray = values.split(",");
    // TODO: 数値に変換できない文字が入力された際の例外処理が必要
    const result = sumValues(...valuesArray);
    setResult(result);
    setValues("");
  };

  return (
    <>
      <h1>sumValues</h1>
      <p>入力した数値の総和を表示します。</p>
      <p>
        「1, 2,
        3」のように、総和を求めたい数字をカンマ区切りで入力してください。
      </p>
      <form onSubmit={handleSubmitValues}>
        <input onChange={handleInputValues} value={values} />
        <button>計算</button>
      </form>

      <h2>計算結果</h2>
      <p>{result ? result : "計算されていません"}</p>
    </>
  );
}

export default App;
