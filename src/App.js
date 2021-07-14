import axios from 'axios';
import React from 'react';
import Header from './components/Header/Header';
import './styles/global.scss';

class App extends React.Component {
  state = {
    text: '',
    user: {},
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  async handleUserSearch(e) {
    e.preventDefault()

    const emptyField = this.state.text.trim() === '';

    if (!emptyField) {
      const githubUser = await axios.get(`https://api.github.com/users/${this.state.text}`)
        .then(response => response.data)

      this.setState({
        user: githubUser,
      })
    } else {
      alert("Preencha o campo de busca corretamente.");
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <h2>Busque usuários no <span>Github</span></h2>
          <form onSubmit={this.handleUserSearch.bind(this)}>
            <input type="text" onChange={this.handleTextChange.bind(this)} />
            <button type="submit">Buscar Usuário</button>
          </form>
        </main>
      </div>
    );
  }
}

export default App;
