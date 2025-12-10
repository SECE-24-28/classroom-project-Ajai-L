import "./App.css";
import { useEffect, useState } from "react";
import Counter from "./Counter";

function App() {
  let [val, setVal] = useState(0);
  let [data, setData] = useState([]);
  let handleIncrement = () => {
    setVal(val + 1);
  };
  let handleDecrement = () => {
    setVal(val - 1);
  };
  // Debouncing
  useEffect(() => {
    if (val < 0) {
      let timer = setTimeout(() => {
        setVal(0);
      }, 2000);

      // cleanup Function
      return () => {
        clearTimeout(timer);
      };
    }
  }, [val]);
  // Fetching API Data
  useEffect(() => {
    const FetchApi = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const fetchData = await response.json();
        setData(fetchData);
      } catch (err) {
        console.log("err:", err);
      }
    };
    FetchApi();
  }, []);

  return (
    <div className="App">
      <h1>Learning React</h1>
      <Counter
        val={val}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      ></Counter>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;