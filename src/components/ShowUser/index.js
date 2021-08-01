import React from 'react';

import './styles.scss'

class ShowUser extends React.Component {
  render() {
    return (
      <section className="show-user-container">
        <div className="show-user-title">
          <img src="/images/github-alt.svg" alt="Ícone do Github" />
          <h1>Resultado</h1>
        </div>
        {!this.props.user.id ?
          <div className="show-user-content">
            <strong>Ainda sem resultado 😢</strong>
            <p>Busque por um usuário</p>
          </div>
          :
          <div className="show-user-content">
            <img src={this.props.user.avatar_url} alt="Github Avatar" />
            <h1>{this.props.user.name}</h1>
            <p className="location">{this.props.user.location}</p>
            <p className="bio">{this.props.user.bio}</p>
            <a href={this.props.user.blog} className="blog" target="_blank" rel="noreferrer">{this.props.user.blog}</a>
            <div className="spans">
              <p>Seguidores: <span>{this.props.user.followers}</span></p>
              <p>Seguindo: <span>{this.props.user.following}</span></p>
              <p>Repositórios Públicos: <span>{this.props.user.public_repos}</span></p>
            </div>
            <button type="button" className="go-to-github">
              <a href={this.props.user.html_url} className="html_url" target="_blank" rel="noreferrer">Ir para Github</a>
            </button>
          </div>
        }
      </section>
    );
  }
}

export default ShowUser;