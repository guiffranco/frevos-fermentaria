import React, { Component } from 'react';
import dudu from './Dudu.jpeg';
import './App.css';

class Home extends Component {
  render () {
    return(
      <div>
        <header className="App-header">
          <img src={dudu} className="App-logo" alt="logo" />
        </header>
        <h2> Bem vindo ao app web do Frevo's Fermentaria! </h2>
        <p> Conheça a <i> Frevo's Fermentaria </i> pelo nosso <a href="https://www.instagram.com/frevosfermentaria" target="_blank">Instagram</a> </p>
        <h3> Como usar a calculadora: </h3>
        <p> Escolha a quantidade dos ingredientes e os resultados serão mostrados no fim da página. </p>
        <p> Caso queira armazenar sua receita, clique no botão <i> Salvar Receita</i>. </p>
      </div>
    );
  }
}

export default Home;
