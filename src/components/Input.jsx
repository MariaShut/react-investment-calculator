/* eslint-disable react/prop-types */
export const Input = ({ value, onChange, label }) => {
  return (
    <p>
      <label className="inputs__label">{label}</label>
      <input
        className="inputs__input"
        type="number"
        required
        value={value}
        onChange={onChange}
      />
    </p>
  );
};
