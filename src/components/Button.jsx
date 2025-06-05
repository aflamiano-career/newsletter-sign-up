function Button({ onClick, children }) {
  return (
    <button
      type="submit"
      className="w-full bg-blue800 p-4 rounded-lg text-white lg:hover:bg-linear-90 from-gradientStart to-gradientEnd lg:hover:drop-shadow-lg/75 drop-shadow-gradientEnd"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
