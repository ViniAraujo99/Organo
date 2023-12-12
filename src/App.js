import { useEffect, useState } from "react";
import { Banner } from "./components/Banner";
import { Formulario } from "./components/Formulario";
import { Setor } from "./components/Setor";
import { Footer } from "./components/Footer";
/* import { v4 as uuidv4 } from "uuid"; */

function App() {
  /*REGEX*/
  const regexp = /\s*\S+.*/gi;

  /*LOCAL STORAGE*/
  const resolveLocalStorage = (key, arr) => {
    localStorage.removeItem(`${key}`);
    localStorage.setItem(`${key}`, JSON.stringify(arr));
  };

  /*SETOR*/
  const [setores, setSetores] = useState(
    JSON.parse(localStorage.getItem("setores")) !== null
      ? JSON.parse(localStorage.getItem("setores"))
      : []
  );

  const insereNovoSetor = (setor) => {
    setores.find((set) => set.nomeSetor === setor.nomeSetor) !== undefined
      ? alert("Setor já cadastrado")
      : regexp.test(setor.nomeSetor)
      ? setSetores([...setores, setor])
      : alert("Nome do setor inválido");
  };

  const deletarSetorEFuncionarios = (setor) => {
    setFuncionario(
      funcionarios.filter(
        (funcionario) => funcionario.setor !== setor.nomeSetor
      )
    );
    setSetores(setores.filter((set) => set.id !== setor.id));
  };

  const alterarCorSetor = (setorAlterado) => {
    setSetores(
      setores.map((setor) => {
        if (setor.id === setorAlterado.id) {
          setor.corSetor = setorAlterado.corNova;
        }
        return setor;
      })
    );
  };

  const alterarNomeSetorEAtualizaFuncionario = (setorAlterado) => {
    setores.find((set) => set.nomeSetor === setorAlterado.nomeNovo) !==
    undefined
      ? alert("Setor já cadastrado, edite o funcionário ao invés disso.")
      : regexp.test(setorAlterado.nomeNovo)
      ? setSetores(
          setores.map((setor) => {
            if (setor.id === setorAlterado.id) {
              alteraSetorFuncionario(setorAlterado);
              setor.nomeSetor = setorAlterado.nomeNovo;
            }
            return setor;
          })
        )
      : alert("Nome do setor inválido");
  };

  /*FUNCIONÁRIO*/
  const [funcionarios, setFuncionario] = useState(
    JSON.parse(localStorage.getItem("funcionarios")) !== null
      ? JSON.parse(localStorage.getItem("funcionarios"))
      : []
  );

  const insereNovoFuncionario = (funcionario) => {
    regexp.test(funcionario.nome) || regexp.test(funcionario.cargo)
      ? setFuncionario([...funcionarios, funcionario])
      : alert("Nome ou cargo inválidos");
  };

  const deletarFuncionario = (id) => {
    setFuncionario(funcionarios.filter((funcionario) => funcionario.id !== id));
  };

  const alteraSetorFuncionario = (setorAlterado) => {
    setores.forEach((setor) => {
      if (setor.id === setorAlterado.id) {
        setFuncionario(
          funcionarios.map((funcionario) => {
            if (funcionario.setor === setor.nomeSetor)
              funcionario.setor = setorAlterado.nomeNovo;
            return funcionario;
          })
        );
      } else return;
    });
  };

  const alterarFuncionario = (funcionarioAlterado) => {
    setFuncionario(
      funcionarios.map((funcionario) => {
        if (funcionario.id === funcionarioAlterado.id) {
          if (
            funcionarioAlterado.nomeNovo !== "" &&
            regexp.test(funcionarioAlterado.nomeNovo)
          )
            funcionario.nome = funcionarioAlterado.nomeNovo;

          if (
            funcionarioAlterado.cargoNovo !== "" &&
            regexp.test(funcionarioAlterado.cargoNovo)
          )
            funcionario.cargo = funcionarioAlterado.cargoNovo;

          if (
            funcionarioAlterado.imgNova !== "" &&
            regexp.test(funcionarioAlterado.imgNova)
          )
            funcionario.img = funcionarioAlterado.imgNova;

          if (
            funcionarioAlterado.setorNovo !== "" &&
            regexp.test(funcionarioAlterado.setorNovo)
          )
            funcionario.setor = funcionarioAlterado.setorNovo;
        }
        return funcionario;
      })
    );
  };

  const resolveFavorito = (id) => {
    setFuncionario(
      funcionarios.map((funcionario) => {
        if (funcionario.id === id) funcionario.favorito = !funcionario.favorito;
        return funcionario;
      })
    );
  };

  useEffect(() => {
    resolveLocalStorage("funcionarios", funcionarios);
    resolveLocalStorage("setores", setores);
  }, [setores, funcionarios]);

  return (
    <div className="App">
      <Banner img="/img/banner.png" alt="Banner principal da Organo" />
      <Formulario
        enviaNovoFuncionario={insereNovoFuncionario}
        setores={setores.map((setor) => setor)}
        enviaNovoSetor={insereNovoSetor}
      />
      <h2>Minha Organização</h2>

      {setores.map((setor) => (
        <Setor
          key={setor.id}
          setor={setor}
          setores={setores}
          retornaFuncionario={alterarFuncionario}
          aoDeletarFuncionario={deletarFuncionario}
          aoDeletarSetor={deletarSetorEFuncionarios}
          aoFavoritar={resolveFavorito}
          funcionarios={funcionarios.filter(
            (funcionario) => funcionario.setor === setor.nomeSetor
          )}
          aoMudarCorSetor={alterarCorSetor}
          aoMudarNomeSetor={alterarNomeSetorEAtualizaFuncionario}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
