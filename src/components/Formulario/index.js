import { useState } from "react";
import { Botao } from "../Botao";
import { Campo } from "./Campo";
import "./Formulario.css";
import { ListaSuspensa } from "./ListaSuspensa";
import { v4 as uuidv4 } from "uuid";

export const Formulario = ({
  enviaNovoFuncionario,
  enviaNovoSetor,
  setores,
}) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [img, setImg] = useState("");
  const [setor, setSetor] = useState("");

  const criarCard = (event) => {
    event.preventDefault();
    enviaNovoFuncionario({
      nome,
      cargo,
      img,
      setor,
      id: uuidv4(),
      favorito: false,
    });
    setNome("");
    setCargo("");
    setImg("");
    setSetor("");
  };

  const [nomeSetor, setNomeSetor] = useState("");
  const [corSetor, setCorSetor] = useState("#000000");

  const criarSetor = (event) => {
    event.preventDefault();
    const id = uuidv4();
    enviaNovoSetor({ nomeSetor, corSetor, id });
    setNomeSetor("");
    setCorSetor("#000000");
  };

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={criarCard}>
        <h2>Preencha os dados para criar o card do funcionário.</h2>
        <Campo
          valor={nome}
          seAlterado={(valor) => setNome(valor)}
          required={true}
          label="Nome *"
          placeholder="Digite seu nome"
        />
        <Campo
          valor={cargo}
          seAlterado={(valor) => setCargo(valor)}
          required={true}
          label="Cargo *"
          placeholder="Digite seu cargo"
        />
        <Campo
          valor={img}
          seAlterado={(valor) => setImg(valor)}
          required={false}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
        />
        <ListaSuspensa
          valor={setor}
          seAlterado={(valor) => setSetor(valor)}
          required={true}
          label="Setor *"
          setores={setores}
        />
        <Botao>Criar Card</Botao>
      </form>

      <form className="formulario" onSubmit={criarSetor}>
        <h2>Preencha os dados para criar o Setor.</h2>
        <Campo
          valor={nomeSetor}
          seAlterado={(valor) => setNomeSetor(valor.toUpperCase())}
          required={true}
          label="Setor *"
          placeholder="Digite o nome do setor"
        />
        <Campo
          valor={corSetor}
          seAlterado={(cor) => setCorSetor(cor)}
          required={true}
          tipo={"color"}
          label="Cor"
          placeholder="Escolha a cor do setor"
        />
        <Botao>Criar Setor</Botao>
      </form>
    </section>
  );
};
