import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";


class Alunos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alunos: [],
    };
  }

  //---> Metodos do ciclo de vida do REACT
  componentDidMount() {
    //É CHAMADO QUANDO O COMPONENTE É MONTADO
    //Quando o componente for montado vai ocorrer a busca pelos dados na API
    this.buscarAlunos();
  }

  componentWillUnmount() {
    //É EXECUTADO QUANDO O COMPONENTE É DESMONTADO (SOME DA TELA)
    
  }

  buscarAlunos = () => {
    //O metodo FETCH faz a requisição e retorna os dados atravês do THEN
    fetch("http://localhost:8080/alunos")
      .then((resposta) => resposta.json())
      .then((dados) => {
        this.setState({ alunos: dados });
      });
  };

  deletarAluno = (id) => {
    fetch("http://localhost:8080/alunos/" + id, { method: "DELETE" }).then(
      (resposta) => {
        if (resposta.ok) {
          this.buscarAlunos();
        }
      }
    );
  };

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {this.state.alunos.map((aluno) => (
            <tr>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.email}</td>
              <td>
                <Button variant="primary" style={{"marginRight": "10px"}}>Atualizar</Button> 
                <Button variant="danger" onClick={() => this.deletarAluno(aluno.id)}>Excluir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default Alunos;
