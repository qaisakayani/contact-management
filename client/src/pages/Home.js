import React, { useState, useEffect } from "react";
import axios from "axios";
const appURL = "http://localhost:5000/api/";
export const Home = () => {
  const [data, setData] = useState([]);
  const loadData = async () => {
    const response = await axios.get(appURL + "getlist", { crossDomain: true });
    setData(response.data);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Contact</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr key={item.id} tabindex={-1}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
