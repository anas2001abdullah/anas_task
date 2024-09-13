import { BeatLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="loader">
      <BeatLoader
        color="#E6A4B4"
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
