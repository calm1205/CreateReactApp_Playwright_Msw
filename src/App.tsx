import { useEffect, useState } from "react";
import { coffeeEndpoint } from "./endpoint";

type CoffeeResponse = {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  image: string;
}[];

export const App: React.FC = () => {
  const [coffees, setCoffees] = useState<CoffeeResponse>();

  const getData = async () => {
    const response = await fetch(coffeeEndpoint);
    const json = await response.json();
    setCoffees(json);
  };

  useEffect(() => {
    (async () => {
      await getData();
    })();
  }, []);

  return (
    <>
      <h1>Coffee List</h1>
      {coffees?.map((coffee, index) => (
        <div key={index}>{coffee?.title}</div>
      ))}
    </>
  );
};
