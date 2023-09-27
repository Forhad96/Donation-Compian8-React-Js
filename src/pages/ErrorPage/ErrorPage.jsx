import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-[80vh]">
      <p className="text-7xl">😞</p>
      <h1 className="text-6xl font-extrabold">Oops!!!</h1>
      <p>
        <i className="mr-2">{error.status || error.message}</i>
        <i>{error.statusText || error.message}</i>
      </p>
      <p className="text-3xl font-bold">Sorry,that link is missing</p>
      <Link>
        <button className="btn btn-info text-white text-xl hover:bg-sky-300 hover:text-gray-200">
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
