// import { useGetCoffee } from "./hooks/useGetCoffee";
import { useQueryCoffee } from "./hooks/useQueryCoffee";

export const App: React.FC = () => {
  // const { coffees, isError } = useGetCoffee();
  const { coffees } = useQueryCoffee();

  return (
    <>
      <h1>Coffee List</h1>
      {coffees?.map((coffee, index) => (
        <div key={index}>{coffee?.title}</div>
      ))}
    </>
  );
};
