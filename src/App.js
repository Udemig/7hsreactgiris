
import "./App.css";
import MyHeader from './components/Header.js'

function App() {
  const text = "Selam React";

function handleChange(e) {
    console.log(e.target.value);
  }

  return (
    <div className="App">
      <MyHeader/>
      <label htmlFor="input">isim Girin</label>
      <input id="input" onChange={handleChange}></input>
    </div>
  );
}

export default App;
