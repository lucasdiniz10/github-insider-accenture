import React from 'react';

import './styles.scss'

class ShowUser extends React.Component {
  render() {
    return (
      <section className="show-user-container">
        <div className="show-user-content">
          <img src="https://avatars.githubusercontent.com/u/47890460?v=4" alt="Github Avatar" />
          <h1>Lucas Diniz</h1>
          <p className="location">Recife, Pernambuco, Brasil</p>
          <p className="bio">Desenvolvedor front-end, apaixonado por tecnologia e sempre disposto a aprender mais e trocar experiências.</p>
          <a href="linkedin.com/in/lucas-alvarenga-diniz/" className="blog">linkedin.com/in/lucas-alvarenga-diniz/</a>
          <p>Seguidores: <span>5</span></p>
          <p>Seguindo: <span>7</span></p>
          <p>Repositórios Públicos: <span>21</span></p>

        </div>
      </section>
    );
  }
}

export default ShowUser;