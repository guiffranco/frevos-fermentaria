import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import './App.css';

class SimpleExpansionPanel extends Component {
  constructor(props) {
    super(props);
    this.dataFromChild = props.dataFromChild;
  }

  handleRemoveData = (event) => {
    this.props.getID(this.props.id);
  }

  render() {
    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{this.props.titulo}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="panel">
            <Typography>
              <b>ID: </b>{this.props.id} <br/>
              <b>Descrição:</b>  {this.props.descricao} <br/>
              <b>Densidade Final:</b> {this.props.densidadeFinal} <br/>
              <b>ABV:</b> {this.props.abv} <br/>
              <b>Volume Inicial:</b> {this.props.volumeInicial} <br/>
              <b>Mel Inicial:</b> {this.props.melInicial} <br/>
              <b>Mel Adocar:</b> {this.props.melAdocar} <br/>
              <b>Mel Total:</b> {this.props.melTotal} <br/>
              <b>Volume Final:</b> {this.props.volumeFinal}  <br/>
              <b>Quantidade de Garrafas:</b> {this.props.qtdGarrafas} <br/>
            </Typography>
            <Button color="primary" onClick={this.handleRemoveData}>
              Apagar Receita
            </Button>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default SimpleExpansionPanel;
