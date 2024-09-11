import React from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const INIT_INPUTS = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = React.useState(INIT_INPUTS);

  const handleUserInputChange = (event, inputLabel) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [inputLabel]: +event.target.value,
      };
    });
  };

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleUserInputChange} />
      {
        inputIsValid 
        ? <Results input={userInput} />
        :<p className="center">Please enter a duration greater than zero</p>
      }
    </>
  );
}

export default App;
