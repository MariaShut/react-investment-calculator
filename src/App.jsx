import { useState } from "react";
import { Header } from "./components/Header";
import { InputGroup } from "./components/InputGroup";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <InputGroup userInput={userInput} onChange={handleChange} />
    </>
  );
}

export default App;