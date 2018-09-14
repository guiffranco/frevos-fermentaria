import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/lab/Slider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './App.css';

class Calculadora extends Component {
  constructor() {
    super();
    this.state = {
      densidadeFinal: 1.022,
      abv: 10,
      volumeInicial: 20,
      melInicial:  6.64,
      volumeFinal:  5.06,
      melAdocar: 1.58,
      melTotal: 21.15,
      qtdGarrafas: 28.19,
      nome: '',
      descricao: '',
    };
  }

  calculoMelInicial = () => 0.025298311*this.state.abv*this.state.volumeInicial;

  calculoVolumeFinal = () => (-(2.5*(Math.pow(10,8))*this.state.volumeInicial)/(6.15942029*(Math.pow(10,8)*this.state.densidadeFinal)-8.65942029*(Math.pow(10,8))));

  calculoMelAdocar = () => ((this.state.densidadeFinal-1)*(3.4)*this.calculoVolumeFinal());

  calculoMelTotal = () => (this.calculoMelAdocar()+this.calculoMelInicial());

  calculoQtdGarrafas = () => (this.calculoVolumeFinal()/0.75);

  //Forms changes:
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleChangeSliderVI = (event, volumeInicial) => {
    this.setState({ volumeInicial});
    this.setState({
      melInicial: this.calculoMelInicial(),
      volumeFinal: this.calculoVolumeFinal(),
      melAdocar: this.calculoMelAdocar(),
      melTotal: this.calculoMelTotal(),
      qtdGarrafas: this.calculoQtdGarrafas(),
    });
  };

  handleChangeSliderABV = (event, abv) => {
    this.setState({ abv});
    this.setState({
      melInicial: this.calculoMelInicial(),
      volumeFinal: this.calculoVolumeFinal(),
      melAdocar: this.calculoMelAdocar(),
      melTotal: this.calculoMelTotal(),
      qtdGarrafas: this.calculoQtdGarrafas(),
    });
  };

  handleChangeSliderDF = (event, densidadeFinal) => {
    this.setState({ densidadeFinal});
    this.setState({
      melInicial: this.calculoMelInicial(),
      volumeFinal: this.calculoVolumeFinal(),
      melAdocar: this.calculoMelAdocar(),
      melTotal: this.calculoMelTotal(),
      qtdGarrafas: this.calculoQtdGarrafas(),
    });
  };

  salvarReceita = (event) => {
    this.props.callbackFromParent(this.state);
    this.setState({
      open: false,
      nome: '',
      descricao: '',
    });
  };

  //Dialog things:
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  render () {
    return(
      <div>
        <h2> Calculadora </h2>
        <div className="App-body">
          <p className="App-intro">
            Selecione as quantidades:
          </p>
          <form noValidate autoComplete="off">
            <TextField
              id="volumeInicial"
              label="Volume Inicial (em L)"
              value={parseFloat(this.state.volumeInicial).toFixed(1)}
              onChange={this.handleChange('volumeInicial')}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
            <div className="slider">
              <Slider value={this.state.volumeInicial} min={0} max={120} step={0.5} onChange={this.handleChangeSliderVI} />
            </div>
            <TextField
              id="abv"
              label="ABV (em %)"
              value={parseFloat(this.state.abv).toFixed(1)}
              onChange={this.handleChange('abv')}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
            <div className="slider">
              <Slider value={this.state.abv} min={0} max={20} step={0.1} onChange={this.handleChangeSliderABV} />
            </div>
            <TextField
              id="densidadeFinal"
              label="Densidade Final"
              value={parseFloat(this.state.densidadeFinal).toFixed(3)}
              onChange={this.handleChange('densidadeFinal')}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
            <div className="slider">
              <Slider value={this.state.densidadeFinal} min={1} max={1.4} step={0.001} onChange={this.handleChangeSliderDF} />
            </div>
          </form>
          {/*Results:*/}
          <div className="resultado">
            <h3> Resultados: </h3>
            <p>Mel total:  <b>{parseFloat(this.calculoMelTotal()).toFixed(2)}</b> Kg</p>
            <p>Mel inicial:  <b>{parseFloat(this.calculoMelInicial()).toFixed(2)}</b> Kg</p>
            <p>Mel para adoçar:  <b>{parseFloat(this.calculoMelAdocar()).toFixed(2)}</b> Kg</p>
            <p>Volume final:  <b>{parseFloat(this.calculoVolumeFinal()).toFixed(2)}</b> L</p>
            <p>Quantidade de garrafas:  <b>{parseFloat(this.calculoQtdGarrafas()).toFixed(2)}</b> de 750 mL</p>
          </div>
          {/*Dialog:*/}
          <div>
            <Button onClick={this.handleClickOpen} variant="outlined" color="primary">
              Salvar Receita
            </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
             <DialogTitle id="form-dialog-title">Salvar uma receita</DialogTitle>
             <DialogContent>
               <DialogContentText>
                 Digite o nome de sua receita para salvá-la:
               </DialogContentText>
               <TextField
                 autoFocus
                 margin="dense"
                 value={this.state.nome}
                 onChange={this.handleChange('nome')}
                 id="nome"
                 type="text"
                 fullWidth
               />
               <DialogContentText>
                 Descreva sua receita:
               </DialogContentText>
               <TextField
                 margin="dense"
                 value={this.state.descricao}
                 onChange={this.handleChange('descricao')}
                 id="descricao"
                 type="text"
                 fullWidth
               />
             </DialogContent>
             <DialogActions>
               <Button onClick={this.handleClose} color="primary">
                 Cancelar
               </Button>
               <Button onClick={this.salvarReceita} color="primary">
                 Salvar
               </Button>
             </DialogActions>
           </Dialog>
         </div>
        </div>
      </div>
    );
  }
}

export default Calculadora;
