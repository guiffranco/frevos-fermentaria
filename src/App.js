import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import * as routes from './constants/routes';
import Footer from './footer.js'
import Navigation from './navigation.js'
import Home from './home.js'
import Calculadora from './calculadora.js'
import Receitas from './receitas.js'
import { DB_CONFIG } from './Config'
import firebase from 'firebase/app';
import 'firebase/database'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dadosCalculadora: [],
    };
    this.removeData = this.removeData.bind(this);

    if (!firebase.apps.length) {
        this.app = firebase.initializeApp(DB_CONFIG);
        this.database = this.app.database().ref().child('dadosCalculadora');
    }
  }

  myCallback = (dataFromChild) => {
    this.database.push().set({ dataFromChild: dataFromChild });
  }

  removeData = (dataId) => {
    this.database.child(dataId).remove();
  }

  componentWillMount() {
    const previousData = this.state.dadosCalculadora;
    this.database.on('child_added', snap => {
      previousData.push({
        id: snap.key,
        dataFromChild: snap.val().dataFromChild,
      })
    })

    this.setState({
      dadosCalculadora: previousData
    })

    this.database.on('child_removed', snap=> {
      for (var i = 0; i < previousData.length; i++) {
        if(previousData[i].id === snap.key){
          previousData.splice(i, 1);
        }
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navigation />
            <Route exact path={routes.LANDING} component={Home}/>
            <Route path={routes.HOME} component={Home}/>
            <Route path={routes.CALCULADORA} render={()=><Calculadora callbackFromParent={this.myCallback}/>}/>
            <Route path={routes.RECEITAS} render={()=><Receitas dados={this.state.dadosCalculadora} removeData={this.removeData}/>}/>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
