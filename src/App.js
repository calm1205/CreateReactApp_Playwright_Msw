import { useEffect, useState } from "react";

export const App = () => {
  const [coffees, setCoffees] = useState(null);

  const getData = async () => {
    const response = await fetch("https://api.sampleapis.com/coffee/hot");
    const json = await response.json();
    setCoffees(json);
  };

  useEffect(() => getData, []);

  return (
    <>
      <h1>Coffee List</h1>
      {coffees?.map((coffee, index) => (
        <div key={index}>{coffee?.title}</div>
      ))}
    </>
  );
};
