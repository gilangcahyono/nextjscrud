const Button = (props) => {
  const { children, type = "button" } = props;
  return (
    <button
      className={`${"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
