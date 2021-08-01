import axios from 'axios';
import React from 'react';
import Header from './components/Header';
import ShowUser from './components/ShowUser';
import Footer from './components/Footer';

import './styles/global.scss';
import './styles/app.scss';
import RepositoriesList from './components/RepositoriesList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.cardUser = React.createRef();
    this.pageTop = React.createRef();
  }

  state = {
    text: '',
    user: {},
    repositories: [],
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  executeScrollToTop = () => this.pageTop.current.scrollIntoView();

  executeScroll = () => { this.cardUser.current.scrollIntoView() };

  componentDidMount() {
    this.executeScrollToTop()
  }

  async handleUserSearch(e) {
    e.preventDefault()

    const emptyField = this.state.text.trim() === '';

    if (!emptyField) {
      try {
        const githubUser = await axios.get(`https://api.github.com/users/${this.state.text}`)
          .then(response => response.data);

        const userRepositories = await axios.get(githubUser.repos_url).then(response => response.data);

        this.setState({
          user: githubUser,
          repositories: userRepositories
        })
        if (this.state.user.id) {
          this.executeScroll();
        }
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
      <div className="App" ref={this.pageTop}>
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
          <div className="scroll-to" ref={this.cardUser}></div>
          <ShowUser user={this.state.user} />
          {this.state.repositories.length >= 1 &&
            <section className="repositories-list">
              <div className="repositóries-title">
                <h1>Repositórios</h1>
              </div>
              <RepositoriesList repositories={this.state.repositories} />
            </section>
          }
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
