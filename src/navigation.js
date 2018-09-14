import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import * as routes from './constants/routes';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#181818' },
    secondary: { main: '#303039' },
  },
});

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class Navigation extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <AppBar color="primary" position="static">
            <Tabs centered="false" value={value} onChange={this.handleChange}>
              <Tab value={0} label="Início" component={Link} to={routes.HOME}/>
              <Tab value={1} label="Calculadora" component={Link} to={routes.CALCULADORA}/>
              <Tab value={2} label="Receitas" component={Link} to={routes.RECEITAS}/>} />
            </Tabs>
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);
