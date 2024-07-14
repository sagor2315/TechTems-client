import { TbFaceIdError } from "react-icons/tb";
const ErrorPage = () => {
  return (
    <div className="md:text-5xl text-3xl font-bold bg-secondary h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl">
        <TbFaceIdError />
      </h1>
      <h1 className="text-center">Error 404 not found!</h1>
    </div>
  );
};

export default ErrorPage;
