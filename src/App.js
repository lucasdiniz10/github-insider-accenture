import axios from 'axios';
import React from 'react';
import Header from './components/Header/Header';

import './styles/global.scss';
import './styles/app.scss';
import ShowUser from './components/ShowUser/ShowUser';
import Footer from './components/Footer/Footer';

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
      try {
        const githubUser = await axios.get(`https://api.github.com/users/${this.state.text}`)
          .then(response => response.data)

        this.setState({
          user: githubUser,
        })
      } catch (error) {
        alert(`${error.message} - Tente Novamente`)
        this.setState({ text: '' })
      }
    } else {
      alert("Preencha o campo de busca corretamente.");
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main className="container">
          <section className="form-hero-section">
            <div className="title-container">
              <h1>Busque <br />usuários<br /> no <span>Github <img src="/images/github.svg" alt="Ícone do github" /></span></h1>
              <form onSubmit={this.handleUserSearch.bind(this)}>
                <input placeholder="Nome do usuário" type="text" value={this.state.text} onChange={this.handleTextChange.bind(this)} />
                <button type="submit">Buscar</button>
              </form>
            </div>
            <div className="hero-container">
              <img src="/images/hero.svg" alt="Mulher pesquisando" id="hero-image" />
            </div>
          </section>
          <ShowUser user={this.state.user} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
