const Slider = ({ setGross, gross }) => {
  return (
    <div className="flex flex-col gap-8">
      <input
        type="range"
        value={gross}
        min="0"
        max="500000"
        onChange={(e) => {
          setGross(Math.round(e.target.value));
        }}
        className="appearance-none w-full h-6 accent-white bg-blue-500 rounded-full outline-none cursor-pointer"
      ></input>
    </div>
  );
};

export default Slider;
