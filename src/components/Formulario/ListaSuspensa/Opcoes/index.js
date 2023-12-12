export const Opcoes = ({ setores }) => {
  return setores.map((setor) => (
    <option key={setor.id}>{setor.nomeSetor}</option>
  ));
};
