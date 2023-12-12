import "./Card.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ModalCliente } from "./Modal";
import { useState } from "react";

export const Card = ({
  funcionario,
  setor,
  aoDeletarFuncionario,
  aoFavoritar,
  retornaFuncionario,
  setores,
}) => {
  const favoritar = () => {
    aoFavoritar(funcionario.id);
  };

  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="card">
      <ModalCliente
        mostrar={mostrar}
        setores={setores}
        id={funcionario.id}
        fechaModal={(mostrar) => {
          setMostrar(mostrar);
        }}
        retornaFuncionario={retornaFuncionario}
        seAlterado
        valor
      />
      <button
        className="deletar"
        aria-label="Deletar"
        onClick={() => {
          let response = prompt(
            "Tem certeza que deseja deletar o funcionário? Digite 'sim' para continuar:"
          );

          response !== null
            ? response.toUpperCase() === "SIM"
              ? aoDeletarFuncionario(funcionario.id)
              : alert("Funcionário não deletado, tente novamente.")
            : alert("Funcionário não deletado.");
        }}
      />
      <button
        className="editar"
        aria-label="Editar"
        onClick={() => {
          mostrar ? setMostrar(false) : setMostrar(true);
        }}
      />
      <div
        className="img-container"
        style={{ backgroundColor: setor.corSetor }}
      >
        <img src={funcionario.img} alt={funcionario.nome} />
      </div>
      <div className="text-container">
        <h4>{funcionario.nome}</h4>
        <p>{funcionario.cargo}</p>
        <button className="favorito" onClick={favoritar}>
          {funcionario.favorito ? (
            <AiFillHeart size={25} color="#FF0000" />
          ) : (
            <AiOutlineHeart size={25} />
          )}
        </button>
      </div>
    </div>
  );
};
