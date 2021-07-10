import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MaterialTable from "material-table";

const Page1 = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const columns = [
    {
      title: "Name",
      field: "name",
    },
    {
      title: "Salary",
      field: "salary",
    },
  ];

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
      <h1>Page1</h1>
      <p>Go to the Page2 by using the following Button:</p>
      <hr />
      <button onClick={() => history.push("/Page2")}>Page2</button>
      <hr />
      <div>
        <MaterialTable
          title="User Tabel"
          data={data}
          columns={columns}
          options={{
            search: false,
            paging: false,
            filtering: true,
            exportButton: true,
          }}
        />
      </div>
    </>
  );
}

export default Page1;
