import { Campo } from "../../Formulario/Campo";
import { Botao } from "../../Botao";
import { ListaSuspensa } from "../../Formulario/ListaSuspensa";
import "./modalCliente.css";
import { useState } from "react";

export const ModalCliente = ({
  mostrar,
  setores,
  id,
  retornaFuncionario,
  fechaModal,
}) => {
  const [nomeNovo, setNomeNovo] = useState("");
  const [cargoNovo, setCargoNovo] = useState("");
  const [imgNova, setImgNova] = useState("");
  const [setorNovo, setSetorNovo] = useState("");

  return mostrar === true ? (
    <form
      className="modalCliente"
      onSubmit={(e) => {
        e.preventDefault();
        fechaModal(!mostrar);
        retornaFuncionario({
          id,
          nomeNovo,
          cargoNovo,
          imgNova,
          setorNovo,
        });
        setNomeNovo("");
        setCargoNovo("");
        setImgNova("");
        setSetorNovo("");
      }}
    >
      <Campo
        valor={nomeNovo}
        seAlterado={(valor) => setNomeNovo(valor)}
        required={false}
        label="Nome"
        placeholder="Digite seu nome"
      />
      <Campo
        valor={cargoNovo}
        seAlterado={(valor) => setCargoNovo(valor)}
        required={false}
        label="Cargo"
        placeholder="Digite seu cargo"
      />
      <Campo
        valor={imgNova}
        seAlterado={(valor) => setImgNova(valor)}
        required={false}
        label="Imagem"
        placeholder="Digite o endereço da imagem"
      />
      <ListaSuspensa
        valor={setorNovo}
        seAlterado={(valor) => setSetorNovo(valor)}
        required={false}
        label="Setor"
        setores={setores}
      />
      <Botao>Editar Funcionário</Botao>
    </form>
  ) : (
    ""
  );
};
