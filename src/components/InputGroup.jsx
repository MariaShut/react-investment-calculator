/* eslint-disable react/prop-types */
import { Input } from "./Input";

export const InputGroup = ({ onChange, userInput }) => {
  return (
    <section className="inputs">
      <div className="inputs__group">
        <Input
          label="Initial Investment"
          value={userInput.initialInvestment}
          onChange={(event) =>
            onChange("initialInvestment", event.target.value)
          }
        />
        <Input
          label="Annual Investment"
          value={userInput.annualInvestment}
          onChange={(event) => onChange("annualInvestment", event.target.value)}
        />
      </div>
      <div className="inputs__group">
        <Input
          label="Expected Return"
          value={userInput.expectedReturn}
          onChange={(event) => onChange("expectedReturn", event.target.value)}
        />
        <Input
          label="Duration"
          value={userInput.duration}
          onChange={(event) => onChange("duration", event.target.value)}
        />
      </div>
    </section>
  );
};
