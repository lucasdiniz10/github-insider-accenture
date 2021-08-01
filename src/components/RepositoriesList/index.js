import React from 'react';

import './styles.scss';

class RepositoriesList extends React.Component {

  render() {
    return (
      <ul className="repositories-list">
        <li className="container">
          <div className="details">
            <strong>Nome do repositório</strong>
            <p>Descrição do repositório apoifnapifsnpasifnpaisnfpaisnfpaisnfpaisnfpaisnfpasinfpasifnpafnpapinfdnpaindfpandfpnapdifnpaidnfpainfpiandfpaindfpinafpnapdifnpaifndpidnfpandfpdfnpaifndpanfpandi</p>
            <small>Typescript</small>
            <small>Typescript</small>
          </div>
          <div className="btn">
            <button type="button" className="go-to-github">
              <a href="" className="html_url" target="_blank" rel="noreferrer">Ir para repositório</a>
            </button>
          </div>
        </li>
      </ul>
    )
  }
}

export default RepositoriesList;