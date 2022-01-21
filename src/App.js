import './App.css';
import React, {useState} from "react";


function App() {

  const [weight, setWeight] = useState(89);
  const [bottles, setBottles] = useState(3);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);

  function calculateAlco(e) {
    e.preventDefault();

    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;

    let burning = weight / 10;
    grams = grams - (burning * time);

    let alcoLevel = 0;

    if(gender == "male") {
      alcoLevel = grams / (weight * 0.7);
    }else {
      alcoLevel = grams / (weight * 0.6);
    }

    if(alcoLevel < 0) {
      alcoLevel = 0;
    }

    setResult(alcoLevel);
  }

  return (
    <div>
      <h1>Alcometer</h1>
      <h3>Calculating alcohol blood level</h3>
      <form onSubmit={calculateAlco}>
        <div className='form-div'>
          <label>Weight</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
          <label>Bottles</label>
          <select value={bottles} onChange={e => setBottles(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
          </select>
          <label>Time (h)</label>
          <select value={time} onChange={e => setTime(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
          </select>
        </div>
        <div className="gender-div">
          <p>Gender</p>
          <label for="male">Male</label>
          <input id="male" value="male" type="radio" name="gender" defaultChecked onChange={e => setGender(e.target.value)}></input>
          <label for="female">Female</label>
          <input id="female" value="female" type="radio" name="gender" onChange={e => setGender(e.target.value)}></input>
        </div>
        <button>Calculate</button>
        <output>{result.toFixed(2)} ‰</output>
      </form>
    </div>
  );
}

export default App;
