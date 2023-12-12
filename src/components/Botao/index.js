import "./Botao.css";

export const Botao = ({ children, clname }) => {
  return (
    <div className={`botao ${clname}`}>
      <button>{children}</button>
    </div>
  );
};
