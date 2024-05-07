import React, { useState, useEffect } from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
  validationFn: (value: string) => boolean;
  errorMessage: string;
}

const ValidatedInput: React.FC<Props> = ({
  value,
  onChange,
  validationFn,
  errorMessage,
}) => {
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(validationFn(value));
  }, [value, validationFn]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        style={{ borderColor: isValid ? "black" : "red" }}
      />
      {!isValid && <div style={{ color: "red" }}>{errorMessage}</div>}
    </div>
  );
};

const Exam1: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const validateInput = (input: string): boolean => {
    return !isNaN(parseFloat(input));
  };

  return (
    <div>
      <h1>Validated Input</h1>
      <ValidatedInput
        value={inputValue}
        onChange={setInputValue}
        validationFn={validateInput}
        errorMessage="Please enter a valid number"
      />
    </div>
  );
};

export default Exam1;
