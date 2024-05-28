const Button = ({ name, value, setGross, gross }) => {
  const handleSetGross = () => {
    setGross(Math.round(gross * (1 + value)));
  };
  return (
    <button
      className="inline-block border border-blue-500 rounded m-2 py-1 px-3 bg-blue-500 text-white hover:text-black "
      onClick={handleSetGross}
    >
      {name}
    </button>
  );
};

export default Button;
