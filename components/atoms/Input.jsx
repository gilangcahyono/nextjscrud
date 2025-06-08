const Input = (props) => {
  const { type, name, placeholder, value } = props;
  return (
    <input
      className={""}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
