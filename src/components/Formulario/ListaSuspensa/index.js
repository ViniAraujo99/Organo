import "./ListaSuspensa.css";
import { Opcoes } from "./Opcoes";

export const ListaSuspensa = ({
  seAlterado,
  valor,
  setores,
  label,
  required,
}) => {
  const htmlSetor = (check) => {
    return check ? (
      <>
        <option hidden label="Selecione uma opção"></option>
        <Opcoes setores={setores} />
      </>
    ) : (
      <option
        hidden
        label="Crie um setor antes de cadastrar o funcionario"
      ></option>
    );
  };

  return (
    <div className="listaSuspensa">
      <label htmlFor={label}>{label}</label>
      <select
        required={required}
        onChange={(evento) => seAlterado(evento.target.value)}
        id={label}
        value={valor}
      >
        {htmlSetor(setores.length > 0)}
      </select>
    </div>
  );
};
