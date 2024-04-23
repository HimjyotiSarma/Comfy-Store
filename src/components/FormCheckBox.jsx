import { useState } from "react";

const FormCheckBox = ({ label, name, size, defaultValue }) => {
  const [checked, setChecked] = useState(defaultValue);
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        id={name}
        defaultChecked={defaultValue}
        onChange={() => setChecked(!checked)}
        className={`checkbox-primary checkbox ${size}`}
      />
    </div>
  );
};
export default FormCheckBox;
