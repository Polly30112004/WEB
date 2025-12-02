import React from 'react';
import { companyData } from '../data';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {companyData.name}</p>
      <p>Контакты: example@email.com</p>
    </footer>
  );
};

export default Footer;