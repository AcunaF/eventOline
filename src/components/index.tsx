// src/App.tsx
import React, { useState } from "react";
import { NumberConverter } from "../components/NumberConverter.tsx";

const Index = () => {
  const [input, setInput] = useState("");
  const [system, setSystem] = useState("binary");

  const handleInput = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInput(event.target.value);
  };

  const handleSystem = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSystem(event.target.value);
  };

  const [checkboxState, setCheckboxState] = useState({
    binary: false,
    hexadecimal: false,
    octal: false,
    decimal: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxState({
      ...checkboxState,
      [event.target.name]: event.target.checked,
    });
  };

  function convertNumber(): string {
    const numberInput = parseInt(input);

    if (isNaN(numberInput)) {
      return "Invalid input";
    }

    if (system === "binary") {
      return numberInput.toString(2); // Convierte a binario
    } else if (system === "hexadecimal") {
      return numberInput.toString(16); // Convierte a hexadecimal
    } else if (system === "octal") {
      return numberInput.toString(8); // Convierte a octal
    }

    return numberInput.toString(); // Por defecto, devuelve el número como string
  }

  //tsignore
  return (
    <NumberConverter
      input={parseInt(input)} // Convert the input value to a number
      system={system}
      handleInput={handleInput}
      handleSystem={handleSystem}
      convertNumber={convertNumber}
      checkboxState={checkboxState}
      handleCheckboxChange={handleCheckboxChange}
    />
  );
};

export { Index, NumberConverter };
