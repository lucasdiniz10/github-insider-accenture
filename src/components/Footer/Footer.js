import React from 'react';

import './styles.scss'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>
          Feito com <img src="/images/heart.svg" alt="Amor" /> por <a href="https://github.com/lucasdiniz10/github-insider-accenture" target="_blank" rel="noreferrer">Lucas Diniz</a> 😄
        </p>
      </footer>
    );
  }
}

export default Footer;