import React from "react";
import { Link } from "react-router-dom";

export const students = [
  { id: 1, name: "Harshita" },
  { id: 2, name: "Janaki" },
  { id: 3, name: "Lalsa" },
  { id: 4, name: "Manikumar" },
  { id: 5, name: "Karthik" },
];
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {students.map((value) => {
          return (
            <div>
              <Link to={`/student/${value.id}`}>{value.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
























































































































































































