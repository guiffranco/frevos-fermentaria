import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{props.titulo}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <b>ID: </b>{props.id} <br/>
            <b>Descrição:</b>  {props.descricao} <br/>
            <b>Densidade Final:</b> {props.densidadeFinal} <br/>
            <b>ABV:</b> {props.abv} <br/>
            <b>Volume Inicial:</b> {props.volumeInicial} <br/>
            <b>Mel Inicial:</b> {props.melInicial} <br/>
            <b>Mel Adocar:</b> {props.melAdocar} <br/>
            <b>Mel Total:</b> {props.melTotal} <br/>
            <b>Volume Final:</b> {props.volumeFinal}  <br/>
            <b>Quantidade de Garrafas:</b> {props.qtdGarrafas} <br/>
          </Typography>
          <Button color="primary">
            Apagar Receita
          </Button>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
