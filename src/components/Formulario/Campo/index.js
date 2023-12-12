import "./Campo.css";

export const Campo = ({
  seAlterado,
  label,
  placeholder,
  required,
  tipo = "text",
  valor,
}) => {
  return (
    <div className="campo">
      <label htmlFor={label}>{label}</label>
      <input
        value={valor}
        onChange={(event) => {
          seAlterado(event.target.value);
        }}
        required={required}
        id={label}
        type={tipo}
        placeholder={placeholder}
      />
    </div>
  );
};
