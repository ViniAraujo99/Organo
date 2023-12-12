import "./Setor.css";
import { Card } from "../Card";
import hexToRgba from "hex-to-rgba";

export const Setor = ({
  funcionarios,
  setor,
  aoDeletarFuncionario,
  aoDeletarSetor,
  aoFavoritar,
  aoMudarCorSetor,
  aoMudarNomeSetor,
  retornaFuncionario,
  setores,
}) => {
  return (
    funcionarios.length > 0 && (
      <section
        className="setor-container"
        style={{
          backgroundColor: hexToRgba(`${setor.corSetor}`, 0.2),
        }}
      >
        <div className="setor">
          <h3>
            {setor.nomeSetor}
            <span
              style={{
                borderBottom: `3px solid ${setor.corSetor}`,
              }}
            ></span>
          </h3>
          {funcionarios.map((funcionario) => (
            <Card
              retornaFuncionario={retornaFuncionario}
              key={funcionario.id}
              setor={setor}
              setores={setores}
              funcionario={funcionario}
              aoDeletarFuncionario={aoDeletarFuncionario}
              aoFavoritar={aoFavoritar}
            />
          ))}
        </div>
        <div className="inputsSetor">
          <button
            onClick={() => {
              let response = prompt(
                "Tem certeza que deseja deletar o Setor (isso deletará também os funcionários)? Digite 'sim' para continuar:"
              );

              response !== null
                ? response.toUpperCase() === "SIM"
                  ? aoDeletarSetor(setor)
                  : alert("Setor não deletado, tente novamente.")
                : alert("Setor não deletado.");
            }}
            className="excluirSetor"
          >
            Remover Setor
          </button>
          <label htmlFor="novaCor" className="corSetorLabel">
            Nova Cor
            <input
              value={setor.corSetor}
              id="novaCor"
              onChange={(event) =>
                aoMudarCorSetor({
                  id: setor.id,
                  corNova: event.target.value,
                })
              }
              className="corSetor"
              type="color"
            />
          </label>
          <label htmlFor="novoNome" className="corSetorLabel">
            Novo Nome
            <input
              id="novoNome"
              onBlur={(event) => {
                aoMudarNomeSetor({
                  id: setor.id,
                  corNova: setor.corSetor,
                  nomeNovo: event.target.value.toUpperCase(),
                });
                event.target.value = "";
              }}
              placeholder="Novo nome do setor"
              className="corSetor"
              type="text"
            />
          </label>
        </div>
      </section>
    )
  );
};
