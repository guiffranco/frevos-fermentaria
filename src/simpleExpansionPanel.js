import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Delete from '@material-ui/icons/Delete';
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
            <Typography align="left">
              <b>Descrição:</b>  {this.props.descricao} <br/><br/>
              <b>Densidade Final:</b> {this.props.densidadeFinal} <br/>
              <b>ABV:</b> {this.props.abv}%<br/>
              <b>Volume Inicial:</b> {this.props.volumeInicial.toFixed(2)} L <br/>
              <b>Mel Inicial:</b> {this.props.melInicial.toFixed(2)} Kg <br/>
              <b>Mel Adocar:</b> {this.props.melAdocar.toFixed(2)} Kg <br/>
              <b>Mel Total:</b> {this.props.melTotal.toFixed(2)} Kg <br/>
              <b>Volume Final:</b> {this.props.volumeFinal.toFixed(2)} L <br/>
              <b>Quantidade de Garrafas:</b> {this.props.qtdGarrafas.toFixed(2)} de 750mL<br/>
            </Typography>
            <Typography align="right">
              <Button color="primary" onClick={this.handleRemoveData}>
                <Delete/>
              </Button>
            </Typography>
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
