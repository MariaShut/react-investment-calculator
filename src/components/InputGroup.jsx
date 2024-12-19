/* eslint-disable react/prop-types */
export const InputGroup = ({ onChange, userInput }) => {
  return (
    <section className="inputs">
      <div className="inputs__group">
        <p>
          <label className="inputs__label">Initial Investment</label>
          <input
            className="inputs__input"
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label className="inputs__label">Annual Investment</label>
          <input className="inputs__input" type="number" required />
        </p>
      </div>
      <div className="inputs__group">
        <p>
          <label className="inputs__label">Expected Return</label>
          <input className="inputs__input" type="number" required />
        </p>
        <p>
          <label className="inputs__label">Duration</label>
          <input className="inputs__input" type="number" required />
        </p>
      </div>
    </section>
  );
};
