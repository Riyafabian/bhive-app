import "../styles/index.css";

const Loader = () => {
  return (
    <div className=" w-full flex justify-center align-center">
      <div className="loader" role="status" aria-label="Loading..."></div>
    </div>
  );
};

export default Loader;
