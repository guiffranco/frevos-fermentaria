import React, { Component } from 'react';
import SimpleExpansionPanel from './simpleExpansionPanel.js'

class Receitas extends Component {
  constructor(props){
    super(props);
    this.setState({
      some: ''
    });
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
      state: this.state,
    });
    this.props.removeData(id)
  }

  // Forcing rerender showing updated data
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ state: this.state }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
