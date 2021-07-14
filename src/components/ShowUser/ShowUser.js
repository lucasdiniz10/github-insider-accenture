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

        <div className="show-user-content">
          <img src={this.props.user.avatar_url} alt="Github Avatar" />
          <h1>{this.props.user.name}</h1>
          <p className="location">{this.props.user.location}</p>
          <p className="bio">{this.props.user.bio}</p>
          <a href={this.props.user.blog} className="blog">{this.props.user.blog}</a>
          <div className="spans">
            <p>Seguidores: <span>{this.props.user.followers}</span></p>
            <p>Seguindo: <span>{this.props.user.following}</span></p>
            <p>Repositórios Públicos: <span>{this.props.user.public_repos}</span></p>
          </div>
        </div>
      </section>
    );
  }
}

export default ShowUser;