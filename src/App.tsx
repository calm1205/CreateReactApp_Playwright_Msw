import { useGetCoffee } from "./hooks/useGetCoffee";

export const App: React.FC = () => {
  const { coffees, isError } = useGetCoffee();

  if (isError) return <h1>Internal Server Error</h1>;
  return (
    <>
      <h1>Coffee List</h1>
      {coffees?.map((coffee, index) => (
        <div key={index}>{coffee?.title}</div>
      ))}
    </>
  );
};
