import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return <div className="text-4xl font-bold">There was an Error...</div>;
};
export default ErrorElement;
