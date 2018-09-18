import React, { Component } from 'react';
import SimpleExpansionPanel from './simpleExpansionPanel.js'

class Receitas extends Component {
  // Adicionar um timer pra renderizar automaticamente (gambiarra)
  // Talvez modificar o map pra passar state ao inves de props
  // Component nao ta fazendo o map (acho), apesar de ter os dados pra isso (props)
  // OBSERVAÇÃO: console diz que o component não deu mount

  constructor(props){
    super(props);
    this.setState({
      some: ''
    });
    console.log("oi: ", this.props); // RENDERIZOU E TEM OS DADOS já, estranho
  }

  //  Forcing a rerender
  componentWillReceiveProps() {
    this.setState({
      state: this.state
    });
  }

  getIDCallback = (id) => {
    // Forcing a rerender with setState
    this.setState({
      state: this.state
    });
    this.props.removeData(id)
  }

  componentDidUpdate() {
    console.log("Dados Update: ", this.props.dados[0].id);
  }

  render() {
    return (
      <div>
        <h2> Suas receitas</h2>
        {
          this.props.dados.map((dados)=> {
            return (
              <SimpleExpansionPanel
                id={dados.id}
                titulo={dados.dataFromChild.nome}
                descricao={dados.dataFromChild.descricao}
                densidadeFinal={dados.dataFromChild.densidadeFinal}
                abv={dados.dataFromChild.abv}
                volumeInicial={dados.dataFromChild.volumeInicial}
                melInicial={dados.dataFromChild.melInicial}
                volumeFinal={dados.dataFromChild.volumeFinal}
                melAdocar={dados.dataFromChild.melAdocar}
                melTotal={dados.dataFromChild.melTotal}
                qtdGarrafas={dados.dataFromChild.qtdGarrafas}
                getID={this.getIDCallback}
              />
            )
          })
        }
      </div>
    );
  }
}

export default Receitas;
