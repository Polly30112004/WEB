import React, { Component } from 'react';
import { companyData } from '../data';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>© {new Date().getFullYear()} {companyData.name}. {companyData.slogan}</p>
      </footer>
    );
  }
}

export default Footer;