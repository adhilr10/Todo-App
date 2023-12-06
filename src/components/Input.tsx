type Input = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ inputValue, setInputValue }: Input) => {
  return (
    <input
      type="text"
      className="w-full p-2 rounded-sm mb-2"
      onChange={(event) => setInputValue(event.target.value)}
      value={inputValue}
    />
  );
};

export default Input;
