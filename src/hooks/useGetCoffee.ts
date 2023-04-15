import { useEffect, useState } from "react";
import { coffeeEndpoint } from "../endpoint";

type CoffeeResponse = {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  error?: {
    message: string;
  };
}[];

/**
 * コーヒーの銘柄一覧を取得
 */
export const useGetCoffee = () => {
  const [coffees, setCoffees] = useState<CoffeeResponse>();
  const [isError, setError] = useState(false);

  const getData = async () => {
    const response = await fetch(coffeeEndpoint);
    const json = await response.json();
    const error = response.status === 500;
    setCoffees(json);
    setError(error);
  };

  useEffect(() => {
    (async () => await getData())();
  }, []);

  return { coffees, isError };
};
