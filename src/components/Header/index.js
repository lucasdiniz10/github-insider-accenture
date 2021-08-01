import React from 'react';

import './styles.scss'

class Header extends React.Component {
  render() {
    return (
      <header className="header-container">
        <div className="header-content">
          <img src="/images/logo.svg" alt="Github Insider" />
        </div>
      </header>
    );
  }
}

export default Header;