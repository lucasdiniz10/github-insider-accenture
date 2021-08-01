import React from 'react';

import './styles.scss';

class RepositoriesList extends React.Component {
  render() {
    return (
      <ul className="repositories-list">
        {this.props.repositories.map(repository => (
          <li className="container">
            <div className="details">
              <strong>{repository.name}</strong>
              <p>{repository.description ?? "Sem descrição"}</p>
              {repository.language && <small>{repository.language}</small>}
            </div>
            <div className="btn">
              <button type="button" className="go-to-github">
                <a href={repository.html_url} className="html_url" target="_blank" rel="noreferrer">Ir para repositório</a>
              </button>
            </div>
          </li>
        ))}
      </ul>
    )
  }
}

export default RepositoriesList;