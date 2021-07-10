import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  PieChart,
  Pie,
  Tooltip
} from "recharts";

const Page2 = (props) => {
  const history = useHistory();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, []);

  return (
    <>
      <h1>Page2</h1>
      <p>Go to the Page1 by using the following Button:</p>
      <hr />
      <button onClick={() => history.goBack()}>Page1</button>
      <hr />
      <div style={{ textAlign: "center" }}>
        <h1>Users Salary</h1>
        <div className="App">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="salary"
              isAnimationActive={false}
              data={data}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </>
  );
};

export default Page2;
